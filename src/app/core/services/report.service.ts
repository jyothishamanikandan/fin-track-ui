import { Injectable, signal, computed, inject } from '@angular/core';
import { TransactionService } from './transaction.service';
import { MonthlyReport, DailySpend } from '../../models';

const MONTH_LABELS: Record<string, string> = {
  '2025-11': 'Nov',
  '2025-12': 'Dec',
  '2026-01': 'Jan',
  '2026-02': 'Feb',
  '2026-03': 'Mar',
  '2026-04': 'Apr',
};

@Injectable({ providedIn: 'root' })
export class ReportService {
  private readonly transactionService = inject(TransactionService);

  private readonly _selectedMonth = signal<string>('2026-04');

  readonly selectedMonth = this._selectedMonth.asReadonly();

  readonly monthlyReports = computed<MonthlyReport[]>(() => {
    const months = ['2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04'];
    const transactions = this.transactionService.transactions();

    return months.map(month => {
      const monthTxns = transactions.filter(t => t.date.startsWith(month));
      const income = monthTxns
        .filter(t => t.type === 'income')
        .reduce((s, t) => s + t.amount, 0);
      const expenses = monthTxns
        .filter(t => t.type === 'expense')
        .reduce((s, t) => s + t.amount, 0);
      return {
        month,
        label: MONTH_LABELS[month] ?? month,
        income,
        expenses,
        net: income - expenses,
      };
    });
  });

  readonly selectedMonthTransactions = computed(() => {
    const month = this._selectedMonth();
    return this.transactionService.transactions().filter(t => t.date.startsWith(month));
  });

  readonly dailySpend = computed<DailySpend[]>(() => {
    const month = this._selectedMonth();
    const [year, mo] = month.split('-').map(Number);
    const daysInMonth = new Date(year, mo, 0).getDate();
    const txns = this.selectedMonthTransactions().filter(t => t.type === 'expense');

    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const dayStr = `${month}-${String(day).padStart(2, '0')}`;
      const amount = txns
        .filter(t => t.date === dayStr)
        .reduce((s, t) => s + t.amount, 0);
      return { day, amount };
    });
  });

  readonly highestSpendingCategory = computed(() => {
    const txns = this.selectedMonthTransactions().filter(t => t.type === 'expense');
    const totals = txns.reduce<Record<string, number>>((acc, t) => {
      acc[t.category] = (acc[t.category] ?? 0) + t.amount;
      return acc;
    }, {});
    const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    return sorted[0] ? { category: sorted[0][0], amount: sorted[0][1] } : null;
  });

  readonly biggestExpense = computed(() => {
    const txns = this.selectedMonthTransactions().filter(t => t.type === 'expense');
    return txns.sort((a, b) => b.amount - a.amount)[0] ?? null;
  });

  readonly averageDailySpend = computed(() => {
    const expenses = this.selectedMonthTransactions()
      .filter(t => t.type === 'expense')
      .reduce((s, t) => s + t.amount, 0);
    const [year, mo] = this._selectedMonth().split('-').map(Number);
    const days = new Date(year, mo, 0).getDate();
    return Math.round(expenses / days);
  });

  setSelectedMonth(month: string): void {
    this._selectedMonth.set(month);
  }
}
