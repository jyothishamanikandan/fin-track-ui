import { Injectable, signal, computed } from '@angular/core';
import { Transaction, FilterState } from '../../models';

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1',  title: 'Monthly Salary',        amount: 25000, type: 'income',  category: 'income',    date: '2026-04-01' },
  { id: '2',  title: 'Monthly Rent',           amount: 7500,  type: 'expense', category: 'housing',   date: '2026-04-02', note: 'April rent - JBR apartment' },
  { id: '3',  title: 'Carrefour Groceries',    amount: 850,   type: 'expense', category: 'food',      date: '2026-04-03' },
  { id: '4',  title: 'Metro Card Top-up',      amount: 200,   type: 'expense', category: 'transport', date: '2026-04-05' },
  { id: '5',  title: 'DEWA Electricity Bill',  amount: 450,   type: 'expense', category: 'utilities', date: '2026-04-07' },
  { id: '6',  title: 'Dinner at Nobu Dubai',   amount: 650,   type: 'expense', category: 'leisure',   date: '2026-04-09' },
  { id: '7',  title: 'Uber Rides',             amount: 185,   type: 'expense', category: 'transport', date: '2026-04-10' },
  { id: '8',  title: 'Lunch at Eataly DIFC',   amount: 280,   type: 'expense', category: 'food',      date: '2026-04-12' },
  { id: '9',  title: 'Netflix Subscription',   amount: 55,    type: 'expense', category: 'leisure',   date: '2026-04-13' },
  { id: '10', title: 'Freelance Project',       amount: 5000,  type: 'income',  category: 'income',    date: '2026-04-15', note: 'Web dev project payment' },
  { id: '11', title: 'Du Internet Bill',        amount: 350,   type: 'expense', category: 'utilities', date: '2026-04-16' },
  { id: '12', title: 'Spinneys Groceries',      amount: 620,   type: 'expense', category: 'food',      date: '2026-04-18' },
  { id: '13', title: 'VOX Cinema Tickets',      amount: 120,   type: 'expense', category: 'leisure',   date: '2026-04-19' },
  { id: '14', title: 'Taxi - Dubai Airport',    amount: 150,   type: 'expense', category: 'transport', date: '2026-04-20' },
  { id: '15', title: 'Fitness First Membership',amount: 400,   type: 'expense', category: 'leisure',   date: '2026-04-22' },
  { id: '16', title: 'Monthly Salary',          amount: 25000, type: 'income',  category: 'income',    date: '2026-03-01' },
  { id: '17', title: 'Monthly Rent',            amount: 7500,  type: 'expense', category: 'housing',   date: '2026-03-02' },
  { id: '18', title: 'Grocery Shopping',        amount: 920,   type: 'expense', category: 'food',      date: '2026-03-05' },
  { id: '19', title: 'ADNOC Fuel',              amount: 300,   type: 'expense', category: 'transport', date: '2026-03-08' },
  { id: '20', title: 'Etisalat Phone Bill',     amount: 250,   type: 'expense', category: 'utilities', date: '2026-03-10' },
  { id: '21', title: 'Dubai Mall Shopping',     amount: 1200,  type: 'expense', category: 'leisure',   date: '2026-03-15' },
  { id: '22', title: 'Lunch Meeting',           amount: 320,   type: 'expense', category: 'food',      date: '2026-03-20' },
  { id: '23', title: 'Monthly Salary',          amount: 25000, type: 'income',  category: 'income',    date: '2026-02-01' },
  { id: '24', title: 'Monthly Rent',            amount: 7500,  type: 'expense', category: 'housing',   date: '2026-02-02' },
  { id: '25', title: "Valentine's Dinner",      amount: 800,   type: 'expense', category: 'food',      date: '2026-02-14' },
  { id: '26', title: 'Bonus Payment',           amount: 8000,  type: 'income',  category: 'income',    date: '2026-02-28', note: 'Q1 performance bonus' },
  { id: '27', title: 'Monthly Salary',          amount: 25000, type: 'income',  category: 'income',    date: '2026-01-01' },
  { id: '28', title: 'Monthly Rent',            amount: 7500,  type: 'expense', category: 'housing',   date: '2026-01-02' },
  { id: '29', title: 'New Year Celebration',    amount: 1500,  type: 'expense', category: 'leisure',   date: '2026-01-01' },
  { id: '30', title: 'Monthly Salary',          amount: 25000, type: 'income',  category: 'income',    date: '2025-12-01' },
  { id: '31', title: 'Monthly Rent',            amount: 7500,  type: 'expense', category: 'housing',   date: '2025-12-02' },
  { id: '32', title: 'Christmas Gifts',         amount: 2000,  type: 'expense', category: 'leisure',   date: '2025-12-25' },
  { id: '33', title: 'Monthly Salary',          amount: 25000, type: 'income',  category: 'income',    date: '2025-11-01' },
  { id: '34', title: 'Monthly Rent',            amount: 7500,  type: 'expense', category: 'housing',   date: '2025-11-02' },
  { id: '35', title: 'Car Service',             amount: 850,   type: 'expense', category: 'transport', date: '2025-11-10' },
];

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private readonly _transactions = signal<Transaction[]>([...MOCK_TRANSACTIONS]);
  private readonly _loading = signal(false);
  private readonly _filter = signal<FilterState>({ category: 'all', type: 'all', search: '', month: 'all' });

  readonly transactions = this._transactions.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly filter = this._filter.asReadonly();

  readonly filtered = computed(() => {
    const f = this._filter();
    return this._transactions().filter(t => {
      const matchCategory = f.category === 'all' || t.category === f.category;
      const matchType = f.type === 'all' || t.type === f.type;
      const matchSearch = !f.search || t.title.toLowerCase().includes(f.search.toLowerCase());
      const matchMonth = f.month === 'all' || t.date.startsWith(f.month);
      return matchCategory && matchType && matchSearch && matchMonth;
    });
  });

  readonly totalIncome = computed(() =>
    this._transactions()
      .filter(t => t.type === 'income' && t.date.startsWith('2026-04'))
      .reduce((s, t) => s + t.amount, 0)
  );

  readonly totalExpenses = computed(() =>
    this._transactions()
      .filter(t => t.type === 'expense' && t.date.startsWith('2026-04'))
      .reduce((s, t) => s + t.amount, 0)
  );

  readonly netBalance = computed(() => this.totalIncome() - this.totalExpenses());

  readonly savingsRate = computed(() => {
    const income = this.totalIncome();
    if (income === 0) return 0;
    return Math.round((this.netBalance() / income) * 100);
  });

  readonly recentTransactions = computed(() =>
    [...this._transactions()]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
  );

  readonly categoryExpenses = computed(() => {
    const cats = ['housing', 'food', 'transport', 'utilities', 'leisure', 'other'] as const;
    const aprilTxns = this._transactions().filter(t => t.type === 'expense' && t.date.startsWith('2026-04'));
    return cats.map(cat => ({
      category: cat,
      amount: aprilTxns.filter(t => t.category === cat).reduce((s, t) => s + t.amount, 0)
    }));
  });

  setFilter(f: Partial<FilterState>): void {
    this._filter.update(curr => ({ ...curr, ...f }));
  }

  addTransaction(t: Omit<Transaction, 'id'>): void {
    const newT: Transaction = { ...t, id: `txn_${Date.now()}` };
    this._transactions.update(curr => [newT, ...curr]);
  }

  deleteTransaction(id: string): void {
    this._transactions.update(curr => curr.filter(t => t.id !== id));
  }

  updateTransaction(id: string, updates: Partial<Transaction>): void {
    this._transactions.update(curr =>
      curr.map(t => (t.id === id ? { ...t, ...updates } : t))
    );
  }
}
