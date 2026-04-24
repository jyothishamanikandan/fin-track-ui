import {
  BudgetService
} from "./chunk-BAJVFQVM.js";
import {
  ReportService
} from "./chunk-66GYAJ3U.js";
import {
  BaseChartDirective
} from "./chunk-IN3PZOQK.js";
import {
  TransactionService
} from "./chunk-QZJFQXAI.js";
import {
  AedCurrencyPipe,
  SidebarComponent
} from "./chunk-F4TIWHC7.js";
import "./chunk-ONVH3BSU.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  RouterLink,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WWJDTDQY.js";

// src/app/features/dashboard/widgets/metric-card/metric-card.component.ts
function MetricCardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "aedCurrency");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.valueClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, ctx_r0.value()));
  }
}
function MetricCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.valueClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.value(), "", ctx_r0.suffix());
  }
}
function MetricCardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtext());
  }
}
var _MetricCardComponent = class _MetricCardComponent {
  constructor() {
    this.label = input.required(...ngDevMode ? [{ debugName: "label" }] : []);
    this.value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
    this.icon = input("bi-cash-stack", ...ngDevMode ? [{ debugName: "icon" }] : []);
    this.iconBg = input("rgba(29,158,117,0.12)", ...ngDevMode ? [{ debugName: "iconBg" }] : []);
    this.isCurrency = input(true, ...ngDevMode ? [{ debugName: "isCurrency" }] : []);
    this.suffix = input("", ...ngDevMode ? [{ debugName: "suffix" }] : []);
    this.valueClass = input("", ...ngDevMode ? [{ debugName: "valueClass" }] : []);
    this.subtext = input("", ...ngDevMode ? [{ debugName: "subtext" }] : []);
  }
};
_MetricCardComponent.\u0275fac = function MetricCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MetricCardComponent)();
};
_MetricCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetricCardComponent, selectors: [["app-metric-card"]], inputs: { label: [1, "label"], value: [1, "value"], icon: [1, "icon"], iconBg: [1, "iconBg"], isCurrency: [1, "isCurrency"], suffix: [1, "suffix"], valueClass: [1, "valueClass"], subtext: [1, "subtext"] }, decls: 9, vars: 7, consts: [[1, "metric-card"], [1, "metric-icon"], [1, "bi"], [1, "metric-body"], [1, "metric-label"], [1, "metric-value", 3, "class"], [1, "metric-subtext"], [1, "metric-value"]], template: function MetricCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "i", 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 3)(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(6, MetricCardComponent_Conditional_6_Template, 3, 5, "p", 5)(7, MetricCardComponent_Conditional_7_Template, 2, 4, "p", 5);
    \u0275\u0275conditionalCreate(8, MetricCardComponent_Conditional_8_Template, 2, 1, "p", 6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx.iconBg());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx.icon());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.label());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isCurrency() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.subtext() ? 8 : -1);
  }
}, dependencies: [AedCurrencyPipe], styles: ["\n\n.metric-card[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  border-radius: var(--card-radius);\n  padding: 1.25rem;\n  border: var(--border);\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.125rem;\n}\n.metric-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin: 0 0 0.375rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.2;\n}\n.metric-value.positive[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.metric-value.negative[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.metric-value.warning[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.metric-subtext[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0.25rem 0 0;\n}\n/*# sourceMappingURL=metric-card.component.css.map */"], changeDetection: 0 });
var MetricCardComponent = _MetricCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetricCardComponent, [{
    type: Component,
    args: [{ selector: "app-metric-card", standalone: true, imports: [AedCurrencyPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="metric-card">
      <div class="metric-icon" [style.background]="iconBg()">
        <i class="bi" [class]="icon()"></i>
      </div>
      <div class="metric-body">
        <p class="metric-label">{{ label() }}</p>
        @if (isCurrency()) {
          <p class="metric-value" [class]="valueClass()">{{ value() | aedCurrency }}</p>
        } @else {
          <p class="metric-value" [class]="valueClass()">{{ value() }}{{ suffix() }}</p>
        }
        @if (subtext()) {
          <p class="metric-subtext">{{ subtext() }}</p>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;1ccf52ca70b390a652222809630b1e7414d8699384b2428637864b86abec1a6f;C:/Users/jyothisha/project-2026/fin-track-ui/src/app/features/dashboard/widgets/metric-card/metric-card.component.ts */\n.metric-card {\n  background: #F8F9FA;\n  border-radius: var(--card-radius);\n  padding: 1.25rem;\n  border: var(--border);\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.metric-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.125rem;\n}\n.metric-body {\n  flex: 1;\n  min-width: 0;\n}\n.metric-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n  margin: 0 0 0.375rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.metric-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n  line-height: 1.2;\n}\n.metric-value.positive {\n  color: var(--primary);\n}\n.metric-value.negative {\n  color: var(--danger);\n}\n.metric-value.warning {\n  color: var(--warning);\n}\n.metric-subtext {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0.25rem 0 0;\n}\n/*# sourceMappingURL=metric-card.component.css.map */\n"] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true }] }], value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], iconBg: [{ type: Input, args: [{ isSignal: true, alias: "iconBg", required: false }] }], isCurrency: [{ type: Input, args: [{ isSignal: true, alias: "isCurrency", required: false }] }], suffix: [{ type: Input, args: [{ isSignal: true, alias: "suffix", required: false }] }], valueClass: [{ type: Input, args: [{ isSignal: true, alias: "valueClass", required: false }] }], subtext: [{ type: Input, args: [{ isSignal: true, alias: "subtext", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetricCardComponent, { className: "MetricCardComponent", filePath: "src/app/features/dashboard/widgets/metric-card/metric-card.component.ts", lineNumber: 79 });
})();

// src/app/features/dashboard/widgets/spending-donut/spending-donut.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function SpendingDonutComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "span", 8);
    \u0275\u0275elementStart(2, "span", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "aedCurrency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", item_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, item_r1.amount));
  }
}
var CATEGORY_COLORS = {
  housing: "#1D9E75",
  food: "#EF9F27",
  transport: "#4A90E2",
  utilities: "#9B59B6",
  leisure: "#E24B4A",
  other: "#95A5A6"
};
var _SpendingDonutComponent = class _SpendingDonutComponent {
  constructor() {
    this.txService = inject(TransactionService);
    this.legendItems = computed(() => this.txService.categoryExpenses().filter((c) => c.amount > 0).sort((a, b) => b.amount - a.amount).map((c) => ({
      label: c.category,
      amount: c.amount,
      color: CATEGORY_COLORS[c.category] ?? "#95A5A6"
    })), ...ngDevMode ? [{ debugName: "legendItems" }] : []);
    this.chartData = computed(() => {
      const items = this.legendItems();
      return {
        labels: items.map((i) => i.label.charAt(0).toUpperCase() + i.label.slice(1)),
        datasets: [{
          data: items.map((i) => i.amount),
          backgroundColor: items.map((i) => i.color),
          borderWidth: 2,
          borderColor: "#fff",
          hoverOffset: 4
        }]
      };
    }, ...ngDevMode ? [{ debugName: "chartData" }] : []);
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      cutout: "68%",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => ` AED ${ctx.parsed.toLocaleString()}`
          }
        }
      }
    };
  }
};
_SpendingDonutComponent.\u0275fac = function SpendingDonutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SpendingDonutComponent)();
};
_SpendingDonutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpendingDonutComponent, selectors: [["app-spending-donut"]], decls: 11, vars: 3, consts: [[1, "widget-card"], [1, "widget-header"], [1, "widget-title"], [1, "widget-badge"], [1, "chart-wrap"], ["baseChart", "", 3, "data", "type", "options"], [1, "legend"], [1, "legend-item"], [1, "legend-dot"], [1, "legend-label"], [1, "legend-value"]], template: function SpendingDonutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Spending by Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "April 2026");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275element(7, "canvas", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275repeaterCreate(9, SpendingDonutComponent_For_10_Template, 7, 6, "div", 7, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx.chartData())("type", "doughnut")("options", ctx.chartOptions);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.legendItems());
  }
}, dependencies: [BaseChartDirective, AedCurrencyPipe], styles: ["\n\n.widget-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  padding: 1.25rem;\n  height: 100%;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.widget-title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.widget-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  background: #F3F4F6;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto 1rem;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.legend-label[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--text-secondary);\n  text-transform: capitalize;\n}\n.legend-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=spending-donut.component.css.map */"], changeDetection: 0 });
var SpendingDonutComponent = _SpendingDonutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpendingDonutComponent, [{
    type: Component,
    args: [{ selector: "app-spending-donut", standalone: true, imports: [BaseChartDirective, AedCurrencyPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="widget-card">
      <div class="widget-header">
        <h3 class="widget-title">Spending by Category</h3>
        <span class="widget-badge">April 2026</span>
      </div>
      <div class="chart-wrap">
        <canvas baseChart
          [data]="chartData()"
          [type]="'doughnut'"
          [options]="chartOptions">
        </canvas>
      </div>
      <div class="legend">
        @for (item of legendItems(); track item.label) {
          <div class="legend-item">
            <span class="legend-dot" [style.background]="item.color"></span>
            <span class="legend-label">{{ item.label }}</span>
            <span class="legend-value">{{ item.amount | aedCurrency }}</span>
          </div>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;8fd3f6aad52f0b8fc71af52e83d2a0652cb34e14e12f893fdca6a12a9102fa2f;C:/Users/jyothisha/project-2026/fin-track-ui/src/app/features/dashboard/widgets/spending-donut/spending-donut.component.ts */\n.widget-card {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  padding: 1.25rem;\n  height: 100%;\n}\n.widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.widget-title {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.widget-badge {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  background: #F3F4F6;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n}\n.chart-wrap {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto 1rem;\n}\n.legend {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n}\n.legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.legend-label {\n  flex: 1;\n  color: var(--text-secondary);\n  text-transform: capitalize;\n}\n.legend-value {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n/*# sourceMappingURL=spending-donut.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpendingDonutComponent, { className: "SpendingDonutComponent", filePath: "src/app/features/dashboard/widgets/spending-donut/spending-donut.component.ts", lineNumber: 113 });
})();

// src/app/features/dashboard/widgets/monthly-trend/monthly-trend.component.ts
var _MonthlyTrendComponent = class _MonthlyTrendComponent {
  constructor() {
    this.reportService = inject(ReportService);
    this.chartData = computed(() => {
      const reports = this.reportService.monthlyReports();
      return {
        labels: reports.map((r) => r.label),
        datasets: [
          {
            label: "Income",
            data: reports.map((r) => r.income),
            borderColor: "#1D9E75",
            backgroundColor: "rgba(29,158,117,0.08)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#1D9E75",
            pointRadius: 4
          },
          {
            label: "Expenses",
            data: reports.map((r) => r.expenses),
            borderColor: "#E24B4A",
            backgroundColor: "rgba(226,75,74,0.08)",
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#E24B4A",
            pointRadius: 4
          }
        ]
      };
    }, ...ngDevMode ? [{ debugName: "chartData" }] : []);
    this.chartOptions = {
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
          callbacks: {
            label: (ctx) => ` AED ${ctx.parsed.y.toLocaleString()}`
          }
        }
      }
    };
  }
};
_MonthlyTrendComponent.\u0275fac = function MonthlyTrendComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MonthlyTrendComponent)();
};
_MonthlyTrendComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MonthlyTrendComponent, selectors: [["app-monthly-trend"]], decls: 8, vars: 3, consts: [[1, "widget-card"], [1, "widget-header"], [1, "widget-title"], [1, "widget-badge"], [1, "chart-wrap"], ["baseChart", "", 3, "data", "type", "options"]], template: function MonthlyTrendComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Monthly Trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "Last 6 months");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275element(7, "canvas", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx.chartData())("type", "line")("options", ctx.chartOptions);
  }
}, dependencies: [BaseChartDirective], styles: ["\n\n.widget-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  padding: 1.25rem;\n  height: 100%;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.widget-title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.widget-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  background: #F3F4F6;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n}\n/*# sourceMappingURL=monthly-trend.component.css.map */"], changeDetection: 0 });
var MonthlyTrendComponent = _MonthlyTrendComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthlyTrendComponent, [{
    type: Component,
    args: [{ selector: "app-monthly-trend", standalone: true, imports: [BaseChartDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: `
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
  `, styles: ["/* angular:styles/component:css;6bb60d88d48e0222680f8b983a15be4822b126cbc3bf758fbaca914d346dfafe;C:/Users/jyothisha/project-2026/fin-track-ui/src/app/features/dashboard/widgets/monthly-trend/monthly-trend.component.ts */\n.widget-card {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  padding: 1.25rem;\n  height: 100%;\n}\n.widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.widget-title {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.widget-badge {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  background: #F3F4F6;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n}\n.chart-wrap {\n  position: relative;\n  height: 220px;\n}\n/*# sourceMappingURL=monthly-trend.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MonthlyTrendComponent, { className: "MonthlyTrendComponent", filePath: "src/app/features/dashboard/widgets/monthly-trend/monthly-trend.component.ts", lineNumber: 62 });
})();

// src/app/features/dashboard/widgets/budget-progress/budget-progress.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function BudgetProgressComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.budgetSvc.overBudgetCount(), " over limit");
  }
}
function BudgetProgressComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275domElement(2, "div", 7);
    \u0275\u0275domElementStart(3, "span", 8);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "div", 10);
    \u0275\u0275domElement(8, "div", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 12)(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "aedCurrency");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 14);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "aedCurrency");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const budget_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.budgetSvc.getUsageColor(budget_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(budget_r2.category);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.budgetSvc.getUsageColor(budget_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.budgetSvc.getUsagePercent(budget_r2), "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.clamp(ctx_r0.budgetSvc.getUsagePercent(budget_r2)), "%")("background", ctx_r0.budgetSvc.getUsageColor(budget_r2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 12, budget_r2.spent));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/ ", \u0275\u0275pipeBind1(15, 14, budget_r2.limit));
  }
}
var _BudgetProgressComponent = class _BudgetProgressComponent {
  constructor() {
    this.budgetSvc = inject(BudgetService);
  }
  clamp(pct) {
    return Math.min(pct, 100);
  }
};
_BudgetProgressComponent.\u0275fac = function BudgetProgressComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BudgetProgressComponent)();
};
_BudgetProgressComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BudgetProgressComponent, selectors: [["app-budget-progress"]], decls: 8, vars: 1, consts: [[1, "widget-card"], [1, "widget-header"], [1, "widget-title"], [1, "badge-over"], [1, "budgets-list"], [1, "budget-row"], [1, "budget-info"], [1, "budget-dot"], [1, "budget-name"], [1, "budget-pct"], [1, "progress-track"], [1, "progress-fill"], [1, "budget-amounts"], [1, "spent"], [1, "limit"]], template: function BudgetProgressComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Budget Overview");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(4, BudgetProgressComponent_Conditional_4_Template, 2, 1, "span", 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 4);
    \u0275\u0275repeaterCreate(6, BudgetProgressComponent_For_7_Template, 16, 16, "div", 5, _forTrack02);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.budgetSvc.overBudgetCount() > 0 ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.budgetSvc.budgets());
  }
}, dependencies: [AedCurrencyPipe], styles: ["\n\n.widget-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  padding: 1.25rem;\n  height: 100%;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.widget-title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.badge-over[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: var(--danger);\n  font-size: 0.75rem;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.budgets-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.budget-row[_ngcontent-%COMP%] {\n}\n.budget-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.375rem;\n}\n.budget-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.budget-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.budget-pct[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #F3F4F6;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 0.3rem;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n}\n.budget-amounts[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.budget-amounts[_ngcontent-%COMP%]   .spent[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.budget-amounts[_ngcontent-%COMP%]   .limit[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=budget-progress.component.css.map */"], changeDetection: 0 });
var BudgetProgressComponent = _BudgetProgressComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetProgressComponent, [{
    type: Component,
    args: [{ selector: "app-budget-progress", standalone: true, imports: [AedCurrencyPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="widget-card">
      <div class="widget-header">
        <h3 class="widget-title">Budget Overview</h3>
        @if (budgetSvc.overBudgetCount() > 0) {
          <span class="badge-over">{{ budgetSvc.overBudgetCount() }} over limit</span>
        }
      </div>

      <div class="budgets-list">
        @for (budget of budgetSvc.budgets(); track budget.id) {
          <div class="budget-row">
            <div class="budget-info">
              <div class="budget-dot" [style.background]="budgetSvc.getUsageColor(budget)"></div>
              <span class="budget-name">{{ budget.category }}</span>
              <span class="budget-pct" [style.color]="budgetSvc.getUsageColor(budget)">
                {{ budgetSvc.getUsagePercent(budget) }}%
              </span>
            </div>
            <div class="progress-track">
              <div
                class="progress-fill"
                [style.width.%]="clamp(budgetSvc.getUsagePercent(budget))"
                [style.background]="budgetSvc.getUsageColor(budget)">
              </div>
            </div>
            <div class="budget-amounts">
              <span class="spent">{{ budget.spent | aedCurrency }}</span>
              <span class="limit">/ {{ budget.limit | aedCurrency }}</span>
            </div>
          </div>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;b2c0e9a43cf9145d22e98a8c62dc1933ce3b0b17a3eb40698cc6011acfee2aa9;C:/Users/jyothisha/project-2026/fin-track-ui/src/app/features/dashboard/widgets/budget-progress/budget-progress.component.ts */\n.widget-card {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  padding: 1.25rem;\n  height: 100%;\n}\n.widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.widget-title {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.badge-over {\n  background: #fef2f2;\n  color: var(--danger);\n  font-size: 0.75rem;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-weight: 500;\n}\n.budgets-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.budget-row {\n}\n.budget-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.375rem;\n}\n.budget-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.budget-name {\n  flex: 1;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.budget-pct {\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.progress-track {\n  height: 6px;\n  background: #F3F4F6;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 0.3rem;\n}\n.progress-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n}\n.budget-amounts {\n  font-size: 0.75rem;\n}\n.budget-amounts .spent {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.budget-amounts .limit {\n  color: var(--text-muted);\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=budget-progress.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BudgetProgressComponent, { className: "BudgetProgressComponent", filePath: "src/app/features/dashboard/widgets/budget-progress/budget-progress.component.ts", lineNumber: 132 });
})();

// src/app/features/dashboard/widgets/recent-transactions/recent-transactions.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function RecentTransactionsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "p", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11)(7, "span", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "aedCurrency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const txn_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getCategoryColor(txn_r1.category) + "20")("color", ctx_r1.getCategoryColor(txn_r1.category));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getCategoryIcon(txn_r1.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(txn_r1.category);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r1.category);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.formatDate(txn_r1.date), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("income", txn_r1.type === "income")("expense", txn_r1.type === "expense");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", txn_r1.type === "income" ? "+" : "-", "", \u0275\u0275pipeBind1(12, 17, txn_r1.amount), " ");
  }
}
var _RecentTransactionsComponent = class _RecentTransactionsComponent {
  constructor() {
    this.txService = inject(TransactionService);
  }
  getCategoryColor(cat) {
    const colors = {
      housing: "#1D9E75",
      food: "#EF9F27",
      transport: "#4A90E2",
      utilities: "#9B59B6",
      leisure: "#E24B4A",
      income: "#1D9E75",
      other: "#95A5A6"
    };
    return colors[cat] ?? "#95A5A6";
  }
  getCategoryIcon(cat) {
    const icons = {
      housing: "bi-house-fill",
      food: "bi-cup-hot-fill",
      transport: "bi-car-front-fill",
      utilities: "bi-lightning-fill",
      leisure: "bi-controller",
      income: "bi-cash-stack",
      other: "bi-three-dots"
    };
    return icons[cat] ?? "bi-three-dots";
  }
  formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  }
};
_RecentTransactionsComponent.\u0275fac = function RecentTransactionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecentTransactionsComponent)();
};
_RecentTransactionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentTransactionsComponent, selectors: [["app-recent-transactions"]], decls: 10, vars: 0, consts: [[1, "widget-card"], [1, "widget-header"], [1, "widget-title"], ["routerLink", "/transactions", 1, "view-all"], [1, "bi", "bi-arrow-right"], [1, "txn-list"], [1, "txn-row"], [1, "txn-avatar"], [1, "bi"], [1, "txn-info"], [1, "txn-title"], [1, "txn-meta"], [1, "badge-category"], [1, "txn-amount"]], template: function RecentTransactionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Recent Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 3);
    \u0275\u0275text(5, "View all ");
    \u0275\u0275element(6, "i", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275repeaterCreate(8, RecentTransactionsComponent_For_9_Template, 13, 19, "div", 6, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.txService.recentTransactions());
  }
}, dependencies: [RouterLink, AedCurrencyPipe], styles: ["\n\n.widget-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  padding: 1.25rem;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.widget-title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.view-all[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--primary);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.view-all[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.txn-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.txn-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.75rem 0;\n  border-bottom: var(--border);\n}\n.txn-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.txn-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.txn-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.txn-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin: 0 0 0.2rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.txn-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.txn-amount[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.txn-amount.income[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.txn-amount.expense[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n/*# sourceMappingURL=recent-transactions.component.css.map */"], changeDetection: 0 });
var RecentTransactionsComponent = _RecentTransactionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentTransactionsComponent, [{
    type: Component,
    args: [{ selector: "app-recent-transactions", standalone: true, imports: [RouterLink, AedCurrencyPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="widget-card">
      <div class="widget-header">
        <h3 class="widget-title">Recent Transactions</h3>
        <a routerLink="/transactions" class="view-all">View all <i class="bi bi-arrow-right"></i></a>
      </div>

      <div class="txn-list">
        @for (txn of txService.recentTransactions(); track txn.id) {
          <div class="txn-row">
            <div class="txn-avatar" [style.background]="getCategoryColor(txn.category) + '20'" [style.color]="getCategoryColor(txn.category)">
              <i class="bi" [class]="getCategoryIcon(txn.category)"></i>
            </div>
            <div class="txn-info">
              <p class="txn-title">{{ txn.title }}</p>
              <p class="txn-meta">
                <span class="badge-category" [class]="txn.category">{{ txn.category }}</span>
                &middot; {{ formatDate(txn.date) }}
              </p>
            </div>
            <div class="txn-amount" [class.income]="txn.type === 'income'" [class.expense]="txn.type === 'expense'">
              {{ txn.type === 'income' ? '+' : '-' }}{{ txn.amount | aedCurrency }}
            </div>
          </div>
        }
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;c0aec8b68cb63885b04dd71a6cd4f58b595b237c2a6bd471f5541a8ce423c026;C:/Users/jyothisha/project-2026/fin-track-ui/src/app/features/dashboard/widgets/recent-transactions/recent-transactions.component.ts */\n.widget-card {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  padding: 1.25rem;\n}\n.widget-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.widget-title {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0;\n}\n.view-all {\n  font-size: 0.8125rem;\n  color: var(--primary);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.view-all i {\n  font-size: 0.75rem;\n}\n.txn-list {\n  display: flex;\n  flex-direction: column;\n}\n.txn-row {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.75rem 0;\n  border-bottom: var(--border);\n}\n.txn-row:last-child {\n  border-bottom: none;\n}\n.txn-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.txn-info {\n  flex: 1;\n  min-width: 0;\n}\n.txn-title {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin: 0 0 0.2rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.txn-meta {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.txn-amount {\n  font-size: 0.9rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.txn-amount.income {\n  color: var(--primary);\n}\n.txn-amount.expense {\n  color: var(--danger);\n}\n/*# sourceMappingURL=recent-transactions.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentTransactionsComponent, { className: "RecentTransactionsComponent", filePath: "src/app/features/dashboard/widgets/recent-transactions/recent-transactions.component.ts", lineNumber: 138 });
})();

// src/app/features/dashboard/dashboard.component.ts
var _DashboardComponent = class _DashboardComponent {
  constructor() {
    this.txService = inject(TransactionService);
    this.currentMonth = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { month: "long", year: "numeric" });
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)();
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 20, vars: 8, consts: [[1, "page-layout"], [1, "main-content"], [1, "page-header"], [1, "subtitle"], [1, "metrics-grid"], ["label", "Total Income", "icon", "bi-arrow-down-circle-fill", "iconBg", "rgba(29,158,117,0.12)", "valueClass", "positive", 3, "value"], ["label", "Total Expenses", "icon", "bi-arrow-up-circle-fill", "iconBg", "rgba(226,75,74,0.12)", "valueClass", "negative", 3, "value"], ["label", "Net Balance", "icon", "bi-wallet2", "iconBg", "rgba(74,144,226,0.12)", 3, "value", "valueClass"], ["label", "Savings Rate", "icon", "bi-piggy-bank-fill", "iconBg", "rgba(239,159,39,0.12)", "suffix", "%", "subtext", "of monthly income", 3, "value", "isCurrency", "valueClass"], [1, "charts-grid"], [1, "trend-row"], [1, "recent-row"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-sidebar");
    \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "h1");
    \u0275\u0275text(5, "Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275element(9, "app-metric-card", 5)(10, "app-metric-card", 6)(11, "app-metric-card", 7)(12, "app-metric-card", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275element(14, "app-spending-donut")(15, "app-budget-progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275element(17, "app-monthly-trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 11);
    \u0275\u0275element(19, "app-recent-transactions");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx.currentMonth, " \xB7 AED");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx.txService.totalIncome());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.txService.totalExpenses());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.txService.netBalance())("valueClass", ctx.txService.netBalance() >= 0 ? "positive" : "negative");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.txService.savingsRate())("isCurrency", false)("valueClass", ctx.txService.savingsRate() >= 20 ? "positive" : ctx.txService.savingsRate() >= 10 ? "warning" : "negative");
  }
}, dependencies: [
  SidebarComponent,
  MetricCardComponent,
  SpendingDonutComponent,
  MonthlyTrendComponent,
  BudgetProgressComponent,
  RecentTransactionsComponent
], styles: ["\n\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.trend-row[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.recent-row[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n@media (max-width: 1200px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .charts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding-bottom: 5rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"], changeDetection: 0 });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      SidebarComponent,
      MetricCardComponent,
      SpendingDonutComponent,
      MonthlyTrendComponent,
      BudgetProgressComponent,
      RecentTransactionsComponent
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-layout">
  <app-sidebar></app-sidebar>

  <main class="main-content">
    <div class="page-header">
      <h1>Dashboard</h1>
      <p class="subtitle">{{ currentMonth }} &middot; AED</p>
    </div>

    <!-- Metric Cards -->
    <div class="metrics-grid">
      <app-metric-card
        label="Total Income"
        [value]="txService.totalIncome()"
        icon="bi-arrow-down-circle-fill"
        iconBg="rgba(29,158,117,0.12)"
        valueClass="positive">
      </app-metric-card>

      <app-metric-card
        label="Total Expenses"
        [value]="txService.totalExpenses()"
        icon="bi-arrow-up-circle-fill"
        iconBg="rgba(226,75,74,0.12)"
        valueClass="negative">
      </app-metric-card>

      <app-metric-card
        label="Net Balance"
        [value]="txService.netBalance()"
        icon="bi-wallet2"
        iconBg="rgba(74,144,226,0.12)"
        [valueClass]="txService.netBalance() >= 0 ? 'positive' : 'negative'">
      </app-metric-card>

      <app-metric-card
        label="Savings Rate"
        [value]="txService.savingsRate()"
        icon="bi-piggy-bank-fill"
        iconBg="rgba(239,159,39,0.12)"
        [isCurrency]="false"
        suffix="%"
        [valueClass]="txService.savingsRate() >= 20 ? 'positive' : txService.savingsRate() >= 10 ? 'warning' : 'negative'"
        subtext="of monthly income">
      </app-metric-card>
    </div>

    <!-- Charts Row -->
    <div class="charts-grid">
      <app-spending-donut></app-spending-donut>
      <app-budget-progress></app-budget-progress>
    </div>

    <!-- Monthly Trend -->
    <div class="trend-row">
      <app-monthly-trend></app-monthly-trend>
    </div>

    <!-- Recent Transactions -->
    <div class="recent-row">
      <app-recent-transactions></app-recent-transactions>
    </div>
  </main>
</div>
`, styles: ["/* src/app/features/dashboard/dashboard.component.scss */\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.charts-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.trend-row {\n  margin-bottom: 1.25rem;\n}\n.recent-row {\n  margin-bottom: 1rem;\n}\n@media (max-width: 1200px) {\n  .metrics-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .metrics-grid {\n    grid-template-columns: 1fr;\n  }\n  .charts-grid {\n    grid-template-columns: 1fr;\n  }\n  .main-content {\n    padding-bottom: 5rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 25 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-RPJ3WTII.js.map
