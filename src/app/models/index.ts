export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  category: 'housing' | 'food' | 'transport' | 'utilities' | 'leisure' | 'income' | 'other';
  date: string;
  note?: string;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  color: string;
}

export interface FilterState {
  category: string;
  type: string;
  search: string;
  month: string;
}

export interface MonthlyReport {
  month: string;
  label: string;
  income: number;
  expenses: number;
  net: number;
}

export interface DailySpend {
  day: number;
  amount: number;
}
