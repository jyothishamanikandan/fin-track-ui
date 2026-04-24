import {
  ReportService
} from "./chunk-66GYAJ3U.js";
import {
  BaseChartDirective
} from "./chunk-IN3PZOQK.js";
import "./chunk-QZJFQXAI.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HEGPPGSL.js";
import {
  AedCurrencyPipe,
  SidebarComponent
} from "./chunk-F4TIWHC7.js";
import "./chunk-ONVH3BSU.js";
import {
  ChangeDetectionStrategy,
  Component,
  DecimalPipe,
  TitleCasePipe,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WWJDTDQY.js";

// src/app/features/reports/reports.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.month;
function ReportsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275property("value", m_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1.label);
  }
}
function ReportsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "aedCurrency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, cat_r2.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, cat_r2.amount));
  }
}
function ReportsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "aedCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r3 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, txn_r3.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r3.title);
  }
}
function ReportsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_For_89_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, r_r4.net / r_r4.income * 100, "1.0-0"), "% ");
  }
}
function ReportsComponent_For_89_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function ReportsComponent_For_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "aedCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 35);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "aedCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 32);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "aedCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 32);
    \u0275\u0275conditionalCreate(14, ReportsComponent_For_89_Conditional_14_Template, 2, 4)(15, ReportsComponent_For_89_Conditional_15_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active-row", r_r4.month === ctx_r4.reportSvc.selectedMonth());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, r_r4.income));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, r_r4.expenses));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-income", r_r4.net >= 0)("text-expense", r_r4.net < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 15, r_r4.net), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(r_r4.income > 0 ? 14 : 15);
  }
}
var _ReportsComponent = class _ReportsComponent {
  constructor() {
    this.reportSvc = inject(ReportService);
    this.availableMonths = [
      { value: "2025-11", label: "November 2025" },
      { value: "2025-12", label: "December 2025" },
      { value: "2026-01", label: "January 2026" },
      { value: "2026-02", label: "February 2026" },
      { value: "2026-03", label: "March 2026" },
      { value: "2026-04", label: "April 2026" }
    ];
    this.selectedMonthLabel = computed(() => this.availableMonths.find((m) => m.value === this.reportSvc.selectedMonth())?.label ?? "", ...ngDevMode ? [{ debugName: "selectedMonthLabel" }] : []);
    this.barChartData = computed(() => {
      const reports = this.reportSvc.monthlyReports();
      return {
        labels: reports.map((r) => r.label),
        datasets: [
          {
            label: "Income",
            data: reports.map((r) => r.income),
            backgroundColor: "rgba(29,158,117,0.8)",
            borderRadius: 6,
            barPercentage: 0.6
          },
          {
            label: "Expenses",
            data: reports.map((r) => r.expenses),
            backgroundColor: "rgba(226,75,74,0.8)",
            borderRadius: 6,
            barPercentage: 0.6
          }
        ]
      };
    }, ...ngDevMode ? [{ debugName: "barChartData" }] : []);
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: "index" },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 11, family: "DM Sans" }, color: "#9ca3af" }
        },
        y: {
          grid: { color: "rgba(0,0,0,0.04)" },
          ticks: {
            font: { size: 11, family: "DM Sans" },
            color: "#9ca3af",
            callback: (val) => `AED ${Number(val) / 1e3}k`
          }
        }
      },
      plugins: {
        legend: {
          position: "top",
          align: "end",
          labels: { font: { size: 11, family: "DM Sans" }, boxWidth: 10, color: "#6b7280" }
        },
        tooltip: {
          callbacks: { label: (ctx) => ` AED ${ctx.parsed.y.toLocaleString()}` }
        }
      }
    };
    this.lineChartData = computed(() => {
      const daily = this.reportSvc.dailySpend();
      return {
        labels: daily.map((d) => String(d.day)),
        datasets: [{
          label: "Daily Spend",
          data: daily.map((d) => d.amount),
          borderColor: "#4A90E2",
          backgroundColor: "rgba(74,144,226,0.08)",
          fill: true,
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: "#4A90E2"
        }]
      };
    }, ...ngDevMode ? [{ debugName: "lineChartData" }] : []);
    this.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            font: { size: 10, family: "DM Sans" },
            color: "#9ca3af",
            maxTicksLimit: 10
          }
        },
        y: {
          grid: { color: "rgba(0,0,0,0.04)" },
          ticks: {
            font: { size: 10, family: "DM Sans" },
            color: "#9ca3af",
            callback: (val) => `AED ${Number(val).toLocaleString()}`
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: { label: (ctx) => ` AED ${ctx.parsed.y.toLocaleString()}` }
        }
      }
    };
  }
  get selectedMonth() {
    return this.reportSvc.selectedMonth();
  }
  set selectedMonth(v) {
    this.reportSvc.setSelectedMonth(v);
  }
};
_ReportsComponent.\u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsComponent)();
};
_ReportsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 90, vars: 14, consts: [[1, "page-layout"], [1, "main-content"], [1, "page-header", "d-flex", "align-items-center", "justify-content-between"], [1, "subtitle"], [1, "month-selector"], [1, "form-label", "mb-0", "me-2"], [1, "form-select", 2, "width", "auto", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "stats-row"], [1, "stat-card", "card"], [1, "stat-icon", 2, "background", "rgba(239,159,39,0.12)", "color", "#EF9F27"], [1, "bi", "bi-trophy-fill"], [1, "stat-body"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon", 2, "background", "rgba(226,75,74,0.12)", "color", "var(--danger)"], [1, "bi", "bi-arrow-up-circle-fill"], [1, "stat-icon", 2, "background", "rgba(74,144,226,0.12)", "color", "#4A90E2"], [1, "bi", "bi-calendar3"], [1, "stat-sub"], [1, "stat-icon", 2, "background", "rgba(29,158,117,0.12)", "color", "var(--primary)"], [1, "bi", "bi-receipt"], [1, "chart-card", "card", "mb-3"], [1, "chart-header"], [1, "chart-title"], [1, "chart-badge"], [1, "chart-body"], ["baseChart", "", 3, "data", "type", "options"], [1, "chart-card", "card"], [1, "card", "mt-3"], [1, "table-responsive"], [1, "table", "table-custom"], [1, "text-end"], [3, "active-row"], [1, "text-end", "text-income"], [1, "text-end", "text-expense"]], template: function ReportsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-sidebar");
    \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "div")(5, "h1");
    \u0275\u0275text(6, "Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8, "Financial insights & analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
    \u0275\u0275text(11, "Viewing:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
      return $event;
    });
    \u0275\u0275repeaterCreate(13, ReportsComponent_For_14_Template, 2, 2, "option", 7, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "div", 10);
    \u0275\u0275element(18, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 12)(20, "p", 13);
    \u0275\u0275text(21, "Highest Spend Category");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, ReportsComponent_Conditional_22_Template, 6, 6)(23, ReportsComponent_Conditional_23_Template, 2, 0, "p", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 9)(25, "div", 15);
    \u0275\u0275element(26, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 12)(28, "p", 13);
    \u0275\u0275text(29, "Biggest Single Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, ReportsComponent_Conditional_30_Template, 5, 4)(31, ReportsComponent_Conditional_31_Template, 2, 0, "p", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 9)(33, "div", 17);
    \u0275\u0275element(34, "i", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 12)(36, "p", 13);
    \u0275\u0275text(37, "Avg. Daily Spend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 14);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "aedCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 19);
    \u0275\u0275text(42, "per day");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 9)(44, "div", 20);
    \u0275\u0275element(45, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 12)(47, "p", 13);
    \u0275\u0275text(48, "Total Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 14);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "p", 19);
    \u0275\u0275text(52, "this period");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 22)(54, "div", 23)(55, "h3", 24);
    \u0275\u0275text(56, "Income vs Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 25);
    \u0275\u0275text(58, "Last 6 months");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 26);
    \u0275\u0275element(60, "canvas", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 28)(62, "div", 23)(63, "h3", 24);
    \u0275\u0275text(64, "Daily Spending Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 25);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 26);
    \u0275\u0275element(68, "canvas", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 29)(70, "div", 23)(71, "h3", 24);
    \u0275\u0275text(72, "Monthly Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 30)(74, "table", 31)(75, "thead")(76, "tr")(77, "th");
    \u0275\u0275text(78, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th", 32);
    \u0275\u0275text(80, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "th", 32);
    \u0275\u0275text(82, "Expenses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th", 32);
    \u0275\u0275text(84, "Net");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th", 32);
    \u0275\u0275text(86, "Savings Rate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "tbody");
    \u0275\u0275repeaterCreate(88, ReportsComponent_For_89_Template, 16, 17, "tr", 33, _forTrack1);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedMonth);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.availableMonths);
    \u0275\u0275advance(9);
    \u0275\u0275conditional((tmp_2_0 = ctx.reportSvc.highestSpendingCategory()) ? 22 : 23, tmp_2_0);
    \u0275\u0275advance(8);
    \u0275\u0275conditional((tmp_3_0 = ctx.reportSvc.biggestExpense()) ? 30 : 31, tmp_3_0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 12, ctx.reportSvc.averageDailySpend()));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx.reportSvc.selectedMonthTransactions().length);
    \u0275\u0275advance(10);
    \u0275\u0275property("data", ctx.barChartData())("type", "bar")("options", ctx.barChartOptions);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.selectedMonthLabel());
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.lineChartData())("type", "line")("options", ctx.lineChartOptions);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx.reportSvc.monthlyReports());
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, ReactiveFormsModule, BaseChartDirective, SidebarComponent, DecimalPipe, TitleCasePipe, AedCurrencyPipe], styles: ["\n\n.month-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.month-selector[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.125rem;\n  display: flex;\n  gap: 0.875rem;\n  align-items: flex-start;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.stat-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin: 0 0 0.25rem;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.1rem;\n}\n.stat-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chart-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  padding-bottom: 0.875rem;\n  border-bottom: var(--border);\n}\n.chart-title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.chart-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  background: #F3F4F6;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n}\n.chart-body[_ngcontent-%COMP%] {\n  position: relative;\n  height: 280px;\n}\n.table-custom[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.table-custom[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 0.75rem 1rem;\n  border-bottom: var(--border);\n}\n.table-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-bottom: var(--border);\n  vertical-align: middle;\n}\n.table-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.table-custom[_ngcontent-%COMP%]   .active-row[_ngcontent-%COMP%] {\n  background: var(--primary-light) !important;\n}\n.table-custom[_ngcontent-%COMP%]   .active-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n@media (max-width: 1200px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .chart-body[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .month-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=reports.component.css.map */"], changeDetection: 0 });
var ReportsComponent = _ReportsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [FormsModule, ReactiveFormsModule, DecimalPipe, TitleCasePipe, BaseChartDirective, SidebarComponent, AedCurrencyPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-layout">
  <app-sidebar></app-sidebar>

  <main class="main-content">
    <div class="page-header d-flex align-items-center justify-content-between">
      <div>
        <h1>Reports</h1>
        <p class="subtitle">Financial insights &amp; analysis</p>
      </div>
      <div class="month-selector">
        <label class="form-label mb-0 me-2">Viewing:</label>
        <select class="form-select" style="width: auto;" [(ngModel)]="selectedMonth">
          @for (m of availableMonths; track m.value) {
            <option [value]="m.value">{{ m.label }}</option>
          }
        </select>
      </div>
    </div>

    <!-- Summary Stats -->
    <div class="stats-row">
      <div class="stat-card card">
        <div class="stat-icon" style="background: rgba(239,159,39,0.12); color: #EF9F27;">
          <i class="bi bi-trophy-fill"></i>
        </div>
        <div class="stat-body">
          <p class="stat-label">Highest Spend Category</p>
          @if (reportSvc.highestSpendingCategory(); as cat) {
            <p class="stat-value">{{ cat.category | titlecase }}</p>
            <p class="stat-sub">{{ cat.amount | aedCurrency }}</p>
          } @else {
            <p class="stat-value">\u2014</p>
          }
        </div>
      </div>

      <div class="stat-card card">
        <div class="stat-icon" style="background: rgba(226,75,74,0.12); color: var(--danger);">
          <i class="bi bi-arrow-up-circle-fill"></i>
        </div>
        <div class="stat-body">
          <p class="stat-label">Biggest Single Expense</p>
          @if (reportSvc.biggestExpense(); as txn) {
            <p class="stat-value">{{ txn.amount | aedCurrency }}</p>
            <p class="stat-sub">{{ txn.title }}</p>
          } @else {
            <p class="stat-value">\u2014</p>
          }
        </div>
      </div>

      <div class="stat-card card">
        <div class="stat-icon" style="background: rgba(74,144,226,0.12); color: #4A90E2;">
          <i class="bi bi-calendar3"></i>
        </div>
        <div class="stat-body">
          <p class="stat-label">Avg. Daily Spend</p>
          <p class="stat-value">{{ reportSvc.averageDailySpend() | aedCurrency }}</p>
          <p class="stat-sub">per day</p>
        </div>
      </div>

      <div class="stat-card card">
        <div class="stat-icon" style="background: rgba(29,158,117,0.12); color: var(--primary);">
          <i class="bi bi-receipt"></i>
        </div>
        <div class="stat-body">
          <p class="stat-label">Total Transactions</p>
          <p class="stat-value">{{ reportSvc.selectedMonthTransactions().length }}</p>
          <p class="stat-sub">this period</p>
        </div>
      </div>
    </div>

    <!-- Bar Chart: Income vs Expenses -->
    <div class="chart-card card mb-3">
      <div class="chart-header">
        <h3 class="chart-title">Income vs Expenses</h3>
        <span class="chart-badge">Last 6 months</span>
      </div>
      <div class="chart-body">
        <canvas baseChart
          [data]="barChartData()"
          [type]="'bar'"
          [options]="barChartOptions">
        </canvas>
      </div>
    </div>

    <!-- Line Chart: Daily Spending -->
    <div class="chart-card card">
      <div class="chart-header">
        <h3 class="chart-title">Daily Spending Trend</h3>
        <span class="chart-badge">{{ selectedMonthLabel() }}</span>
      </div>
      <div class="chart-body">
        <canvas baseChart
          [data]="lineChartData()"
          [type]="'line'"
          [options]="lineChartOptions">
        </canvas>
      </div>
    </div>

    <!-- Monthly Table -->
    <div class="card mt-3">
      <div class="chart-header">
        <h3 class="chart-title">Monthly Summary</h3>
      </div>
      <div class="table-responsive">
        <table class="table table-custom">
          <thead>
            <tr>
              <th>Month</th>
              <th class="text-end">Income</th>
              <th class="text-end">Expenses</th>
              <th class="text-end">Net</th>
              <th class="text-end">Savings Rate</th>
            </tr>
          </thead>
          <tbody>
            @for (r of reportSvc.monthlyReports(); track r.month) {
              <tr [class.active-row]="r.month === reportSvc.selectedMonth()">
                <td><strong>{{ r.label }}</strong></td>
                <td class="text-end text-income">{{ r.income | aedCurrency }}</td>
                <td class="text-end text-expense">{{ r.expenses | aedCurrency }}</td>
                <td class="text-end" [class.text-income]="r.net >= 0" [class.text-expense]="r.net < 0">
                  {{ r.net | aedCurrency }}
                </td>
                <td class="text-end">
                  @if (r.income > 0) {
                    {{ (r.net / r.income * 100) | number:'1.0-0' }}%
                  } @else {
                    \u2014
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  </main>
</div>
`, styles: ["/* src/app/features/reports/reports.component.scss */\n.month-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.month-selector .form-label {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.stats-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.stat-card {\n  padding: 1.125rem;\n  display: flex;\n  gap: 0.875rem;\n  align-items: flex-start;\n}\n.stat-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.stat-body {\n  flex: 1;\n}\n.stat-label {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin: 0 0 0.25rem;\n}\n.stat-value {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.1rem;\n}\n.stat-sub {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chart-card {\n  padding: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.chart-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  padding-bottom: 0.875rem;\n  border-bottom: var(--border);\n}\n.chart-title {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.chart-badge {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  background: #F3F4F6;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n}\n.chart-body {\n  position: relative;\n  height: 280px;\n}\n.table-custom {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.table-custom thead th {\n  background: #F8F9FA;\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 0.75rem 1rem;\n  border-bottom: var(--border);\n}\n.table-custom tbody td {\n  padding: 0.75rem 1rem;\n  border-bottom: var(--border);\n  vertical-align: middle;\n}\n.table-custom tbody tr:last-child td {\n  border-bottom: none;\n}\n.table-custom .active-row {\n  background: var(--primary-light) !important;\n}\n.table-custom .active-row td {\n  font-weight: 500;\n}\n@media (max-width: 1200px) {\n  .stats-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-row {\n    grid-template-columns: 1fr;\n  }\n  .chart-body {\n    height: 200px;\n  }\n  .month-selector {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=reports.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/features/reports/reports.component.ts", lineNumber: 18 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-ZKHZDWAO.js.map
