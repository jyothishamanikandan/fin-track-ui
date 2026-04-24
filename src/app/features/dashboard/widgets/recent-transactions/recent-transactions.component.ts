import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TransactionService } from '../../../../core/services/transaction.service';
import { AedCurrencyPipe } from '../../../../shared/pipes/aed-currency.pipe';

const CATEGORY_COLORS: Record<string, string> = {
  housing:   '#1D9E75',
  food:      '#EF9F27',
  transport: '#4A90E2',
  utilities: '#9B59B6',
  leisure:   '#E24B4A',
  income:    '#1D9E75',
  other:     '#95A5A6',
};

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [RouterLink, AedCurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="widget-card">
      <div class="widget-header">
        <h3 class="widget-title">Recent Transactions</h3>
        <a routerLink="/transactions" class="view-all">View all <i class="bi bi-arrow-right"></i></a>
      </div>

      <div class="txn-list">
        @for (txn of txService.recentTransactions(); track txn.id) {
          <div class="txn-row">
            <div class="txn-avatar" [style.background]="getCategoryColor(txn.category) + '20'" [style.color]="getCategoryColor(txn.category)">
              <i class="bi" [class]="getCategoryIcon(txn.category)"></i>
            </div>
            <div class="txn-info">
              <p class="txn-title">{{ txn.title }}</p>
              <p class="txn-meta">
                <span class="badge-category" [class]="txn.category">{{ txn.category }}</span>
                &middot; {{ formatDate(txn.date) }}
              </p>
            </div>
            <div class="txn-amount" [class.income]="txn.type === 'income'" [class.expense]="txn.type === 'expense'">
              {{ txn.type === 'income' ? '+' : '-' }}{{ txn.amount | aedCurrency }}
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
    }

    .widget-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .widget-title {
      font-size: 0.9375rem;
      font-weight: 600;
      margin: 0;
    }

    .view-all {
      font-size: 0.8125rem;
      color: var(--primary);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.25rem;

      i { font-size: 0.75rem; }
    }

    .txn-list {
      display: flex;
      flex-direction: column;
    }

    .txn-row {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      padding: 0.75rem 0;
      border-bottom: var(--border);

      &:last-child { border-bottom: none; }
    }

    .txn-avatar {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      flex-shrink: 0;
    }

    .txn-info { flex: 1; min-width: 0; }

    .txn-title {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-primary);
      margin: 0 0 0.2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .txn-meta {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.375rem;
    }

    .txn-amount {
      font-size: 0.9rem;
      font-weight: 700;
      flex-shrink: 0;

      &.income  { color: var(--primary); }
      &.expense { color: var(--danger); }
    }
  `]
})
export class RecentTransactionsComponent {
  protected readonly txService = inject(TransactionService);

  getCategoryColor(cat: string): string {
    const colors: Record<string, string> = {
      housing: '#1D9E75', food: '#EF9F27', transport: '#4A90E2',
      utilities: '#9B59B6', leisure: '#E24B4A', income: '#1D9E75', other: '#95A5A6'
    };
    return colors[cat] ?? '#95A5A6';
  }

  getCategoryIcon(cat: string): string {
    const icons: Record<string, string> = {
      housing: 'bi-house-fill', food: 'bi-cup-hot-fill', transport: 'bi-car-front-fill',
      utilities: 'bi-lightning-fill', leisure: 'bi-controller', income: 'bi-cash-stack', other: 'bi-three-dots'
    };
    return icons[cat] ?? 'bi-three-dots';
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  }
}
