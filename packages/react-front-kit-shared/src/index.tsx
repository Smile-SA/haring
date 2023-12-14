/* eslint-disable react-refresh/only-export-components */
'use client';

// component exports
export { ColumnPlus, FolderMove } from './1-styleGuide/Icons';
export { FileIcon } from './1-styleGuide/FileIcon/FileIcon';
export type { IFileIconProps } from './1-styleGuide/FileIcon/FileIcon';
export { Provider } from './3-custom/Provider/Provider';
export type { IProviderProps } from './3-custom/Provider/Provider';
// context exports
export {
  themeContext,
  useMainTheme,
  usePrimaryTheme,
  useSecondaryTheme,
  useThemes,
} from './contexts';
// helper exports
export {
  createThemes,
  isCallback,
  isNotNullNorEmpty,
  typeGuard,
  typeGuardInterface,
} from './helpers';
export type {
  IGuardedType,
  IPrimitiveOrConstructor,
  ITypeGenericInterface,
  ITypeMap,
} from './helpers';
// type exports
export type {
  IAction,
  IActionConfirmModalProps,
  IConfirmAction,
  IConfirmModal,
  IOption,
  IOptions,
  IThemeOverride,
  IThemes,
} from './types';
// type exports
export { mainTheme, primaryTheme, secondaryTheme, themes } from './theme';
