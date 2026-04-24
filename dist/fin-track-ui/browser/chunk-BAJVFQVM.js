import {
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-WWJDTDQY.js";

// src/app/core/services/budget.service.ts
var MOCK_BUDGETS = [
  { id: "b1", category: "Housing", limit: 8e3, spent: 7500, color: "#1D9E75" },
  { id: "b2", category: "Food", limit: 3e3, spent: 1750, color: "#EF9F27" },
  { id: "b3", category: "Transport", limit: 2e3, spent: 535, color: "#4A90E2" },
  { id: "b4", category: "Utilities", limit: 1500, spent: 800, color: "#9B59B6" },
  { id: "b5", category: "Leisure", limit: 1e3, spent: 1225, color: "#E24B4A" }
];
var _BudgetService = class _BudgetService {
  constructor() {
    this._budgets = signal([...MOCK_BUDGETS], ...ngDevMode ? [{ debugName: "_budgets" }] : []);
    this._loading = signal(false, ...ngDevMode ? [{ debugName: "_loading" }] : []);
    this.budgets = this._budgets.asReadonly();
    this.loading = this._loading.asReadonly();
    this.totalBudget = computed(() => this._budgets().reduce((s, b) => s + b.limit, 0), ...ngDevMode ? [{ debugName: "totalBudget" }] : []);
    this.totalSpent = computed(() => this._budgets().reduce((s, b) => s + b.spent, 0), ...ngDevMode ? [{ debugName: "totalSpent" }] : []);
    this.overBudgetCount = computed(() => this._budgets().filter((b) => b.spent > b.limit).length, ...ngDevMode ? [{ debugName: "overBudgetCount" }] : []);
  }
  getUsagePercent(budget) {
    return Math.round(budget.spent / budget.limit * 100);
  }
  getUsageColor(budget) {
    const pct = this.getUsagePercent(budget);
    if (pct >= 90)
      return "#E24B4A";
    if (pct >= 70)
      return "#EF9F27";
    return "#1D9E75";
  }
  addBudget(b) {
    const newB = __spreadProps(__spreadValues({}, b), { id: `bgt_${Date.now()}`, spent: 0 });
    this._budgets.update((curr) => [...curr, newB]);
  }
  updateBudget(id, updates) {
    this._budgets.update((curr) => curr.map((b) => b.id === id ? __spreadValues(__spreadValues({}, b), updates) : b));
  }
  deleteBudget(id) {
    this._budgets.update((curr) => curr.filter((b) => b.id !== id));
  }
};
_BudgetService.\u0275fac = function BudgetService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BudgetService)();
};
_BudgetService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BudgetService, factory: _BudgetService.\u0275fac, providedIn: "root" });
var BudgetService = _BudgetService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  BudgetService
};
//# sourceMappingURL=chunk-BAJVFQVM.js.map
