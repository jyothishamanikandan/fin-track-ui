import { Injectable, signal } from '@angular/core';

export interface ConfirmState {
  visible: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  resolve: ((value: boolean) => void) | null;
}

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private readonly _state = signal<ConfirmState>({
    visible: false,
    title: 'Confirm',
    message: '',
    confirmLabel: 'Delete',
    resolve: null,
  });

  readonly state = this._state.asReadonly();

  confirm(message: string, title = 'Confirm Action', confirmLabel = 'Delete'): Promise<boolean> {
    return new Promise(resolve => {
      this._state.set({ visible: true, title, message, confirmLabel, resolve });
    });
  }

  accept(): void {
    this._state().resolve?.(true);
    this._state.update(s => ({ ...s, visible: false, resolve: null }));
  }

  reject(): void {
    this._state().resolve?.(false);
    this._state.update(s => ({ ...s, visible: false, resolve: null }));
  }
}
