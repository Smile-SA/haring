# Conventions & Best Practices

## Git Conventions

### Commits

Commit messages must be clear and easily readable, respecting the convention
of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

In short, a commit header lists a summary of its changes preceded by a keyword
indicating the type of
change (`fix`, `feat`, `docs`, `test`, `style`, `chore`, `refactor`, etc, read
the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
and [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
docs for explanations on each type), followed optionally by a scope in
parentheses `()`, then by `:` and the summary of the changes.

Optionally, a body can be added below the first line (with an empty line for
readability) to fully describe the changes.

Optionally, a BREAKING CHANGE can be indicated by a `!` next to the type keyword
and described in a footer with `BREAKING CHANGE: description` (with an empty
line for readability).

Examples :

- `feat: added stuff to the thing #12345`
- `chore: removed unused file`
- full example with body and BREAKING CHANGE indicated by `!` and in footer :

```
fix!: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.
Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

BREAKING CHANGE: this changes the endpoint of the thing which breaks the frontend
```

- `feat(css): added stuff to the other thing #12345`

A related US/Work Item/Ticket from another tool can sometimes be linked to a
particular commit, in this case it will be indicated in the scope `()`, such
as `feat(redmine xxx): ...`

### Branches

Developer branch names follow a similar convention, with a folder prefix such
as `feat`, `fix`, `docs`, `refactor`, `chore`, etc. followed by a simple name
related to the change, examples :
`feat/pagination`, `fix/action-types`, `refactor/header-search`

A developer branch will typically be rebased on the current version branch (
example: `x.x.6`) before making a Pull Request in order to avoid conflicts.
Squashing your local branch before rebasing can simplify the rebase, as you will
only have to resolve 1 commit.

Once you are ready to make your Pull Request,
see [Submitting a Pull Request](./CONTRIBUTING.md#submitting-a-pull-request) in
the Contributing guide.

## Naming Conventions

In general, the recommended approach is to look at existing code and follow the
same naming patterns. A few notable examples :

- Boolean variables and props should be named with the verb "is" or "has", such
  as `isVisible`, `isOpened`, `hasTopBar`, `hasBackground`
- Variables and props representing a default value (such as the default value of
  a prop or the default value of a `useState`) should start with "default", such
  as `defaultColumn`, `defaultStartingIndex`, `defaultVisible`.
- Variables and props representing callbacks, most commonly events or callbacks
  triggered by interaction, should start with "on", such
  as `onChange`, `onButtonClick`, `onToggleSidebar`, `onMenuOpen`.
- Functions called by binded events, such as a function called after
  a `onChange` event or other interactions, should start with "handle" such
  as `handleChange`, `handleSelectInput`, `handleSubmit`, `handleToggleSidebar`.

For components :

- When possible, components should be created using the `npm run generate`
  command which automates a lot of the creation (
  see [Creating a new component in Haring](./CONTRIBUTING.md#creating-a-new-component-in-haring)).
- Components are contained in the `src/Components/` folder.
- Component folders and Component files should be written in `PascalCase`.
- Component test files are suffixed by `.test.tsx`.
- Component Storybook files are suffixed `.stories.tsx`.
- If the test or storybook file contains testing data or a lot of declarations
  for props, these can be put into a separate mock file suffixed `.mock.tsx`.
- Optionally, styles created with createStyles can be declared in a separate
  style file suffixed with `.style.tsx`.
- Components are always declared as exported functions with typescript typing
  and a return type such
  as `export function MyComponent(): ReactElement {...}` .
- If a Component has any props, a typed interface for the props has to be
  declared.
- Whenever you add a new Component, it must be added to the export `index.tsx`
  file at the root of `/src`.

For interfaces and types :

- Interfaces and Types are always prefixed with `I`, such as `IMyInterface`.
- Component props interfaces are always suffixed with `Props` such
  as `IMyComponentProps`.

## Code Structure

The code in Components is structured in this way :

```tsx
import { ReactNode } from 'react';

// 1. Styles (here or in a separate style file)
const useStyles = createStyles((theme) => ({
  myClass: {
    width: '120px',
  },
}));

// 2. Types and Interfaces (alphabetically ordered)
export interface IMyComponentProps {
  children?: ReactNode;
  propA?: boolean;
  propB?: boolean;
}

export function MyComponent(props: IMyComponentProps): ReactNode {
  // 3. Props extraction
  const { propsA, propsB, ...rest } = props;

  // 4. Component data: Constants and variables (such as data calculated or derived from props),
  // useStates, etc..
  const isBothTrue = propA && propB;
  const [isVisible, setIsVisible] = useState(false);

  // 5. Classes extraction and styles/themes
  const { classes } = useStyles();
  const defaultTheme = useMantineTheme();

  // 5. Functions (such as parsing or handle functions, handleChange, handleInput)
  function handleClick(): number {
    return 0;
  }

  // 6. The return, typically a JSX/TSX fragment.
  return <div>...</div>;
}
```

## Comments

In general, the recommended approach is to avoid unnecessary comments. Naming
conventions for Components, functions and constants should make the code easy to
understand.

When a particular piece of code could be confusing and cannot be written in a
clearer way, short and concise comments are recommended.

## Storybook documentation

For the autodoc that will be displayed on Storybook, each Component should have
a comment above the Component declaration :

```ts
/** This comment will be displayed on the Storybook page of this component, under the title */
export function MyComponent(props: IMyComponentProps): void {
  return null;
}
```

Component props can also be documented in this way :

```ts
export interface MyComponentProps {
  /** This comment will be displayed as the description of this prop on the Storybook page */
  children?: ReactNode;
  /** This comment will be displayed as the description of this prop on the Storybook page */
  isVisible?: boolean;
}
```

## General Conventions

This project has a few linters configured : ESLint with a custom configuration
in the `eslint-config-custom` package, and Prettier.

You must follow all of ESLint's custom configuration (errors and warnings),
which can be stricter than the standard configurations.

For anything else, follow these guidelines :

1. Create helper functions and reusable code for common or repeated tasks,
   modular classes and functions (one function = one task), components splits
   into sub-components if
   necessary. [SOLID](https://en.wikipedia.org/wiki/SOLID) principles.

1. Allow for configuration and translation. Anticipate and integrate future
   extensions and configurations of your code. Anticipate translation or easy
   modification of static content or text content.

1. Use shortened syntaxes (arrow function, ternary notation, etc.) with care and
   make sure they are readable and clear in how they work. If it stays readable,
   a shorter block or line of code is preferred.

1. Avoid heavy nesting, especially in loops.

1. Optimize your loops.

1. Do not trust data. Always assume that every user input (or even data from
   APIs) can be incorrect or empty/null/undefined, and might require
   sanitizing/validating or error handling.

1. Do not reinvent the wheel, don't hesitate to use tried-and-trusted existing
   solutions.

As well as
the [Typescript Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html).
