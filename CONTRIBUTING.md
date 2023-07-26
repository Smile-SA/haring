# Contributing

## Project structure

In this monorepo project you will find the following projects:

- packages/react-front-kit (public): contains the UI components
- packages/eslint-config-custom (private): custom shared eslint configuration
- packages/tsconfig (private): custom shared typescript configuration
- apps/web (private): Next.js testing app

## Root commands

At the root level you can launch following commands:

- `npm run build`: launch build command in all sub projects
- `npm run dev`: launch dev command in all sub projects
- `npm run lint`: launch lint command in all sub projects
- `npm run test`: launch test command in all sub projects
- `npm run format`: launch prettier on all project files
- `npm run storybook`: launch the storybook of the `react-front-kit` project

The following commands are used on the CI:

- `npm run build-storybook`: Build the storybook of the `react-front-kit` project
- `npm run serve-and-test-storybook`: Start the storybook and launch integration tests of the `react-front-kit` project

You can also find commands related to publishing that we will see in [the dedicated chapter](#publishing).

## `react-front-kit` commands

Inside the `react-front-kit` directory you can launch following commands:

- `npm run build`: build the library
- `npm run lint`: lint the code
- `npm run lint:fix`: lint and automatically fix the code whenever possible
- `npm run test`: run unit tests

You can also find commands related to storybook:

- `npm run storybook`: start storybook for development
- `npm run build-storybook`: build static version of storybook
- `npm run serve-storybook`: serve the static version of storybook
- `npm run test-storybook`: launch storybook integration tests (web version of storybook should be running)
- `npm run wait-and-test-storybook`: used to wait for the storybook to be running before running the tests (used by another command)
- `npm run serve-and-test-storybook`: start the static version of the storybook and launch the tests

## Creating a new component in `react-front-kit`

To create a new component use the dedicated command `npm run generate`.

You will asked multiple questions and in the end it should generate:

- the base component file
- the base storybook file
- the base test file
- and it will export the component in the `index.tsx` file

Components are by default created as client component (with `'use client';`).  
If you are not creating a client component, don't forget to remove this line.

## Testing

When creating a component, the generator will automatically create a snapshot test for you (in the `Component.test.tsx` file).  
Don't forget to add required props in the test file.  
Maybe add other snapshot tests for special cases.

And if you have to manage a state in your component, please create an interaction test in the storybook: https://storybook.js.org/docs/react/writing-tests/interaction-testing

You can find examples in existing components.

## Publishing

Make sure you git is clean before running the following commands:

1. When you are ready to publish a new version run the command: `npm run changeset`.
2. If the changeset sounds good you can then run: `npm run version`.
3. Then, if everything is fine, to effectively publish the packages, run: `npm run publish`

=> TODO: check changeset action: https://github.com/changesets/action
