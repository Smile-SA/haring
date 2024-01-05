# storybook-pages

## 0.8.0

### Patch Changes

- Updated dependencies [[`f157421`](https://github.com/Smile-SA/react-front-kit/commit/f1574217dbadfb55a9338064f94fa8c848ebf0dd)]:
  - @smile/react-front-kit@0.8.0
  - @smile/react-front-kit-dropzone@0.8.0
  - @smile/react-front-kit-table@0.8.0
  - @smile/react-front-kit-shared@0.8.0

## 0.7.0

### Minor Changes

- [#87](https://github.com/Smile-SA/react-front-kit/pull/87) [`dbc06ca`](https://github.com/Smile-SA/react-front-kit/commit/dbc06ca55961b69663ab7fdc02609c6525ae361d) Thanks [@tonai](https://github.com/tonai)! - Add theme provider and update barrel file for better next.js compatibility

- [#95](https://github.com/Smile-SA/react-front-kit/pull/95) [`5696400`](https://github.com/Smile-SA/react-front-kit/commit/5696400e6f703da52db5f7199b50f8251fa76726) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `FilterList` component, renamed `FiltersBar` in `SidebarFilters`
  and `FiltersCheckboxList` in `SearchableCheckboxList`,
  refactored `SearchableCheckboxList`, added common `IFilter` type in shared
  package, added topContent prop to `SwitchableView`, fixed `BrowsingPage` with
  name changes.

- [#84](https://github.com/Smile-SA/react-front-kit/pull/84) [`25be4ad`](https://github.com/Smile-SA/react-front-kit/commit/25be4adff210302259a18d52909a623e20397f87) Thanks [@vapersmile](https://github.com/vapersmile)! - add modal for label see details in browsingPage

- [#89](https://github.com/Smile-SA/react-front-kit/pull/89) [`8997d43`](https://github.com/Smile-SA/react-front-kit/commit/8997d4319744b8c7bebdb622d44e609964e1c37c) Thanks [@vapersmile](https://github.com/vapersmile)! - Add FiltersCheckboxList in BrowsingPage

### Patch Changes

- Updated dependencies [[`dbc06ca`](https://github.com/Smile-SA/react-front-kit/commit/dbc06ca55961b69663ab7fdc02609c6525ae361d), [`7415d9b`](https://github.com/Smile-SA/react-front-kit/commit/7415d9b9d119abfc850dda2ab6fa94845e72aee6), [`5696400`](https://github.com/Smile-SA/react-front-kit/commit/5696400e6f703da52db5f7199b50f8251fa76726), [`eede698`](https://github.com/Smile-SA/react-front-kit/commit/eede698ce172e20eb1de4c70e3d59b7510afb9df), [`480af11`](https://github.com/Smile-SA/react-front-kit/commit/480af1122b41e28d938bd665c1aa998272c99d9a), [`70b674f`](https://github.com/Smile-SA/react-front-kit/commit/70b674f3513b4bf996e8f83a46c8a132ca3712ac)]:
  - @smile/react-front-kit-dropzone@0.7.0
  - @smile/react-front-kit-shared@0.7.0
  - @smile/react-front-kit-table@0.7.0
  - @smile/react-front-kit@0.7.0

## 0.6.0

### Minor Changes

- [#80](https://github.com/Smile-SA/react-front-kit/pull/80) [`0e819ee`](https://github.com/Smile-SA/react-front-kit/commit/0e819eebaa3b8feeb9ce1d1ae1ac37358c383d2e) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Extracted action bar from `ThumbnailGrid` into new component.
  Added `ActionBar`, `SelectableList` and `DocumentList` components.
  Updated `SearchPage` example page.

- [#81](https://github.com/Smile-SA/react-front-kit/pull/81) [`7f276b2`](https://github.com/Smile-SA/react-front-kit/commit/7f276b27e9c2ca2b746ad0f39deaee49cbf8bb90) Thanks [@vapersmile](https://github.com/vapersmile)! - Add the filtersBar component and add it to the searchResult page

- [#74](https://github.com/Smile-SA/react-front-kit/pull/74) [`0ad5377`](https://github.com/Smile-SA/react-front-kit/commit/0ad5377535e7c19941da301e8a2ee7298ab70f91) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Refactored actions in `ThumbnailGrid` and `TableGridView` components, moved `typeGuard` helper to shared package, added `typeGuardInterface` function, added tests

### Patch Changes

- Updated dependencies [[`0e819ee`](https://github.com/Smile-SA/react-front-kit/commit/0e819eebaa3b8feeb9ce1d1ae1ac37358c383d2e), [`7f276b2`](https://github.com/Smile-SA/react-front-kit/commit/7f276b27e9c2ca2b746ad0f39deaee49cbf8bb90), [`a0aa52b`](https://github.com/Smile-SA/react-front-kit/commit/a0aa52b8f10f264600704ec4aeee8a146d17cc9d), [`0ad5377`](https://github.com/Smile-SA/react-front-kit/commit/0ad5377535e7c19941da301e8a2ee7298ab70f91)]:
  - @smile/react-front-kit@0.6.0
  - @smile/react-front-kit-shared@0.6.0
  - @smile/react-front-kit-table@0.6.0
  - @smile/react-front-kit-dropzone@0.6.0

## 0.1.0

### Minor Changes

- [#68](https://github.com/Smile-SA/react-front-kit/pull/68) [`c8b5a39`](https://github.com/Smile-SA/react-front-kit/commit/c8b5a3978c8ce7133da0b498d9f0b326f07eb737) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `storybook-pages` package containing example pages, renamed `TestPage`
  into `BrowsingPage` and completed it with integration of `TableGridView`, fixed
  various component styles and props related to page.

### Patch Changes

- Updated dependencies [[`c8d3d94`](https://github.com/Smile-SA/react-front-kit/commit/c8d3d946cb0ded4ed26d4b8be249eff45d3d56f6), [`fbc68f5`](https://github.com/Smile-SA/react-front-kit/commit/fbc68f589525092454287a9e9195264593d7370c), [`bd9cfe4`](https://github.com/Smile-SA/react-front-kit/commit/bd9cfe42d0b22f5f7f5e7b0de30fdfb22ad3e1c8), [`c8d3d94`](https://github.com/Smile-SA/react-front-kit/commit/c8d3d946cb0ded4ed26d4b8be249eff45d3d56f6), [`c8d3d94`](https://github.com/Smile-SA/react-front-kit/commit/c8d3d946cb0ded4ed26d4b8be249eff45d3d56f6), [`c8b5a39`](https://github.com/Smile-SA/react-front-kit/commit/c8b5a3978c8ce7133da0b498d9f0b326f07eb737), [`5578d5d`](https://github.com/Smile-SA/react-front-kit/commit/5578d5db7543b679e405a74e5249908afa435628), [`51b1d80`](https://github.com/Smile-SA/react-front-kit/commit/51b1d80b264a9003f9790837fb16dde3869e1915)]:
  - @smile/react-front-kit-shared@0.5.0
  - @smile/react-front-kit-table@0.5.0
  - @smile/react-front-kit@0.5.0
  - @smile/react-front-kit-dropzone@0.5.0
