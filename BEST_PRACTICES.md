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

WIP: common comments on function declaration and above prop declarations (for
storybook),
