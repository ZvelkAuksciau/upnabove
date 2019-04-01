<p align="center">
  <img src="https://file-xidfrcjkaq.now.sh/" height="240">
  <h3 align="center">Up & Above website</h3>
</p>

## Development

```bash
# clone the project source
git clone git@github.com:ZvelkAuksciau/upnabove.git

# cd into the project directory
cd upnabove

# install dependencies
npm install

# Start local dev server
npm run develop
```

## Gridsome

This website is using [Gridsome](https://gridsome.org) under the hood. It is pulling data from local Forestry files (`/products`, `/projects`, `/data` or anything else you set up in `gridsome.config.js`). The `/src` directory contains all of the [Vue](https://vuejs.org/) components which can access the Forestry data through GraphQL. [Gridsome](https://gridsome.org) documentation covers how exactly it works.

## Forestry (Content Management)

This project has been pre-configured to work with Forestry. Go to `/admin` locally or [forestry.io](https://forestry.io) and login to manage the website. After changing the content, it is automatically pushed to git and subsequently deployed on Netlify. This takes a minute or two.

## Deployed with Netlify

The website gets deployed automatically on `git push` or when saving documents from Forestry. This in turn triggers Netlify's CI/CD, which is configured to run `gridsome build` which renders static html files ([more info here](https://gridsome.org/docs/how-it-works/#gridsome-build)). If the command is run successfully, the page is hosted on Netlify automatically.