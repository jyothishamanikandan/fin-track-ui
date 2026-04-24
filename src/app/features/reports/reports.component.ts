import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe, TitleCasePipe } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';
import { ReportService } from '../../core/services/report.service';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { AedCurrencyPipe } from '../../shared/pipes/aed-currency.pipe';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, DecimalPipe, TitleCasePipe, BaseChartDirective, SidebarComponent, AedCurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  protected readonly reportSvc = inject(ReportService);

  readonly availableMonths = [
    { value: '2025-11', label: 'November 2025' },
    { value: '2025-12', label: 'December 2025' },
    { value: '2026-01', label: 'January 2026' },
    { value: '2026-02', label: 'February 2026' },
    { value: '2026-03', label: 'March 2026' },
    { value: '2026-04', label: 'April 2026' },
  ];

  get selectedMonth(): string { return this.reportSvc.selectedMonth(); }
  set selectedMonth(v: string) { this.reportSvc.setSelectedMonth(v); }

  readonly selectedMonthLabel = computed(() =>
    this.availableMonths.find(m => m.value === this.reportSvc.selectedMonth())?.label ?? ''
  );

  readonly barChartData = computed<ChartData<'bar'>>(() => {
    const reports = this.reportSvc.monthlyReports();
    return {
      labels: reports.map(r => r.label),
      datasets: [
        {
          label: 'Income',
          data: reports.map(r => r.income),
          backgroundColor: 'rgba(29,158,117,0.8)',
          borderRadius: 6,
          barPercentage: 0.6,
        },
        {
          label: 'Expenses',
          data: reports.map(r => r.expenses),
          backgroundColor: 'rgba(226,75,74,0.8)',
          borderRadius: 6,
          barPercentage: 0.6,
        }
      ]
    };
  });

  readonly barChartOptions: ChartOptions<'bar'> = {
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
        callbacks: { label: ctx => ` AED ${(ctx.parsed.y as number).toLocaleString()}` }
      }
    }
  };

  readonly lineChartData = computed<ChartData<'line'>>(() => {
    const daily = this.reportSvc.dailySpend();
    return {
      labels: daily.map(d => String(d.day)),
      datasets: [{
        label: 'Daily Spend',
        data: daily.map(d => d.amount),
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74,144,226,0.08)',
        fill: true,
        tension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: '#4A90E2',
      }]
    };
  });

  readonly lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 10, family: 'DM Sans' },
          color: '#9ca3af',
          maxTicksLimit: 10,
        }
      },
      y: {
        grid: { color: 'rgba(0,0,0,0.04)' },
        ticks: {
          font: { size: 10, family: 'DM Sans' },
          color: '#9ca3af',
          callback: (val) => `AED ${Number(val).toLocaleString()}`
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: ctx => ` AED ${(ctx.parsed.y as number).toLocaleString()}` }
      }
    }
  };
}
