# blog
[![codecov](https://codecov.io/gh/Dilatorily/blog/branch/main/graph/badge.svg)](https://codecov.io/gh/Dilatorily/blog)

This repository contains the source code of my personal blog.

## Development
1. Install the required packages using `npm install`
2. Build the application using `npm run build`.
3. Start the application using `npm start`. The application will be available at [http://0.0.0.0:8080](http://0.0.0.0:8080).

## Commands
- `npm run build`: Statically generate the pages into the `docs` directory.
- `npm run clean`: Removes the `build` and the `docs` directories.
- `npm run compile`: Bundles the static generator into the `build` directory.
- `npm run lint`: Lint the source files in the `src` directory.
- `npm run lint -- --fix`: Automatically fix the lint errors of the source files in the `src` directory.
- `npm start`: Starts a server serving the `docs` directory at [http://0.0.0.0:8080](http://0.0.0.0:8080).
- `npm test`: Runs the unit tests and generates the code coverage.
- `npm run typings`: Type check the source files in the `src` directory.
