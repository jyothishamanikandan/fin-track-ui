import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { BudgetService } from '../../../../core/services/budget.service';
import { AedCurrencyPipe } from '../../../../shared/pipes/aed-currency.pipe';

@Component({
  selector: 'app-budget-progress',
  standalone: true,
  imports: [AedCurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="widget-card">
      <div class="widget-header">
        <h3 class="widget-title">Budget Overview</h3>
        @if (budgetSvc.overBudgetCount() > 0) {
          <span class="badge-over">{{ budgetSvc.overBudgetCount() }} over limit</span>
        }
      </div>

      <div class="budgets-list">
        @for (budget of budgetSvc.budgets(); track budget.id) {
          <div class="budget-row">
            <div class="budget-info">
              <div class="budget-dot" [style.background]="budgetSvc.getUsageColor(budget)"></div>
              <span class="budget-name">{{ budget.category }}</span>
              <span class="budget-pct" [style.color]="budgetSvc.getUsageColor(budget)">
                {{ budgetSvc.getUsagePercent(budget) }}%
              </span>
            </div>
            <div class="progress-track">
              <div
                class="progress-fill"
                [style.width.%]="clamp(budgetSvc.getUsagePercent(budget))"
                [style.background]="budgetSvc.getUsageColor(budget)">
              </div>
            </div>
            <div class="budget-amounts">
              <span class="spent">{{ budget.spent | aedCurrency }}</span>
              <span class="limit">/ {{ budget.limit | aedCurrency }}</span>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .widget-card {
      background: #fff;
      border-radius: var(--card-radius);
      border: var(--border);
      padding: 1.25rem;
      height: 100%;
    }

    .widget-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }

    .widget-title {
      font-size: 0.9375rem;
      font-weight: 600;
      margin: 0;
    }

    .badge-over {
      background: #fef2f2;
      color: var(--danger);
      font-size: 0.75rem;
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
      font-weight: 500;
    }

    .budgets-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .budget-row {}

    .budget-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.375rem;
    }

    .budget-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .budget-name {
      flex: 1;
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    .budget-pct {
      font-size: 0.75rem;
      font-weight: 600;
    }

    .progress-track {
      height: 6px;
      background: #F3F4F6;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 0.3rem;
    }

    .progress-fill {
      height: 100%;
      border-radius: 4px;
      transition: width 0.4s ease;
    }

    .budget-amounts {
      font-size: 0.75rem;

      .spent { font-weight: 600; color: var(--text-primary); }
      .limit { color: var(--text-muted); margin-left: 0.25rem; }
    }
  `]
})
export class BudgetProgressComponent {
  protected readonly budgetSvc = inject(BudgetService);

  clamp(pct: number): number {
    return Math.min(pct, 100);
  }
}
