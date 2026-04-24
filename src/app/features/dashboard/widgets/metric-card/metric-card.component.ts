import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { AedCurrencyPipe } from '../../../../shared/pipes/aed-currency.pipe';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [AedCurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="metric-card">
      <div class="metric-icon" [style.background]="iconBg()">
        <i class="bi" [class]="icon()"></i>
      </div>
      <div class="metric-body">
        <p class="metric-label">{{ label() }}</p>
        @if (isCurrency()) {
          <p class="metric-value" [class]="valueClass()">{{ value() | aedCurrency }}</p>
        } @else {
          <p class="metric-value" [class]="valueClass()">{{ value() }}{{ suffix() }}</p>
        }
        @if (subtext()) {
          <p class="metric-subtext">{{ subtext() }}</p>
        }
      </div>
    </div>
  `,
  styles: [`
    .metric-card {
      background: #F8F9FA;
      border-radius: var(--card-radius);
      padding: 1.25rem;
      border: var(--border);
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .metric-icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 1.125rem;
    }

    .metric-body { flex: 1; min-width: 0; }

    .metric-label {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--text-secondary);
      margin: 0 0 0.375rem;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    .metric-value {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
      line-height: 1.2;

      &.positive { color: var(--primary); }
      &.negative { color: var(--danger); }
      &.warning  { color: var(--warning); }
    }

    .metric-subtext {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin: 0.25rem 0 0;
    }
  `]
})
export class MetricCardComponent {
  readonly label      = input.required<string>();
  readonly value      = input.required<number>();
  readonly icon       = input<string>('bi-cash-stack');
  readonly iconBg     = input<string>('rgba(29,158,117,0.12)');
  readonly isCurrency = input<boolean>(true);
  readonly suffix     = input<string>('');
  readonly valueClass = input<string>('');
  readonly subtext    = input<string>('');
}
