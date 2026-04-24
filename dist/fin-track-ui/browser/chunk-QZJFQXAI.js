import {
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-WWJDTDQY.js";

// src/app/core/services/transaction.service.ts
var MOCK_TRANSACTIONS = [
  { id: "1", title: "Monthly Salary", amount: 25e3, type: "income", category: "income", date: "2026-04-01" },
  { id: "2", title: "Monthly Rent", amount: 7500, type: "expense", category: "housing", date: "2026-04-02", note: "April rent - JBR apartment" },
  { id: "3", title: "Carrefour Groceries", amount: 850, type: "expense", category: "food", date: "2026-04-03" },
  { id: "4", title: "Metro Card Top-up", amount: 200, type: "expense", category: "transport", date: "2026-04-05" },
  { id: "5", title: "DEWA Electricity Bill", amount: 450, type: "expense", category: "utilities", date: "2026-04-07" },
  { id: "6", title: "Dinner at Nobu Dubai", amount: 650, type: "expense", category: "leisure", date: "2026-04-09" },
  { id: "7", title: "Uber Rides", amount: 185, type: "expense", category: "transport", date: "2026-04-10" },
  { id: "8", title: "Lunch at Eataly DIFC", amount: 280, type: "expense", category: "food", date: "2026-04-12" },
  { id: "9", title: "Netflix Subscription", amount: 55, type: "expense", category: "leisure", date: "2026-04-13" },
  { id: "10", title: "Freelance Project", amount: 5e3, type: "income", category: "income", date: "2026-04-15", note: "Web dev project payment" },
  { id: "11", title: "Du Internet Bill", amount: 350, type: "expense", category: "utilities", date: "2026-04-16" },
  { id: "12", title: "Spinneys Groceries", amount: 620, type: "expense", category: "food", date: "2026-04-18" },
  { id: "13", title: "VOX Cinema Tickets", amount: 120, type: "expense", category: "leisure", date: "2026-04-19" },
  { id: "14", title: "Taxi - Dubai Airport", amount: 150, type: "expense", category: "transport", date: "2026-04-20" },
  { id: "15", title: "Fitness First Membership", amount: 400, type: "expense", category: "leisure", date: "2026-04-22" },
  { id: "16", title: "Monthly Salary", amount: 25e3, type: "income", category: "income", date: "2026-03-01" },
  { id: "17", title: "Monthly Rent", amount: 7500, type: "expense", category: "housing", date: "2026-03-02" },
  { id: "18", title: "Grocery Shopping", amount: 920, type: "expense", category: "food", date: "2026-03-05" },
  { id: "19", title: "ADNOC Fuel", amount: 300, type: "expense", category: "transport", date: "2026-03-08" },
  { id: "20", title: "Etisalat Phone Bill", amount: 250, type: "expense", category: "utilities", date: "2026-03-10" },
  { id: "21", title: "Dubai Mall Shopping", amount: 1200, type: "expense", category: "leisure", date: "2026-03-15" },
  { id: "22", title: "Lunch Meeting", amount: 320, type: "expense", category: "food", date: "2026-03-20" },
  { id: "23", title: "Monthly Salary", amount: 25e3, type: "income", category: "income", date: "2026-02-01" },
  { id: "24", title: "Monthly Rent", amount: 7500, type: "expense", category: "housing", date: "2026-02-02" },
  { id: "25", title: "Valentine's Dinner", amount: 800, type: "expense", category: "food", date: "2026-02-14" },
  { id: "26", title: "Bonus Payment", amount: 8e3, type: "income", category: "income", date: "2026-02-28", note: "Q1 performance bonus" },
  { id: "27", title: "Monthly Salary", amount: 25e3, type: "income", category: "income", date: "2026-01-01" },
  { id: "28", title: "Monthly Rent", amount: 7500, type: "expense", category: "housing", date: "2026-01-02" },
  { id: "29", title: "New Year Celebration", amount: 1500, type: "expense", category: "leisure", date: "2026-01-01" },
  { id: "30", title: "Monthly Salary", amount: 25e3, type: "income", category: "income", date: "2025-12-01" },
  { id: "31", title: "Monthly Rent", amount: 7500, type: "expense", category: "housing", date: "2025-12-02" },
  { id: "32", title: "Christmas Gifts", amount: 2e3, type: "expense", category: "leisure", date: "2025-12-25" },
  { id: "33", title: "Monthly Salary", amount: 25e3, type: "income", category: "income", date: "2025-11-01" },
  { id: "34", title: "Monthly Rent", amount: 7500, type: "expense", category: "housing", date: "2025-11-02" },
  { id: "35", title: "Car Service", amount: 850, type: "expense", category: "transport", date: "2025-11-10" }
];
var _TransactionService = class _TransactionService {
  constructor() {
    this._transactions = signal([...MOCK_TRANSACTIONS], ...ngDevMode ? [{ debugName: "_transactions" }] : []);
    this._loading = signal(false, ...ngDevMode ? [{ debugName: "_loading" }] : []);
    this._filter = signal({ category: "all", type: "all", search: "", month: "all" }, ...ngDevMode ? [{ debugName: "_filter" }] : []);
    this.transactions = this._transactions.asReadonly();
    this.loading = this._loading.asReadonly();
    this.filter = this._filter.asReadonly();
    this.filtered = computed(() => {
      const f = this._filter();
      return this._transactions().filter((t) => {
        const matchCategory = f.category === "all" || t.category === f.category;
        const matchType = f.type === "all" || t.type === f.type;
        const matchSearch = !f.search || t.title.toLowerCase().includes(f.search.toLowerCase());
        const matchMonth = f.month === "all" || t.date.startsWith(f.month);
        return matchCategory && matchType && matchSearch && matchMonth;
      });
    }, ...ngDevMode ? [{ debugName: "filtered" }] : []);
    this.totalIncome = computed(() => this._transactions().filter((t) => t.type === "income" && t.date.startsWith("2026-04")).reduce((s, t) => s + t.amount, 0), ...ngDevMode ? [{ debugName: "totalIncome" }] : []);
    this.totalExpenses = computed(() => this._transactions().filter((t) => t.type === "expense" && t.date.startsWith("2026-04")).reduce((s, t) => s + t.amount, 0), ...ngDevMode ? [{ debugName: "totalExpenses" }] : []);
    this.netBalance = computed(() => this.totalIncome() - this.totalExpenses(), ...ngDevMode ? [{ debugName: "netBalance" }] : []);
    this.savingsRate = computed(() => {
      const income = this.totalIncome();
      if (income === 0)
        return 0;
      return Math.round(this.netBalance() / income * 100);
    }, ...ngDevMode ? [{ debugName: "savingsRate" }] : []);
    this.recentTransactions = computed(() => [...this._transactions()].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5), ...ngDevMode ? [{ debugName: "recentTransactions" }] : []);
    this.categoryExpenses = computed(() => {
      const cats = ["housing", "food", "transport", "utilities", "leisure", "other"];
      const aprilTxns = this._transactions().filter((t) => t.type === "expense" && t.date.startsWith("2026-04"));
      return cats.map((cat) => ({
        category: cat,
        amount: aprilTxns.filter((t) => t.category === cat).reduce((s, t) => s + t.amount, 0)
      }));
    }, ...ngDevMode ? [{ debugName: "categoryExpenses" }] : []);
  }
  setFilter(f) {
    this._filter.update((curr) => __spreadValues(__spreadValues({}, curr), f));
  }
  addTransaction(t) {
    const newT = __spreadProps(__spreadValues({}, t), { id: `txn_${Date.now()}` });
    this._transactions.update((curr) => [newT, ...curr]);
  }
  deleteTransaction(id) {
    this._transactions.update((curr) => curr.filter((t) => t.id !== id));
  }
  updateTransaction(id, updates) {
    this._transactions.update((curr) => curr.map((t) => t.id === id ? __spreadValues(__spreadValues({}, t), updates) : t));
  }
};
_TransactionService.\u0275fac = function TransactionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TransactionService)();
};
_TransactionService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransactionService, factory: _TransactionService.\u0275fac, providedIn: "root" });
var TransactionService = _TransactionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TransactionService
};
//# sourceMappingURL=chunk-QZJFQXAI.js.map
