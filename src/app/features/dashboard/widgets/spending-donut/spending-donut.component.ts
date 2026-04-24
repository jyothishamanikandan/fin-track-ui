import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { TransactionService } from '../../../../core/services/transaction.service';
import { AedCurrencyPipe } from '../../../../shared/pipes/aed-currency.pipe';

const CATEGORY_COLORS: Record<string, string> = {
  housing:   '#1D9E75',
  food:      '#EF9F27',
  transport: '#4A90E2',
  utilities: '#9B59B6',
  leisure:   '#E24B4A',
  other:     '#95A5A6',
};

@Component({
  selector: 'app-spending-donut',
  standalone: true,
  imports: [BaseChartDirective, AedCurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="widget-card">
      <div class="widget-header">
        <h3 class="widget-title">Spending by Category</h3>
        <span class="widget-badge">April 2026</span>
      </div>
      <div class="chart-wrap">
        <canvas baseChart
          [data]="chartData()"
          [type]="'doughnut'"
          [options]="chartOptions">
        </canvas>
      </div>
      <div class="legend">
        @for (item of legendItems(); track item.label) {
          <div class="legend-item">
            <span class="legend-dot" [style.background]="item.color"></span>
            <span class="legend-label">{{ item.label }}</span>
            <span class="legend-value">{{ item.amount | aedCurrency }}</span>
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
      margin-bottom: 1rem;
    }

    .widget-title {
      font-size: 0.9375rem;
      font-weight: 600;
      margin: 0;
    }

    .widget-badge {
      font-size: 0.75rem;
      color: var(--text-secondary);
      background: #F3F4F6;
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
    }

    .chart-wrap {
      width: 200px;
      height: 200px;
      margin: 0 auto 1rem;
    }

    .legend {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8125rem;
    }

    .legend-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .legend-label {
      flex: 1;
      color: var(--text-secondary);
      text-transform: capitalize;
    }

    .legend-value {
      font-weight: 600;
      color: var(--text-primary);
    }
  `]
})
export class SpendingDonutComponent {
  private readonly txService = inject(TransactionService);

  readonly legendItems = computed(() =>
    this.txService.categoryExpenses()
      .filter(c => c.amount > 0)
      .sort((a, b) => b.amount - a.amount)
      .map(c => ({
        label: c.category,
        amount: c.amount,
        color: CATEGORY_COLORS[c.category] ?? '#95A5A6'
      }))
  );

  readonly chartData = computed<ChartData<'doughnut'>>(() => {
    const items = this.legendItems();
    return {
      labels: items.map(i => i.label.charAt(0).toUpperCase() + i.label.slice(1)),
      datasets: [{
        data: items.map(i => i.amount),
        backgroundColor: items.map(i => i.color),
        borderWidth: 2,
        borderColor: '#fff',
        hoverOffset: 4,
      }]
    };
  });

  readonly chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: '68%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => ` AED ${(ctx.parsed as number).toLocaleString()}`,
        }
      }
    }
  };
}
