# React Typescript boilerplate

This project is an opinionated starter kit with React, TypeScript, I18n, Routing, Theming for creating a website, an app, or anything you have in mind...

## @todo

- Add the appolo provider for grahpql support
  - Network Status bar : https://github.com/molindo/react-apollo-network-status
  - Debug mode with : https://github.com/blackxored/apollo-link-logger
  - Offline and Optimistic : https://github.com/helfer/apollo-link-queue & https://github.com/helfer/apollo-link-optimistic
  - Configurable Context : https://www.apollographql.com/docs/link/links/context/
  - Configurable Upload : https://github.com/jaydenseric/apollo-upload-client
  - Configurable Retry : https://www.apollographql.com/docs/link/links/retry/
  - Configurable Batch : https://www.apollographql.com/docs/link/links/batch-http/
  - Configurable REST : https://www.apollographql.com/docs/link/links/rest/
- WTFM (Write The Fucking Manual)
- Write all unit tests
- Write github action CI
- Write github action CD
- Add base files/tools like .editorconfig

### Directory Layout

Here is how the project structure looks like:

```
.
├── /.stortybook/               # Storybook configuration files
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # Static files which are copied into the /build/public folder
├── /src/                       # The source code of the application
│   ├── /components/            # React stateless components
│   ├── /layouts/               # React layout components
│   ├── /services/              # Application services such as routing, i18n, style, graphql
│   ├── /views/                 # React statfull components that defines views/blocs/pages
│   ├── /config.ts              # Global application settings
│   ├── /index.tsx              # client-side startup script
│   └── ...                     # Other core framework modules
├── Dockerfile                  # Commands for building a Docker image for production
├── package.json                # The list of 3rd party libraries and utilities
├── yarn.lock                   # Fixed versions of all the dependencies
└── ...                         # Other base project files
```

## Usefull links

### React+TypeScript Cheatsheets

https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets

### Material UI related project

Usefull to find third part libs.
https://material-ui.com/discover-more/related-projects/

# CRA Doc

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
