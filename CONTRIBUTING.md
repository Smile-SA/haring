# Contributing

## Project structure

In this monorepo project you will find the following projects:

Public packages:

- packages/haring-react: Contains the basic UI components
- packages/haring-react-shared: Contains the shared UI components and
  functions
- packages/haring-react-dates: Contains the date related components
- packages/haring-react-dropzone: Contains the dropzone components
- packages/haring-react-table: Contains the table components

Private configuration packages:

- packages/eslint-config-custom: Shared eslint configuration
- packages/storybook: Storybook global stories
- packages/test: Shared jest configuration
- packages/tsconfig: Shared typescript configuration

Private integration testing packages:

- apps/next: Next.js testing app

## Root commands

At the root level you can launch following commands:

- `npm run build`: Builds all packages projects
- `npm run build:app`: Builds all apps projects
- `npm run dev`: Launches dev command in apps projects
- `npm run start`: Launches start command in apps projects
- `npm run lint`: Lints everything
- `npm run lint:root`: Lints everything but the `apps` folder
- `npm run lint:fix`: Lints and fix everything but the `apps` folder
- `npm run test`: Launches all unit tests
- `npm run format`: Reformats all files
- `npm run changeset`: Creates a changeset file (
  see [Submitting a pull request](#submitting-a-pull-request))
- `npm run storybook`: Launches the global storybook
- `npm run storybook:no-open`: Launches the global storybook without opening a
  new tab

The following commands are used on the CI:

- `npm run build-storybook`: Builds the static version of storybook
- `npm run serve-and-test-storybook`: Launches storybook interaction tests

## `haring*` project commands

Inside all `haring*` directories you can launch following commands:

- `npm run build`: Builds the library
- `npm run test`: Runs unit tests

## Creating a new component in `haring`

To create a new component use the dedicated command `npm run generate`.

You will asked multiple questions and in the end it should generate:

- the base component file
- the base storybook file
- the base test file
- and it will export the component in the `index.tsx` file

Components are by default created as client component (with `'use client';`).
If you are not creating a client component, don't forget to remove this line.

## Conventions & Best Practices

In order to maintain consistency and quality, all code has to follow the
project's conventions and best practices described in
the [Best Practices](./BEST_PRACTICES.md) guide.

## Testing

### Components

When creating a component, the generator will automatically create a snapshot
test for you (in the `Component.test.tsx` file).
Don't forget to add required props in the test file.
Maybe add other snapshot tests for special cases.

And if you have to manage a state in your component, please create an
interaction test in the
storybook: https://storybook.js.org/docs/react/writing-tests/interaction-testing

You can find examples in existing components.

### Helper functions

Shared functions are located in the `helpers` directory.

All these functions must be unit tested.

## Submitting a pull request

We uses changesets to manage versioning. When submitting a PR add a changeset
which contains what packages should be bumped, their associated semver bump
types and some markdown which will be inserted into changelogs.

To create a changeset:

1. Run `npm run changeset`
2. This will create a changeset file in the `.changeset` folder you can review
3. Commit the changeset file

## Release

When a PR containing changesets is merged into `*.x` branch it will
automatically create a release PR.

Then when that release PR is merged into the `*.x` branch, it will automatically
create a release and publish the packages on `npm`.
