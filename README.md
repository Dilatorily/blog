# fictional-octo-spork
[![Build Status](https://travis-ci.org/Dilatorily/fictional-octo-spork.svg?branch=master)](https://travis-ci.org/Dilatorily/fictional-octo-spork) [![codecov](https://codecov.io/gh/Dilatorily/fictional-octo-spork/branch/main/graph/badge.svg)](https://codecov.io/gh/Dilatorily/fictional-octo-spork)
This repository contains the source code of my personal blog.

## Development
1. Install the required packages using `npm install`
2. Build the application using `npm run build`.
3. Start the application using `npm start`. The application will be available at [http://0.0.0.0:8080](http://0.0.0.0:8080).

## Commands
- `npm run build`: Statically generate the pages into the `docs` directory.
- `npm run clean`: Removes the `build` and the `docs` directories.
- `npm run compile`: Bundles the static generator into the `build` directory.
- `npm start`: Starts a server serving the `docs` directory at [http://0.0.0.0:8080](http://0.0.0.0:8080).
- `npm test`: Runs the unit tests and generates the code coverage.
