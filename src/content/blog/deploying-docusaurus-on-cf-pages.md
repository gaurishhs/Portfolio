---
title: Deploying Docusaurus on Cloudflare Pages
date: 2022-01-29T03:53:39Z
---

Hello there!
Docusaurus is a commonly used static site generator. It is built on top of [React.js](https://reactjs.org) and can be used to make any kind of site (personal website, product, blog, marketing landing pages, etc).

Cloudflare Pages is a JAMStack platform for frontend developers to collaborate and deploy websites.

## Creating the App

- Open up your shiny terminals and create a Docusaurus app
  How to create: https://docusaurus.io/docs/installation#scaffold-project-website

![Creating Docusaurus App](../../assets/blog/docusaurus-app-created.png)

Now, Once you've created change your directory to the project.

Then, Run the start command.

It will open up your browser to the development website: http://localhost:3000/

![Demo website](../../assets/blog/docusaurus-demo.png)

Now, Your Docusaurus Website is ready, Let's deploy it over Cloudflare pages.

**Change your docusaurus.config.js url field to https://[your-cloudflare-pages-app-name].pages.dev or your custom domain.**

~~Unlike Vercel and Netlify, Cloudflare pages doesn't support cli deployments yet (They might come sooner or later)~~ [^1]

[^1]: You can now deploy to Cloudflare pages via Wranger CLI. Read more [here](https://blog.cloudflare.com/cloudflare-pages-direct-uploads/)

So, You'll need to push all the code over Github.

```bash
git init
git add -A
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/gaurishhs/Docusaurus-Cf-Pages.git
git push -u origin main
```

After Running these commands, If you check your Github, You'll find the code there.

Head to your Cloudflare pages dashboard, Signup for pages if you haven't yet.

Create an app and select your Github repository.

Choose Create React App as your framework preset.

Create an environment variable `NODE_VERSION` with the value `16.13.2`

Docusaurus requires a node version more than or equal to node v14, 16.13.2 is a LTS(Long time support) Version of Node.js

Then Click Deploy, Your app will be deployed in a few seconds.

> Cloudflare has now introduced Fast builds 😃

https://docusaurus-cf-pages.pages.dev/

[Add a Custom Domain To Your App](https://developers.cloudflare.com/pages/get-started#adding-a-custom-domain)

[Redirecting www to apex domain](https://developers.cloudflare.com/pages/how-to/www-redirect)

### Contact

- If you face any issues, Do not hesitate to [contact me](https://github.com/gaurishhs)

### Useful Links

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Docusaurus Discord Server](https://discord.com/invite/docusaurus)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Developers Discord Server](https://discord.com/invite/cloudflaredev)
