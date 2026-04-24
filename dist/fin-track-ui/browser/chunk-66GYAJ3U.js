import {
  TransactionService
} from "./chunk-QZJFQXAI.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-WWJDTDQY.js";

// src/app/core/services/report.service.ts
var MONTH_LABELS = {
  "2025-11": "Nov",
  "2025-12": "Dec",
  "2026-01": "Jan",
  "2026-02": "Feb",
  "2026-03": "Mar",
  "2026-04": "Apr"
};
var _ReportService = class _ReportService {
  constructor() {
    this.transactionService = inject(TransactionService);
    this._selectedMonth = signal("2026-04", ...ngDevMode ? [{ debugName: "_selectedMonth" }] : []);
    this.selectedMonth = this._selectedMonth.asReadonly();
    this.monthlyReports = computed(() => {
      const months = ["2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04"];
      const transactions = this.transactionService.transactions();
      return months.map((month) => {
        const monthTxns = transactions.filter((t) => t.date.startsWith(month));
        const income = monthTxns.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
        const expenses = monthTxns.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);
        return {
          month,
          label: MONTH_LABELS[month] ?? month,
          income,
          expenses,
          net: income - expenses
        };
      });
    }, ...ngDevMode ? [{ debugName: "monthlyReports" }] : []);
    this.selectedMonthTransactions = computed(() => {
      const month = this._selectedMonth();
      return this.transactionService.transactions().filter((t) => t.date.startsWith(month));
    }, ...ngDevMode ? [{ debugName: "selectedMonthTransactions" }] : []);
    this.dailySpend = computed(() => {
      const month = this._selectedMonth();
      const [year, mo] = month.split("-").map(Number);
      const daysInMonth = new Date(year, mo, 0).getDate();
      const txns = this.selectedMonthTransactions().filter((t) => t.type === "expense");
      return Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;
        const dayStr = `${month}-${String(day).padStart(2, "0")}`;
        const amount = txns.filter((t) => t.date === dayStr).reduce((s, t) => s + t.amount, 0);
        return { day, amount };
      });
    }, ...ngDevMode ? [{ debugName: "dailySpend" }] : []);
    this.highestSpendingCategory = computed(() => {
      const txns = this.selectedMonthTransactions().filter((t) => t.type === "expense");
      const totals = txns.reduce((acc, t) => {
        acc[t.category] = (acc[t.category] ?? 0) + t.amount;
        return acc;
      }, {});
      const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
      return sorted[0] ? { category: sorted[0][0], amount: sorted[0][1] } : null;
    }, ...ngDevMode ? [{ debugName: "highestSpendingCategory" }] : []);
    this.biggestExpense = computed(() => {
      const txns = this.selectedMonthTransactions().filter((t) => t.type === "expense");
      return txns.sort((a, b) => b.amount - a.amount)[0] ?? null;
    }, ...ngDevMode ? [{ debugName: "biggestExpense" }] : []);
    this.averageDailySpend = computed(() => {
      const expenses = this.selectedMonthTransactions().filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);
      const [year, mo] = this._selectedMonth().split("-").map(Number);
      const days = new Date(year, mo, 0).getDate();
      return Math.round(expenses / days);
    }, ...ngDevMode ? [{ debugName: "averageDailySpend" }] : []);
  }
  setSelectedMonth(month) {
    this._selectedMonth.set(month);
  }
};
_ReportService.\u0275fac = function ReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportService)();
};
_ReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
var ReportService = _ReportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ReportService
};
//# sourceMappingURL=chunk-66GYAJ3U.js.map
