<p align="center">
  <a href="https://www.gig.com/">
    <img alt="Gig.com" src="https://www.gig.com/wp-content/themes/gig.com-child/assets/images/logo.svg" width="60" />
  </a>
</p>
<h1 align="center">
  GiG Media Front-End test
</h1>

Make sure you have already installed Node.js and the latest
[Gatsby CLI](https://www.gatsbyjs.com/get-started/).

**NOTE** <br/>

> There are two environment files (`.env.development` and `.env.production`)
> create `.env.development` file and then use your own API url and token to get the app up and running.

## 🚀 Quick start

1.  **Development**

    Clone the repo and just run command below

    ```shell
    $ yarn && yarn start
    ```

2.  **Test**

    ```shell
    $ yarn test
    ```

3.  **Production**

    ```shell
    $ gatsby build && gatsby serve
    ```

## Dependencies

- [React](https://github.com/facebook/react): A declarative, efficient, and
  flexible JavaScript library for building user interfaces.
- [Gatsby](https://www.gatsbyjs.com/): The fastest frontend for the modern web
- [axios](https://github.com/axios/axios): Promise based HTTP client for the
  browser and node.js
- [node-sass](https://www.npmjs.com/package/node-sass): Node-sass is a library
  that provides binding for Node.js to LibSass, the C version of the popular
  stylesheet preprocessor, Sass.
- [jest](https://jestjs.io/): Jest is a delightful JavaScript Testing Framework
  with a focus on simplicity.
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/):
  The React Testing Library is a very light-weight solution for testing React
  components. It provides light utility functions on top of react-dom and
  react-dom/test-utils.

## 🧐 What's inside?

A quick look at the files and directories you'll see in the current project.

    .
    ├── node_modules
    ├── src
    ├──── assets
    ├──── components
    ├────── card
    ├────── hamburger
    ├────── layout
    ├──────── helmet
    ├──────── spinner
    ├────── logo
    ├──── context
    ├──── helpers
    ├──── hooks
    ├──── pages
    ├──── services
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── yarn-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that
    the project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you
    will see on the front-end of the site (what you see in the browser) such as
    site logo or a page template. `src` is a convention for “source code”.

3.  **`/src/assets`**: This directory will contain all of the code related to
    styling the App handled by [SASS](https://sass-lang.com/)

4.  **`/src/components`**: This directory will contain all of the React
    componets, There are building blocks of different app's functionality, such
    as site layout, logo, spiiner, hamburger-menu and helmet

5.  **`/src/context`**: It takes responsiblity to React state in App level using
    React `Context API`.

6.  **`/src/helpers`**: This directory will contain all of the code which is
    essential and act as helper for the main App.

7.  **`/src/hooks`**: This directory will contain all of the code related to
    define custom React hooks.

8.  **`/src/pages`**: This directory will contain all of the code related pages
    that exists in the website.

9.  **`/src/services`**: This directory will contain all of the code related
    call API endpoints to serve the App with data.

10. **`.gitignore`**: This file tells git which files it should not track / not
    maintain a version history for.

11. **`.prettierrc`**: This is a configuration file for
    [Prettier](https://prettier.io/). Prettier is a tool to help keep the
    formatting of the code consistent.

12. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage
    of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/)
    (if any). These allow customization/extension of default Gatsby settings
    affecting the browser. Here I wrapped the entire App with `Context` API in
    order to share App state across different components.

13. **`gatsby-config.js`**: This is the main configuration file for a Gatsby
    site. This is where we can specify information about your site (metadata)
    like the site title and description, which Gatsby plugins you’d like to
    include, etc. (Check out the
    [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more
    detail).

14. **`LICENSE`**: This repo is licensed under the MIT license.

15. **`yarn-lock.json`** (See `package.json` below, first). This is an
    automatically generated file based on the exact versions of the yarn
    dependencies that were installed for the project. **(You won’t change this
    file directly).**

16. **`package.json`**: A manifest file for Node.js projects, which includes
    things like metadata (the project’s name, author, etc). This manifest is how
    npm knows which packages to install for the project.

17. **`README.md`**: A text file containing useful reference information about
    the project.
