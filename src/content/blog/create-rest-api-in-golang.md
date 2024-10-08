---
title: Create a Rest API in Golang
date: 2022-01-11T17:47:54Z
---

This tutorial would explain you about how you're going to code a basic rest api in golang,
We'd be using [gin](https://github.com/gin-gonic/gin) a http web server framework.

Let's begin.

# Getting Started

Open up your shiny Terminal,
Run the Commands

```sh
go mod init gin-tutorial
touch main.go
go get -u github.com/gin-gonic/gin
```

![Terminal](../../assets/blog/go-project-init.png)

Now, Let's Navigate to our main.go and start writing code with [vscode](https://code.visualstudio.com/)

On top of the file, Describe the package

```go
package main
```

Now, We'd be importing gin,

```go
package main

import "github.com/gin-gonic/gin"
```

Make sure you install gin via the command `go get -u github.com/gin-gonic/gin`

Now, We'll start making our router,

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.SetTrustedProxies([]string{"192.168.1.2"})
	r.Run()
}
```

Read more about setTrustedProxies [here](https://github.com/gin-gonic/gin#dont-trust-all-proxies)

So, If we run `go run main.go`, This is what we're gonna get...

```zsh
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:	export GIN_MODE=release
 - using code:	gin.SetMode(gin.ReleaseMode)

[GIN-debug] Environment variable PORT is undefined. Using port :8080 by default
[GIN-debug] Listening and serving HTTP on :8080

```

Now, Open up `localhost:8080` on your browser, You'd see a `404 page not found` response, Yes, Because we haven't created any routes yet.

# Creating Routes

## Get Requests

-   Get requests are handled as Router.GET, Same applies for all types of requests, Just replace GET with the type of Request,

Let's create a test route:

```go
r.GET("/get", func(c *gin.Context) {
	c.JSON(200, gin.H{
		"status": "healthy",
	})
})
```

So, If you now navigate to `localhost:8080/get`, You see a JSON Response

```json
{"status":"healthy"}
```

Perfect!

Congratulations, You Just Learned to Create Your First Rest API With Golang.
