import { Injectable } from '@angular/core';

function _window(): Window | null {
  return typeof window !== 'undefined' ? window : null;
}

@Injectable({
  providedIn: 'root',
})
export class WindowRef {
  get nativeWindow(): Window | null {
    return _window();
  }
}
