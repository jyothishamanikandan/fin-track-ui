import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { ReportService } from '../../../../core/services/report.service';

@Component({
  selector: 'app-monthly-trend',
  standalone: true,
  imports: [BaseChartDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="widget-card">
      <div class="widget-header">
        <h3 class="widget-title">Monthly Trend</h3>
        <span class="widget-badge">Last 6 months</span>
      </div>
      <div class="chart-wrap">
        <canvas baseChart
          [data]="chartData()"
          [type]="'line'"
          [options]="chartOptions">
        </canvas>
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
      position: relative;
      height: 220px;
    }
  `]
})
export class MonthlyTrendComponent {
  private readonly reportService = inject(ReportService);

  readonly chartData = computed<ChartData<'line'>>(() => {
    const reports = this.reportService.monthlyReports();
    return {
      labels: reports.map(r => r.label),
      datasets: [
        {
          label: 'Income',
          data: reports.map(r => r.income),
          borderColor: '#1D9E75',
          backgroundColor: 'rgba(29,158,117,0.08)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#1D9E75',
          pointRadius: 4,
        },
        {
          label: 'Expenses',
          data: reports.map(r => r.expenses),
          borderColor: '#E24B4A',
          backgroundColor: 'rgba(226,75,74,0.08)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#E24B4A',
          pointRadius: 4,
        }
      ]
    };
  });

  readonly chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: 'index' },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 11, family: 'DM Sans' }, color: '#9ca3af' }
      },
      y: {
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: {
          font: { size: 11, family: 'DM Sans' },
          color: '#9ca3af',
          callback: (val) => `AED ${Number(val) / 1000}k`
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: { font: { size: 11, family: 'DM Sans' }, boxWidth: 10, color: '#6b7280' }
      },
      tooltip: {
        callbacks: {
          label: ctx => ` AED ${(ctx.parsed.y as number).toLocaleString()}`
        }
      }
    }
  };
}
