# fictional-octo-spork
[![Build Status](https://travis-ci.org/Dilatorily/fictional-octo-spork.svg?branch=master)](https://travis-ci.org/Dilatorily/fictional-octo-spork) [![codecov](https://codecov.io/gh/Dilatorily/fictional-octo-spork/branch/master/graph/badge.svg)](https://codecov.io/gh/Dilatorily/fictional-octo-spork)
This repository contains the source code of my personal blog.

## Deployment
1. Install the required packages using `yarn`
2. Build the application using `yarn build`.
3. Start the application using `yarn start`. The application will be available at [https://0.0.0.0](https://0.0.0.0).

## Commands
* `yarn`: Installs the *NPM* dependencies.
* `yarn clean`: Removes the `build` and the `public` directory.
* `yarn build`: Bundles all of the server application in the `build` directory and all of the client application in the `public` directory.
* `yarn test`: Runs the unit tests and generates the code coverage.
* `yarn dev`: Starts a development server with hot reloading serving the application *in-memory* at [http://0.0.0.0:8080](http://0.0.0.0:8080).
* `yarn start`: Starts a server serving the `public` directory at [https://0.0.0.0](https://0.0.0.0).
* `yarn stop`: Stops the server serving the `public` directory at [https://0.0.0.0](https://0.0.0.0).
* `yarn restart`: Restarts the server serving the `public` directory at [https://0.0.0.0](https://0.0.0.0).
