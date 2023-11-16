---
title: Create a CRUD Web App with Bun and Elysia.js
date: 2023-03-06T07:39:52Z
---

We will be creating a crud web application with [Bun](https://bun.sh) and [Elysia.js](https://elysiajs.com)

Before we start creating, Let's get to know about Bun?

## What is Bun?

Bun is an incredibly fast JavaScript runtime, bundler, transpiler and package manager similar to [Node.js](https://nodejs.org) and [Deno](https://deno.land) . It has a lot of promising features [Roadmap] (https://github.com/oven-sh/bun/issues/159). It was created by [Jarred Sumner](https://twitter.com/jarredsumner) in [Zig](http://ziglang.org/) and uses [JavaScript core](https://developer.apple.com/documentation/javascriptcore) instead of [v8](https://v8.dev)

The cool thing about this is it has built-in TypeScript support, Yes you no longer need tsc, Moreover you can write packages in Typescript and publish it to the NPM Registry as-is, Though your package will then be limited to Bun users.

The benchmarks can be seen on the website

Let's install Bun now,

```bash
curl -fsSL https://bun.sh/install | bash
```

Verify your install and let's dive into creating the web application.

## Creating the Application

First of all, Create a new directory and change your path to it and then run the `bun init` command.

It will create a Typescript based new project, Now let's begin writing some code. Open the directory in your IDE (mine is [VSCode](https://code.visualstudio.com)).

You'll see something like this:

![Project bootstrapped](/assets/blog/bun-starter.png)

Now, Let's install our dependencies:

-   `elysia` - The web framework we're using.
-   `@elysiajs/html` - HTML Plugin for the web framework

```bash
bun a elysia @elysiajs/html
```

Now's let's create the backend first, We'll create an api which can be called from the frontend to store,retrieve,edit and delete books stored in SQLite Database (BTW, Bun provides the fastest SQLite in JavaScript ecosystem)

We create a `db.ts` to store the Database stuff which should look like this:

```ts
import { Database } from "bun:sqlite";

export interface Book {
    id?: number;
    name: string;
    author: string;
}

export class BooksDatabase {
    private db: Database;

    constructor() {
        this.db = new Database("books.db");
        // Initialize the database
        this.init()
            .then(() => console.log("Database initialized"))
            .catch(console.error);
    }

    // Get all books
    async getBooks() {
        return this.db.query("SELECT * FROM books").all();
    }

    // Add a book
    async addBook(book: Book) {
        // q: Get id type safely
        return this.db
            .query(
                `INSERT INTO books (name, author) VALUES (?, ?) RETURNING id`
            )
            .get(book.name, book.author) as Book;
    }

    // Update a book
    async updateBook(id: number, book: Book) {
        return this.db.run(
            `UPDATE books SET name = '${book.name}', author = '${book.author}' WHERE id = ${id}`
        );
    }

    // Delete a book
    async deleteBook(id: number) {
        return this.db.run(`DELETE FROM books WHERE id = ${id}`);
    }

    // Initialize the database
    async init() {
        return this.db.run(
            "CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, author TEXT)"
        );
    }
}
```

Here, We create a class `BooksDatabase` and create a `Database` instance in it, Add methods to create,retrieve,edit books and initialize the database (create tables).

What does each function do?

-   `addBook` - Creates a new book in the database and return the autoincremented id
-   `getBooks` - Get all the books in the database
-   `updateBook` - Update a existing book in the database
-   `deleteBook` - Delete a book from the database

Now, Let's begin creating the API, Elysia is a minimalistic web framework and does not require any extra knowledge, It is full of awesome features, Check out the available plugins [here](https://elysiajs.com/collections/plugins.html)

We start with this:

```ts
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { BooksDatabase } from "./db.js";

new Elysia().use(html()).decorate("db", new BooksDatabase()).listen(3000);
```

Create a new Elysia instance, Inject the html plugin and add a new `db` property which can accessed by our route handlers.

Now, let's start creating the routes

First, Let's create a `index.html` file which will contain our main site

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Bookstore</title>
        <script src="/script.js"></script>
    </head>
    <body>
        <h1>My Bookstore</h1>
        <button onclick="addNewBook()" type="button">Add Book</button>
        <button onclick="deleteBook()" type="button">Remove Book</button>
        <button onclick="updateBook()" type="button">Update Book</button>
        <ul id="bookList"></ul>
    </body>
</html>
```

This is a simple overview of how the file will look, Make sure to add `<!DOCTYPE html>` in the starting of the file so that the html plugin can add the Content type header.

Now, moving back to our `index.ts` we create a route to serve this `index.html`. Elysia provides a static plugin as well which we won't use since we have only 2 static files.

Create a new `GET` route which will read `index.html` file and send the text

```ts
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { BooksDatabase } from "./db.js";

new Elysia()
    .use(html())
    .decorate("db", new BooksDatabase())
    .get("/", () => Bun.file("index.html").text())
    .listen(3000);
```

Create a `script.js` route and add a route for the same

```ts
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { BooksDatabase } from "./db.js";

new Elysia()
    .use(html())
    .decorate("db", new BooksDatabase())
    .get("/", () => Bun.file("index.html").text())
    .get("/script.js", () => Bun.file("script.js").text())
    .listen(3000);
```

Now, Let's create the database routes,

```ts
import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { BooksDatabase } from "./db.js";

new Elysia()
    .use(html())
    .decorate("db", new BooksDatabase())
    .get("/", () => Bun.file("index.html").text())
    .get("/script.js", () => Bun.file("script.js").text())
    .get("/books", ({ db }) => db.getBooks())
    .listen(3000);
```

Notice the db autocomplete in the handler :)

![DB autocomplete](/assets/blog/kvb-ts.png)

Create routes for creating a book

```ts
import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { BooksDatabase } from "./db.js";

new Elysia()
    .use(html())
    .decorate("db", new BooksDatabase())
    .get("/", () => Bun.file("index.html").text())
    .get("/script.js", () => Bun.file("script.js").text())
    .get("/books", ({ db }) => db.getBooks())
    .post(
        "/books",
        async ({ db, body }) => {
            console.log(body);
            const id = (await db.addBook(body)).id;
            console.log(id);
            return { success: true, id };
        },
        {
            schema: {
                body: t.Object({
                    name: t.String(),
                    author: t.String(),
                }),
            },
        }
    )

    .listen(3000);
```

Notice the schema validation, Elysia provides schema validation out of the box powered by `@sinclair/typebox`, Read more about this [here](https://elysiajs.com/concept/schema.html)

Now, let's create the remaining delete and put routes

After which your file should look like this:

```ts
import { Elysia, t } from "elysia";
import { BooksDatabase } from "./db.js";
import { html } from "@elysiajs/html";

new Elysia()
    .use(html())
    .decorate("db", new BooksDatabase())
    .get("/", () => Bun.file("index.html").text())
    .get("/script.js", () => Bun.file("script.js").text())
    .get("/books", ({ db }) => db.getBooks())
    .post(
        "/books",
        async ({ db, body }) => {
            const id = (await db.addBook(body)).id;
            return { success: true, id };
        },
        {
            schema: {
                body: t.Object({
                    name: t.String(),
                    author: t.String(),
                }),
            },
        }
    )
    .put(
        "/books/:id",
        ({ db, params, body }) => {
            try {
                db.updateBook(parseInt(params.id), body);
                return { success: true };
            } catch (e) {
                return { success: false };
            }
        },
        {
            schema: {
                body: t.Object({
                    name: t.String(),
                    author: t.String(),
                }),
            },
        }
    )
    .delete("/books/:id", ({ db, params }) => {
        try {
            db.deleteBook(parseInt(params.id));
            return { success: true };
        } catch (e) {
            return { success: false };
        }
    })
    .listen(3000);
```

Let's create the `script.js` now:

```js
window.addEventListener(
    "DOMContentLoaded",
    function () {
        fetch("/books", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((books) => {
                document.getElementById("bookList").innerHTML = books
                    .map((book) => {
                        return `
                <li id="${book.id}">
                    ID: ${book.id} <br> Name: ${book.name} <br> Author: ${book.author}
                </li>
            `;
                    })
                    .join("");
            });
    },
    false
);
```

Whenever the page is loaded, Fetch the books and add them to the unordered list

Create the new `addNewBook` function which prompts the user for book name and author then makes the request to api to save it in the database

```js
const addNewBook = () => {
    const newBook = prompt("Book name & author (separated by a comma)");
    if (newBook) {
        const [name, author] = newBook.split(",");
        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, author }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    document.getElementById("bookList").innerHTML += `
                    <li id="${res.id}">
                        ID: ${res.id} Name: ${name} <br> Author: ${author}
                    </li>
                `;
                }
            });
    }
};
```

Create the remaining functions `updateBook` `deleteBook`

```js
const deleteBook = () => {
    const bookPrompt = prompt("Book ID");
    if (!bookPrompt) return alert("Invalid book ID");
    const bookId = parseInt(bookPrompt);
    if (bookId) {
        fetch(`/books/${bookId}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    document.getElementById(bookId).remove();
                }
            });
    }
};

const updateBook = () => {
    const bookPrompt = prompt("Book ID");
    if (!bookPrompt) return alert("Invalid book ID");
    const bookId = parseInt(bookPrompt);
    if (bookId) {
        const newBook = prompt("Book name & author (separated by a comma)");
        if (newBook) {
            const [name, author] = newBook.split(",");
            fetch(`/books/${bookId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, author }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.success) {
                        document.getElementById(bookId).innerHTML = `
                        ID: ${bookId} <br> Name: ${name} <br> Author: ${author}
                    `;
                    }
                });
        }
    }
};
```

After all this, Your file should look like this

```js
window.addEventListener(
    "DOMContentLoaded",
    function () {
        fetch("/books", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((books) => {
                document.getElementById("bookList").innerHTML = books
                    .map((book) => {
                        return `
                <li id="${book.id}">
                    ID: ${book.id} <br> Name: ${book.name} <br> Author: ${book.author}
                </li>
            `;
                    })
                    .join("");
            });
    },
    false
);

const addNewBook = () => {
    const newBook = prompt("Book name & author (separated by a comma)");
    if (newBook) {
        const [name, author] = newBook.split(",");
        fetch("/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, author }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    document.getElementById("bookList").innerHTML += `
                    <li id="${res.id}">
                        ID: ${res.id} Name: ${name} <br> Author: ${author}
                    </li>
                `;
                }
            });
    }
};

const deleteBook = () => {
    const bookPrompt = prompt("Book ID");
    if (!bookPrompt) return alert("Invalid book ID");
    const bookId = parseInt(bookPrompt);
    if (bookId) {
        fetch(`/books/${bookId}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    document.getElementById(bookId).remove();
                }
            });
    }
};

const updateBook = () => {
    const bookPrompt = prompt("Book ID");
    if (!bookPrompt) return alert("Invalid book ID");
    const bookId = parseInt(bookPrompt);
    if (bookId) {
        const newBook = prompt("Book name & author (separated by a comma)");
        if (newBook) {
            const [name, author] = newBook.split(",");
            fetch(`/books/${bookId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, author }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.success) {
                        document.getElementById(bookId).innerHTML = `
                        ID: ${bookId} <br> Name: ${name} <br> Author: ${author}
                    `;
                    }
                });
        }
    }
};
```

Time to experiment the api, Start the server using `bun index.ts` It should log Database initialized and create the `books.db` file

Head to `localhost:3000`

This is what you should see:

![Bookstore](/assets/blog/bun-demo-app.png)

How to use it?

<div className="aspect-w-16 aspect-h-9">
    <iframe
        src="https://player.vimeo.com/video/805030358"
        title="Bun web app"
        frameBorder="0"
        allow="autoplay; fullscreen"
    ></iframe>
</div>

Make sure to drop me a follow on X [@gaurishhs](https://x.com/gaurishhs)

Get the github repo [here](https://github.com/gaurishhs/bun-web-app)
