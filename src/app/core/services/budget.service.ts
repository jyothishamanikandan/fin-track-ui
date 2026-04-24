import { Injectable, signal, computed } from '@angular/core';
import { Budget } from '../../models';

const MOCK_BUDGETS: Budget[] = [
  { id: 'b1', category: 'Housing',   limit: 8000, spent: 7500,  color: '#1D9E75' },
  { id: 'b2', category: 'Food',      limit: 3000, spent: 1750,  color: '#EF9F27' },
  { id: 'b3', category: 'Transport', limit: 2000, spent: 535,   color: '#4A90E2' },
  { id: 'b4', category: 'Utilities', limit: 1500, spent: 800,   color: '#9B59B6' },
  { id: 'b5', category: 'Leisure',   limit: 1000, spent: 1225,  color: '#E24B4A' },
];

@Injectable({ providedIn: 'root' })
export class BudgetService {
  private readonly _budgets = signal<Budget[]>([...MOCK_BUDGETS]);
  private readonly _loading = signal(false);

  readonly budgets = this._budgets.asReadonly();
  readonly loading = this._loading.asReadonly();

  readonly totalBudget = computed(() =>
    this._budgets().reduce((s, b) => s + b.limit, 0)
  );

  readonly totalSpent = computed(() =>
    this._budgets().reduce((s, b) => s + b.spent, 0)
  );

  readonly overBudgetCount = computed(() =>
    this._budgets().filter(b => b.spent > b.limit).length
  );

  getUsagePercent(budget: Budget): number {
    return Math.round((budget.spent / budget.limit) * 100);
  }

  getUsageColor(budget: Budget): string {
    const pct = this.getUsagePercent(budget);
    if (pct >= 90) return '#E24B4A';
    if (pct >= 70) return '#EF9F27';
    return '#1D9E75';
  }

  addBudget(b: Omit<Budget, 'id' | 'spent'>): void {
    const newB: Budget = { ...b, id: `bgt_${Date.now()}`, spent: 0 };
    this._budgets.update(curr => [...curr, newB]);
  }

  updateBudget(id: string, updates: Partial<Budget>): void {
    this._budgets.update(curr =>
      curr.map(b => (b.id === id ? { ...b, ...updates } : b))
    );
  }

  deleteBudget(id: string): void {
    this._budgets.update(curr => curr.filter(b => b.id !== id));
  }
}
