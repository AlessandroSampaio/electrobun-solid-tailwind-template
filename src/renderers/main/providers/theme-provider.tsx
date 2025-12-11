import {
  ColorModeProvider,
  ColorModeScript,
  createLocalStorageManager,
} from '@kobalte/core';
import { type ParentComponent, Suspense } from 'solid-js';
// import { ModeToggle } from '../ui/mode-toggle';

export const ThemeProvider: ParentComponent = (props) => {
  const storeManager = createLocalStorageManager('ui-theme');

  return (
    <>
      <ColorModeScript storageType={storeManager.type} />
      <ColorModeProvider initialColorMode='dark' storageManager={storeManager}>
        <Suspense>{props.children}</Suspense>
      </ColorModeProvider>
    </>
  );
};
