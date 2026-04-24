import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ConfirmDialogService } from './confirm-dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (svc.state().visible) {
      <div class="modal-overlay" (click)="svc.reject()">
        <div class="modal-card confirm-modal" (click)="$event.stopPropagation()">
          <div class="confirm-icon">
            <i class="bi bi-exclamation-triangle-fill"></i>
          </div>
          <h5 class="confirm-title">{{ svc.state().title }}</h5>
          <p class="confirm-message">{{ svc.state().message }}</p>
          <div class="confirm-actions">
            <button class="btn btn-light" (click)="svc.reject()">Cancel</button>
            <button class="btn btn-danger" (click)="svc.accept()">
              {{ svc.state().confirmLabel }}
            </button>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .confirm-modal {
      max-width: 420px;
      text-align: center;
    }

    .confirm-icon {
      font-size: 2.5rem;
      color: #EF9F27;
      margin-bottom: 1rem;
    }

    .confirm-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: #1a1d23;
    }

    .confirm-message {
      color: #6b7280;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .confirm-actions {
      display: flex;
      gap: 0.75rem;
      justify-content: center;

      .btn {
        padding: 0.5rem 1.5rem;
        border-radius: 8px;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  `]
})
export class ConfirmDialogComponent {
  protected readonly svc = inject(ConfirmDialogService);
}
