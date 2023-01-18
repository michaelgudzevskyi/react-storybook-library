# react-storybook-library


## Demo:

1. storybook: [react-storybook-library](https://michaelgudzevskyi.github.io/react-storybook-library)

2. npm package: [npmjs react-storybook-library](https://www.npmjs.com/package/react-storybook-library)

## Features:

1. Deploy your own React-Component package to [npmjs.com](https://www.npmjs.com) easily

2. Fix format error automatically on save

3. Generate static storybook files and host storybook website automatically via GitHub Actions

## Installation:

1. `npm install`

2. Install VSCode extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Usage:

1. `npm run start`: start running dev-server for local development

2. `npm run storybook`: start running storybook server for previewing demo page

3. `npm run build`: build index.js and index.d.ts file from src folder

4. `npm run build-storybook`: build index.html in demo folder for static hosting

5. change setting in `package.json`

6. use `npm login` and `npm publish` for publishing to [https://www.npmjs.com/](https://www.npmjs.com/)


7. `npm run watch`: start typescript watch mode

8. `npm run lint`: use ESLint for manually checking files inside src folder

9. `npm run test`: start jest unit tests

10. `npm run coverage`: start command to see tests coverage

11. `npm run deploy-storybook` this command will create github page

## Usage for third-party import:

1. `npm i react-storybook-library`

2. import library

```ts
// TypsScript
import { FC } from 'react';
import { Button } from 'react-storybook-library';

const MyComponent: FC = () => (
    <div>
        <Button>My Button</Button>
    </div>
);

export default MyComponent;
```

## Folder Structure

``` 
┌── .github/workflows          # Settings for GitHub Actions
├── .storybook                 # Storybook settings
├── .vscode                    # VSCode settings for ESLint auto-fix function
├── demo                       # Storybook static file
├── dist                       # Bundled JS and TS declaration file for deployed npm package
├── src                        # All source code
│    ├── components            # React components
│    │    └── button           # Component folder
│    │          ├── MyButton.tsx           # Component for npm package
│    │          └── MyButton.stories.tsx   # Component displayed in storybook
│    ├── index.dev.tsx         # Development entry that uses ReactDOM.redner for local development
│    └── index.tsx             # Production entry that exports all components
├── .gitignore                 # Excluded files for ignoring Git version control
├── .eslintrc.js               # ESLint settings
├── index.html                 # HTML for local development
├── README.md                  # README
├── package-lock.json          # Package settings that locked the version of dependencies packages
├── package.json               # Package settings that listed dependencies packages, npm scripts, project name etc.
├── webpack.config.common.js   # Webpack settings in both development and production mode
├── webpack.config.dev.js      # Webpack settings in development mode
├── webpack.config.prod.js     # Webpack settings in production mode
└── tsconfig.json              # TypeScript settings
```
