import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="toast-container">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast-item" [class]="'toast-' + toast.type">
          <i class="bi" [class]="getIcon(toast.type)"></i>
          <span>{{ toast.message }}</span>
          <button class="toast-close" (click)="toastService.remove(toast.id)">
            <i class="bi bi-x"></i>
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 1.25rem;
      right: 1.25rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      min-width: 280px;
      max-width: 380px;
    }

    .toast-item {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      font-size: 0.875rem;
      font-weight: 500;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
      animation: slideIn 0.2s ease;
      color: #fff;

      span { flex: 1; }
    }

    .toast-success { background: #1D9E75; }
    .toast-error   { background: #E24B4A; }
    .toast-warning { background: #EF9F27; }
    .toast-info    { background: #4A90E2; }

    .toast-close {
      background: none;
      border: none;
      color: rgba(255,255,255,0.8);
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      font-size: 1rem;

      &:hover { color: #fff; }
    }

    @keyframes slideIn {
      from { transform: translateX(30px); opacity: 0; }
      to   { transform: translateX(0);   opacity: 1; }
    }
  `]
})
export class ToastComponent {
  protected readonly toastService = inject(ToastService);

  getIcon(type: string): string {
    const icons: Record<string, string> = {
      success: 'bi-check-circle-fill',
      error:   'bi-x-circle-fill',
      warning: 'bi-exclamation-triangle-fill',
      info:    'bi-info-circle-fill',
    };
    return icons[type] ?? 'bi-info-circle-fill';
  }
}
