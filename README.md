# React Library Builder

This project creates a library for React components. It is based on [Styleguidist](https://github.com/styleguidist/react-styleguidist) to create the component catalog and [Babel](https://babeljs.io/) and [Sass](https://sass-lang.com/) to create the catalog distribution.

## Scripts

* __clean ->__ This script deletes __dist__ folder.
* __start ->__ This script launch the catalog at [localhost:3100](http://localhost:3100).
* __test ->__ This script launch the catalog's tests: [eslint](https://eslint.org/), [sass-lint](https://github.com/sasstools/sass-lint) and [Jest](https://jestjs.io/), tests and coverage.
* __test:watch ->__ This script serves only to create Jest's tests. It opens the Jest's watch mode and allow you to work with Jest's test tools.
* __build ->__ This is the script to build the library distribution.
* __build:styleguide ->__ This is the script to build the catalog distribution as web page.

## File and Folder Structure

* __\_\_tests\_\_ ->__ This folder contains all the tests for the catalog.
* __config ->__ This folder contains the configuration files for the library.
  * __tests ->__ These folder contains the configuration files for Jest.
  * __modules.js ->__ These are the folder inside the __src__ folder that will be used to build the library, and that will be counted for the test coverage.
* __src ->__ This folder contains all the source code for the library.

The rest of the files out of this folders are configuration files for the development environment of the library. They are mostly self descriptive.

## How to

### Developing

To develop a component library, we just need to run `npm start`. This will launch the component catalog at [localhost:3100](http://localhost:3100).

### Building

To build the final package, we just need to execute `npm run build`. This build script will always pass all the test before building. If something fails, there will be no building process.

### Publishing

To publish the new library in [npm](https://www.npmjs.com/), execute `npm publish`. This scripts executes `prepublish` that builds the library. Test are passed too, so if there are errors, the package won't be build, neither published.

To make this a normal npm library, we need to export in `src/index.js` all the elements we are going to expose to be used from our library.

## Documentation

The __README.EX.md__ is the readme for the catalog. The instructions live in this __README.md__. Please, rename this files when using this boilerplate in order to use the other as readme.

At the beginning of the document you can add whatever you want that describes your component catalog. At the end of the document you have an example of table to define other things that don't appear in the Styleguidist application, for example, functions or constants.

## Useful Tools

* [dotenv](https://github.com/motdotla/dotenv): tool to use a __.env__ file to store environment variables to emulate the server.
* [npm-check](https://github.com/dylang/npm-check): to update interactively our projects dependencies.
* [semantic-release](https://github.com/semantic-release/semantic-release): a tool to automatic versioning the application using the structure of the commit message.

## Useful Links

* [Badges](https://shields.io)
* [Why are you still using Yarn in 2018?](https://iamturns.com/yarn-vs-npm-2018/)
* [Releases with semantic-release](https://egghead.io/lessons/javascript-automating-releases-with-semantic-release)
* [Introduction to semantic-release](https://blog.greenkeeper.io/introduction-to-semantic-release-33f73b117c8)
