import { InjectionToken, ValueProvider } from '@angular/core';

export const NativeWindow: InjectionToken<string> = new InjectionToken<string>('NativeWindow');

export const NativeWindowProvider: ValueProvider = {
  provide: NativeWindow,
  useValue: window
};
