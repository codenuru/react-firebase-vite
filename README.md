# React Vite App 🌋

[![react-firebase-vite](https://i.ibb.co/LZbhV0h/chrome-capture-2023-4-5-MConverter-eu.webp)](https://github.com/codenuru/react-firebase-vite)
> Next Generation Boilerplate for React/Typescript, built on top of Vite ⚡️

The goal of the project is to create a web application that allows the user to create, view, edit and delete data from a table. The project uses React, ViteJS, CSS3 and TypeScript along with Firebase to store and retrieve data. The application is responsive, using media queries to adjust the layout to different screen sizes. The app has two color modes using media queries to adjust the color for different user color configurations.

# What's in the app

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- Dev Tools
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [CommitLint](https://commitlint.js.org/#/)
  - [Husky](https://typicode.github.io/husky/#/)
  - [Lint-Staged](https://github.com/okonet/lint-staged)

# Installation

first, clone the project

then, to start the project

```Bash
cd react-firebase-vite
npm install
npm run dev
```

## Using with Docker

Pre-requisites:

- Install [Docker](https://www.docker.com/get-docker) for your platform.
- Install [docker-compose](https://docs.docker.com/compose/install/) for your platform.

### Try with Docker

Making sure you're in your project directory, run:

```bash
docker-compose -f docker-compose-dev.yml up
```

### Using on Production with Docker

DISCLAIMER: This Docker configuration is for demonstration purposes only. If you plan to use this configuration in a production environment, it is your responsibility to ensure that it is secure and optimized for your needs. You should thoroughly test and review all aspects of the configuration before deploying it in a production environment. The author of this demonstration assumes no responsibility for any issues that may arise from the use of this configuration.

Making sure you're in your project directory, run:

```bash
docker-compose -f docker-compose.yml up
```

# License

MIT
