import {
  BudgetService
} from "./chunk-BAJVFQVM.js";
import {
  ConfirmDialogService,
  ToastService
} from "./chunk-MYLQFWMS.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HEGPPGSL.js";
import {
  AedCurrencyPipe,
  SidebarComponent
} from "./chunk-F4TIWHC7.js";
import "./chunk-ONVH3BSU.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  __async,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-WWJDTDQY.js";

// src/app/features/budgets/budget-form/budget-form.component.ts
function BudgetFormComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Category name is required. ");
  }
}
function BudgetFormComponent_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " At least 2 characters. ");
  }
}
function BudgetFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, BudgetFormComponent_Conditional_14_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, BudgetFormComponent_Conditional_14_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.categoryCtrl.errors == null ? null : ctx_r0.categoryCtrl.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.categoryCtrl.errors == null ? null : ctx_r0.categoryCtrl.errors["minlength"]) ? 2 : -1);
  }
}
function BudgetFormComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Limit is required. ");
  }
}
function BudgetFormComponent_Conditional_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Limit must be at least AED 1. ");
  }
}
function BudgetFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, BudgetFormComponent_Conditional_21_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, BudgetFormComponent_Conditional_21_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.limitCtrl.errors == null ? null : ctx_r0.limitCtrl.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.limitCtrl.errors == null ? null : ctx_r0.limitCtrl.errors["min"]) ? 2 : -1);
  }
}
function BudgetFormComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function BudgetFormComponent_For_27_Template_button_click_0_listener() {
      const color_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectColor(color_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", color_r3);
    \u0275\u0275classProp("selected", ctx_r0.colorCtrl.value === color_r3);
  }
}
var _BudgetFormComponent = class _BudgetFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.editBudget = input(null, ...ngDevMode ? [{ debugName: "editBudget" }] : []);
    this.closed = output();
    this.saved = output();
    this.colorOptions = [
      "#1D9E75",
      "#EF9F27",
      "#4A90E2",
      "#9B59B6",
      "#E24B4A",
      "#2ECC71",
      "#E67E22",
      "#3498DB",
      "#8E44AD",
      "#E74C3C"
    ];
    this.form = this.fb.group({
      category: ["", [Validators.required, Validators.minLength(2)]],
      limit: [null, [Validators.required, Validators.min(1)]],
      color: ["#1D9E75", Validators.required]
    });
  }
  get categoryCtrl() {
    return this.form.controls.category;
  }
  get limitCtrl() {
    return this.form.controls.limit;
  }
  get colorCtrl() {
    return this.form.controls.color;
  }
  get isEditing() {
    return !!this.editBudget();
  }
  ngOnChanges() {
    const b = this.editBudget();
    if (b) {
      this.form.patchValue({ category: b.category, limit: b.limit, color: b.color });
    } else {
      this.form.reset({ category: "", limit: null, color: "#1D9E75" });
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    this.saved.emit({ category: v.category, limit: v.limit, color: v.color });
  }
  selectColor(c) {
    this.form.patchValue({ color: c });
  }
  onClose() {
    this.closed.emit();
  }
};
_BudgetFormComponent.\u0275fac = function BudgetFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BudgetFormComponent)();
};
_BudgetFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BudgetFormComponent, selectors: [["app-budget-form"]], inputs: { editBudget: [1, "editBudget"] }, outputs: { closed: "closed", saved: "saved" }, features: [\u0275\u0275NgOnChangesFeature], decls: 34, vars: 9, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "bi", "bi-x-lg"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], [1, "required"], ["type", "text", "formControlName", "category", "placeholder", "e.g. Dining Out", 1, "form-control"], [1, "invalid-feedback", "d-block"], ["type", "number", "formControlName", "limit", "placeholder", "0", "min", "1", 1, "form-control"], [1, "mb-4"], [1, "color-picker"], ["type", "button", 1, "color-dot", 3, "background", "selected"], [1, "modal-footer-row"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "submit", 1, "btn-primary-brand"], [1, "bi", "bi-check-lg", "me-1"], ["type", "button", 1, "color-dot", 3, "click"]], template: function BudgetFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function BudgetFormComponent_Template_div_click_0_listener() {
      return ctx.onClose();
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function BudgetFormComponent_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "h4", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function BudgetFormComponent_Template_button_click_5_listener() {
      return ctx.onClose();
    });
    \u0275\u0275element(6, "i", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function BudgetFormComponent_Template_form_ngSubmit_7_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(8, "div", 7)(9, "label", 8);
    \u0275\u0275text(10, "Category Name ");
    \u0275\u0275elementStart(11, "span", 9);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "input", 10);
    \u0275\u0275conditionalCreate(14, BudgetFormComponent_Conditional_14_Template, 3, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 7)(16, "label", 8);
    \u0275\u0275text(17, "Monthly Limit (AED) ");
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 12);
    \u0275\u0275conditionalCreate(21, BudgetFormComponent_Conditional_21_Template, 3, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 13)(23, "label", 8);
    \u0275\u0275text(24, "Color");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 14);
    \u0275\u0275repeaterCreate(26, BudgetFormComponent_For_27_Template, 1, 4, "button", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 16)(29, "button", 17);
    \u0275\u0275listener("click", function BudgetFormComponent_Template_button_click_29_listener() {
      return ctx.onClose();
    });
    \u0275\u0275text(30, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 18);
    \u0275\u0275element(32, "i", 19);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.isEditing ? "Edit Budget" : "Add Budget");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.categoryCtrl.invalid && ctx.categoryCtrl.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.categoryCtrl.invalid && ctx.categoryCtrl.touched ? 14 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.limitCtrl.invalid && ctx.limitCtrl.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.limitCtrl.invalid && ctx.limitCtrl.touched ? 21 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.colorOptions);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Save Changes" : "Add Budget", " ");
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.25rem;\n  font-size: 1rem;\n  border-radius: 6px;\n  display: flex;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: #F3F4F6;\n  color: var(--text-primary);\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.375rem;\n  display: block;\n}\n.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.color-picker[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.color-dot[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0;\n}\n.color-dot[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.color-dot.selected[_ngcontent-%COMP%] {\n  border-color: #fff;\n  box-shadow: 0 0 0 3px currentColor;\n  transform: scale(1.1);\n}\n.modal-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.modal-footer-row[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=budget-form.component.css.map */"], changeDetection: 0 });
var BudgetFormComponent = _BudgetFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetFormComponent, [{
    type: Component,
    args: [{ selector: "app-budget-form", standalone: true, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="modal-overlay" (click)="onClose()">
  <div class="modal-card" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h4 class="modal-title">{{ isEditing ? 'Edit Budget' : 'Add Budget' }}</h4>
      <button class="modal-close" (click)="onClose()">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
      <div class="mb-3">
        <label class="form-label">Category Name <span class="required">*</span></label>
        <input
          type="text"
          class="form-control"
          [class.is-invalid]="categoryCtrl.invalid && categoryCtrl.touched"
          formControlName="category"
          placeholder="e.g. Dining Out"
        />
        @if (categoryCtrl.invalid && categoryCtrl.touched) {
          <div class="invalid-feedback d-block">
            @if (categoryCtrl.errors?.['required']) { Category name is required. }
            @if (categoryCtrl.errors?.['minlength']) { At least 2 characters. }
          </div>
        }
      </div>

      <div class="mb-3">
        <label class="form-label">Monthly Limit (AED) <span class="required">*</span></label>
        <input
          type="number"
          class="form-control"
          [class.is-invalid]="limitCtrl.invalid && limitCtrl.touched"
          formControlName="limit"
          placeholder="0"
          min="1"
        />
        @if (limitCtrl.invalid && limitCtrl.touched) {
          <div class="invalid-feedback d-block">
            @if (limitCtrl.errors?.['required']) { Limit is required. }
            @if (limitCtrl.errors?.['min']) { Limit must be at least AED 1. }
          </div>
        }
      </div>

      <div class="mb-4">
        <label class="form-label">Color</label>
        <div class="color-picker">
          @for (color of colorOptions; track color) {
            <button
              type="button"
              class="color-dot"
              [style.background]="color"
              [class.selected]="colorCtrl.value === color"
              (click)="selectColor(color)">
            </button>
          }
        </div>
      </div>

      <div class="modal-footer-row">
        <button type="button" class="btn btn-light" (click)="onClose()">Cancel</button>
        <button type="submit" class="btn-primary-brand">
          <i class="bi bi-check-lg me-1"></i>
          {{ isEditing ? 'Save Changes' : 'Add Budget' }}
        </button>
      </div>
    </form>
  </div>
</div>
`, styles: ["/* src/app/features/budgets/budget-form/budget-form.component.scss */\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.modal-header .modal-title {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-header .modal-close {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.25rem;\n  font-size: 1rem;\n  border-radius: 6px;\n  display: flex;\n}\n.modal-header .modal-close:hover {\n  background: #F3F4F6;\n  color: var(--text-primary);\n}\n.form-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.375rem;\n  display: block;\n}\n.form-label .required {\n  color: var(--danger);\n}\n.color-picker {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.color-dot {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.15s;\n  padding: 0;\n}\n.color-dot:hover {\n  transform: scale(1.15);\n}\n.color-dot.selected {\n  border-color: #fff;\n  box-shadow: 0 0 0 3px currentColor;\n  transform: scale(1.1);\n}\n.modal-footer-row {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.modal-footer-row .btn-light {\n  padding: 0.5rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=budget-form.component.css.map */\n"] }]
  }], null, { editBudget: [{ type: Input, args: [{ isSignal: true, alias: "editBudget", required: false }] }], closed: [{ type: Output, args: ["closed"] }], saved: [{ type: Output, args: ["saved"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BudgetFormComponent, { className: "BudgetFormComponent", filePath: "src/app/features/budgets/budget-form/budget-form.component.ts", lineNumber: 13 });
})();

// src/app/features/budgets/budget-list/budget-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BudgetListComponent_For_38_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "aedCurrency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const budget_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Over by ", \u0275\u0275pipeBind1(3, 1, budget_r2.spent - budget_r2.limit), " ");
  }
}
function BudgetListComponent_For_38_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "aedCurrency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const budget_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, budget_r2.limit - budget_r2.spent), " remaining ");
  }
}
function BudgetListComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275element(3, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "h4", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 23)(10, "button", 24);
    \u0275\u0275listener("click", function BudgetListComponent_For_38_Template_button_click_10_listener() {
      const budget_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEdit(budget_r2));
    });
    \u0275\u0275element(11, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 26);
    \u0275\u0275listener("click", function BudgetListComponent_For_38_Template_button_click_12_listener() {
      const budget_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDelete(budget_r2));
    });
    \u0275\u0275element(13, "i", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 28)(15, "span", 29);
    \u0275\u0275text(16, "Spent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 30);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 31);
    \u0275\u0275element(20, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 33)(22, "div")(23, "div", 34);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "aedCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 35);
    \u0275\u0275text(27, "spent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 36)(29, "div", 34);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "aedCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 35);
    \u0275\u0275text(33, "limit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(34, BudgetListComponent_For_38_Conditional_34_Template, 4, 3, "div", 37)(35, BudgetListComponent_For_38_Conditional_35_Template, 4, 3, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const budget_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("border-" + ctx_r2.getStatusClass(budget_r2));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", budget_r2.color + "20")("color", budget_r2.color);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(budget_r2.category);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatusClass(budget_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getStatusLabel(budget_r2));
    \u0275\u0275advance(9);
    \u0275\u0275styleProp("color", ctx_r2.budgetSvc.getUsageColor(budget_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.budgetSvc.getUsagePercent(budget_r2), "% ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.clamp(ctx_r2.budgetSvc.getUsagePercent(budget_r2)), "%")("background", ctx_r2.budgetSvc.getUsageColor(budget_r2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 20, budget_r2.spent));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 22, budget_r2.limit));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(budget_r2.spent > budget_r2.limit ? 34 : 35);
  }
}
function BudgetListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "p", 42);
    \u0275\u0275text(3, "No budgets set up yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function BudgetListComponent_Conditional_39_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAdd());
    });
    \u0275\u0275text(5, "Create your first budget");
    \u0275\u0275elementEnd()();
  }
}
function BudgetListComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-budget-form", 43);
    \u0275\u0275listener("closed", function BudgetListComponent_Conditional_40_Template_app_budget_form_closed_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeForm());
    })("saved", function BudgetListComponent_Conditional_40_Template_app_budget_form_saved_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSaved($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("editBudget", ctx_r2.editingBudget());
  }
}
var _BudgetListComponent = class _BudgetListComponent {
  constructor() {
    this.budgetSvc = inject(BudgetService);
    this.confirmSvc = inject(ConfirmDialogService);
    this.toastSvc = inject(ToastService);
    this.showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
    this.editingBudget = signal(null, ...ngDevMode ? [{ debugName: "editingBudget" }] : []);
  }
  openAdd() {
    this.editingBudget.set(null);
    this.showForm.set(true);
  }
  openEdit(b) {
    this.editingBudget.set(b);
    this.showForm.set(true);
  }
  closeForm() {
    this.showForm.set(false);
    this.editingBudget.set(null);
  }
  onSaved(data) {
    const editing = this.editingBudget();
    if (editing) {
      this.budgetSvc.updateBudget(editing.id, { category: data.category, limit: data.limit, color: data.color });
      this.toastSvc.success("Budget updated.");
    } else {
      this.budgetSvc.addBudget(data);
      this.toastSvc.success("Budget added.");
    }
    this.closeForm();
  }
  onDelete(b) {
    return __async(this, null, function* () {
      const ok = yield this.confirmSvc.confirm(`Delete the "${b.category}" budget? This action cannot be undone.`, "Delete Budget");
      if (ok) {
        this.budgetSvc.deleteBudget(b.id);
        this.toastSvc.success("Budget deleted.");
      }
    });
  }
  getStatusLabel(b) {
    const pct = this.budgetSvc.getUsagePercent(b);
    if (pct > 100)
      return "Over budget";
    if (pct >= 90)
      return "Critical";
    if (pct >= 70)
      return "Warning";
    return "On track";
  }
  getStatusClass(b) {
    const pct = this.budgetSvc.getUsagePercent(b);
    if (pct > 100)
      return "over";
    if (pct >= 90)
      return "critical";
    if (pct >= 70)
      return "warning";
    return "good";
  }
  clamp(pct) {
    return Math.min(pct, 100);
  }
};
_BudgetListComponent.\u0275fac = function BudgetListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BudgetListComponent)();
};
_BudgetListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BudgetListComponent, selectors: [["app-budget-list"]], decls: 41, vars: 14, consts: [[1, "page-layout"], [1, "main-content"], [1, "page-header", "d-flex", "align-items-center", "justify-content-between"], [1, "subtitle"], [1, "btn-primary-brand", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "summary-banner", "card", "mb-3"], [1, "summary-stat"], [1, "s-label"], [1, "s-value"], [1, "summary-divider"], [1, "s-value", "positive"], [1, "budgets-grid"], [1, "budget-card", 3, "class"], [1, "empty-state", "card", "text-center", "py-5"], [3, "editBudget"], [1, "budget-card"], [1, "budget-card-header"], [1, "budget-icon"], [1, "bi", "bi-tag-fill"], [1, "budget-info"], [1, "budget-name"], [1, "budget-status"], [1, "budget-actions"], ["title", "Edit", 1, "btn-action", "edit", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete", 1, "btn-action", "delete", 3, "click"], [1, "bi", "bi-trash"], [1, "budget-amounts"], [1, "spent-label"], [1, "pct-label"], [1, "progress-track"], [1, "progress-fill"], [1, "budget-numbers"], [1, "amount-val"], [1, "amount-sub"], [1, "text-end"], [1, "over-alert"], [1, "remaining-info"], [1, "bi", "bi-exclamation-triangle-fill", "me-1"], [1, "bi", "bi-check-circle", "me-1"], [1, "bi", "bi-pie-chart", "empty-icon", "d-block", "mb-3"], [1, "mb-3"], [3, "closed", "saved", "editBudget"]], template: function BudgetListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-sidebar");
    \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "div")(5, "h1");
    \u0275\u0275text(6, "Budgets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 4);
    \u0275\u0275listener("click", function BudgetListComponent_Template_button_click_9_listener() {
      return ctx.openAdd();
    });
    \u0275\u0275element(10, "i", 5);
    \u0275\u0275text(11, " Add Budget ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "span", 8);
    \u0275\u0275text(15, "Total Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 9);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 10);
    \u0275\u0275elementStart(19, "div", 7)(20, "span", 8);
    \u0275\u0275text(21, "Total Spent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 9);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "div", 10);
    \u0275\u0275elementStart(25, "div", 7)(26, "span", 8);
    \u0275\u0275text(27, "Remaining");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 11);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "div", 10);
    \u0275\u0275elementStart(31, "div", 7)(32, "span", 8);
    \u0275\u0275text(33, "Over Limit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 9);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 12);
    \u0275\u0275repeaterCreate(37, BudgetListComponent_For_38_Template, 36, 24, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(39, BudgetListComponent_Conditional_39_Template, 6, 0, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(40, BudgetListComponent_Conditional_40_Template, 1, 1, "app-budget-form", 15);
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate3(" ", ctx.budgetSvc.budgets().length, " categories \xB7 AED ", ctx.budgetSvc.totalSpent().toLocaleString(), " spent of AED ", ctx.budgetSvc.totalBudget().toLocaleString(), " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("AED ", ctx.budgetSvc.totalBudget().toLocaleString());
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx.budgetSvc.totalSpent() > ctx.budgetSvc.totalBudget() ? "var(--danger)" : "var(--text-primary)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" AED ", ctx.budgetSvc.totalSpent().toLocaleString(), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" AED ", (ctx.budgetSvc.totalBudget() - ctx.budgetSvc.totalSpent()).toLocaleString(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx.budgetSvc.overBudgetCount() > 0 ? "var(--danger)" : "var(--primary)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx.budgetSvc.overBudgetCount(), " categor", ctx.budgetSvc.overBudgetCount() === 1 ? "y" : "ies", " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.budgetSvc.budgets());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.budgetSvc.budgets().length === 0 ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showForm() ? 40 : -1);
  }
}, dependencies: [SidebarComponent, BudgetFormComponent, AedCurrencyPipe], styles: ["\n\n.summary-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.summary-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  flex: 1;\n  min-width: 120px;\n}\n.s-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.s-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.s-value.positive[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.summary-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 36px;\n  background: rgba(0, 0, 0, 0.08);\n  flex-shrink: 0;\n}\n.budgets-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n}\n.budget-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  border-left: 4px solid #1D9E75;\n  padding: 1.25rem;\n  transition: box-shadow 0.2s;\n}\n.budget-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n}\n.budget-card.border-good[_ngcontent-%COMP%] {\n  border-left-color: #1D9E75;\n}\n.budget-card.border-warning[_ngcontent-%COMP%] {\n  border-left-color: #EF9F27;\n}\n.budget-card.border-critical[_ngcontent-%COMP%] {\n  border-left-color: #E24B4A;\n}\n.budget-card.border-over[_ngcontent-%COMP%] {\n  border-left-color: #E24B4A;\n}\n.budget-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.budget-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.budget-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.budget-name[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0 0 0.2rem;\n}\n.budget-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 0.15rem 0.5rem;\n  border-radius: 20px;\n}\n.budget-status.good[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n}\n.budget-status.warning[_ngcontent-%COMP%] {\n  background: #FFF3CD;\n  color: #856404;\n}\n.budget-status.critical[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: var(--danger);\n}\n.budget-status.over[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: var(--danger);\n}\n.budget-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n}\n.btn-action[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  transition: all 0.15s;\n}\n.btn-action.edit[_ngcontent-%COMP%] {\n  background: #EBF5FF;\n  color: #4A90E2;\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: #D1E8FF;\n}\n.btn-action.delete[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: var(--danger);\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: #FDE8E8;\n}\n.budget-amounts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.375rem;\n}\n.spent-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.pct-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #F3F4F6;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 0.875rem;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.budget-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.amount-val[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.amount-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n}\n.over-alert[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--danger);\n  background: #fef2f2;\n  padding: 0.375rem 0.625rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n}\n.remaining-info[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.375rem 0.625rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n}\n.empty-state[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: var(--text-muted);\n}\n@media (max-width: 768px) {\n  .budgets-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .summary-banner[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .summary-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=budget-list.component.css.map */"], changeDetection: 0 });
var BudgetListComponent = _BudgetListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetListComponent, [{
    type: Component,
    args: [{ selector: "app-budget-list", standalone: true, imports: [SidebarComponent, AedCurrencyPipe, BudgetFormComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-layout">
  <app-sidebar></app-sidebar>

  <main class="main-content">
    <div class="page-header d-flex align-items-center justify-content-between">
      <div>
        <h1>Budgets</h1>
        <p class="subtitle">
          {{ budgetSvc.budgets().length }} categories &middot;
          AED {{ budgetSvc.totalSpent().toLocaleString() }} spent of
          AED {{ budgetSvc.totalBudget().toLocaleString() }}
        </p>
      </div>
      <button class="btn-primary-brand" (click)="openAdd()">
        <i class="bi bi-plus-lg me-1"></i> Add Budget
      </button>
    </div>

    <!-- Summary Banner -->
    <div class="summary-banner card mb-3">
      <div class="summary-stat">
        <span class="s-label">Total Budget</span>
        <span class="s-value">AED {{ budgetSvc.totalBudget().toLocaleString() }}</span>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-stat">
        <span class="s-label">Total Spent</span>
        <span class="s-value" [style.color]="budgetSvc.totalSpent() > budgetSvc.totalBudget() ? 'var(--danger)' : 'var(--text-primary)'">
          AED {{ budgetSvc.totalSpent().toLocaleString() }}
        </span>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-stat">
        <span class="s-label">Remaining</span>
        <span class="s-value positive">
          AED {{ (budgetSvc.totalBudget() - budgetSvc.totalSpent()).toLocaleString() }}
        </span>
      </div>
      <div class="summary-divider"></div>
      <div class="summary-stat">
        <span class="s-label">Over Limit</span>
        <span class="s-value" [style.color]="budgetSvc.overBudgetCount() > 0 ? 'var(--danger)' : 'var(--primary)'">
          {{ budgetSvc.overBudgetCount() }} categor{{ budgetSvc.overBudgetCount() === 1 ? 'y' : 'ies' }}
        </span>
      </div>
    </div>

    <!-- Budget Cards Grid -->
    <div class="budgets-grid">
      @for (budget of budgetSvc.budgets(); track budget.id) {
        <div class="budget-card" [class]="'border-' + getStatusClass(budget)">
          <div class="budget-card-header">
            <div class="budget-icon" [style.background]="budget.color + '20'" [style.color]="budget.color">
              <i class="bi bi-tag-fill"></i>
            </div>
            <div class="budget-info">
              <h4 class="budget-name">{{ budget.category }}</h4>
              <span class="budget-status" [class]="getStatusClass(budget)">{{ getStatusLabel(budget) }}</span>
            </div>
            <div class="budget-actions">
              <button class="btn-action edit" (click)="openEdit(budget)" title="Edit">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn-action delete" (click)="onDelete(budget)" title="Delete">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>

          <div class="budget-amounts">
            <span class="spent-label">Spent</span>
            <span class="pct-label" [style.color]="budgetSvc.getUsageColor(budget)">
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

          <div class="budget-numbers">
            <div>
              <div class="amount-val">{{ budget.spent | aedCurrency }}</div>
              <div class="amount-sub">spent</div>
            </div>
            <div class="text-end">
              <div class="amount-val">{{ budget.limit | aedCurrency }}</div>
              <div class="amount-sub">limit</div>
            </div>
          </div>

          @if (budget.spent > budget.limit) {
            <div class="over-alert">
              <i class="bi bi-exclamation-triangle-fill me-1"></i>
              Over by {{ (budget.spent - budget.limit) | aedCurrency }}
            </div>
          } @else {
            <div class="remaining-info">
              <i class="bi bi-check-circle me-1"></i>
              {{ (budget.limit - budget.spent) | aedCurrency }} remaining
            </div>
          }
        </div>
      }
    </div>

    @if (budgetSvc.budgets().length === 0) {
      <div class="empty-state card text-center py-5">
        <i class="bi bi-pie-chart empty-icon d-block mb-3"></i>
        <p class="mb-3">No budgets set up yet</p>
        <button class="btn-primary-brand" (click)="openAdd()">Create your first budget</button>
      </div>
    }
  </main>
</div>

@if (showForm()) {
  <app-budget-form
    [editBudget]="editingBudget()"
    (closed)="closeForm()"
    (saved)="onSaved($event)">
  </app-budget-form>
}
`, styles: ["/* src/app/features/budgets/budget-list/budget-list.component.scss */\n.summary-banner {\n  display: flex;\n  align-items: center;\n  padding: 1rem 1.25rem;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.summary-stat {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  flex: 1;\n  min-width: 120px;\n}\n.s-label {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.s-value {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.s-value.positive {\n  color: var(--primary);\n}\n.summary-divider {\n  width: 1px;\n  height: 36px;\n  background: rgba(0, 0, 0, 0.08);\n  flex-shrink: 0;\n}\n.budgets-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n}\n.budget-card {\n  background: #fff;\n  border-radius: var(--card-radius);\n  border: var(--border);\n  border-left: 4px solid #1D9E75;\n  padding: 1.25rem;\n  transition: box-shadow 0.2s;\n}\n.budget-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n}\n.budget-card.border-good {\n  border-left-color: #1D9E75;\n}\n.budget-card.border-warning {\n  border-left-color: #EF9F27;\n}\n.budget-card.border-critical {\n  border-left-color: #E24B4A;\n}\n.budget-card.border-over {\n  border-left-color: #E24B4A;\n}\n.budget-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.budget-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.budget-info {\n  flex: 1;\n  min-width: 0;\n}\n.budget-name {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  margin: 0 0 0.2rem;\n}\n.budget-status {\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 0.15rem 0.5rem;\n  border-radius: 20px;\n}\n.budget-status.good {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n}\n.budget-status.warning {\n  background: #FFF3CD;\n  color: #856404;\n}\n.budget-status.critical {\n  background: #FEF2F2;\n  color: var(--danger);\n}\n.budget-status.over {\n  background: #FEF2F2;\n  color: var(--danger);\n}\n.budget-actions {\n  display: flex;\n  gap: 0.375rem;\n}\n.btn-action {\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  transition: all 0.15s;\n}\n.btn-action.edit {\n  background: #EBF5FF;\n  color: #4A90E2;\n}\n.btn-action.edit:hover {\n  background: #D1E8FF;\n}\n.btn-action.delete {\n  background: #FEF2F2;\n  color: var(--danger);\n}\n.btn-action.delete:hover {\n  background: #FDE8E8;\n}\n.budget-amounts {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.375rem;\n}\n.spent-label {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.pct-label {\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.progress-track {\n  height: 8px;\n  background: #F3F4F6;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 0.875rem;\n}\n.progress-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.budget-numbers {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.amount-val {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.amount-sub {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n}\n.over-alert {\n  font-size: 0.8125rem;\n  color: var(--danger);\n  background: #fef2f2;\n  padding: 0.375rem 0.625rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n}\n.remaining-info {\n  font-size: 0.8125rem;\n  color: var(--primary);\n  background: var(--primary-light);\n  padding: 0.375rem 0.625rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n}\n.empty-state {\n  color: var(--text-secondary);\n}\n.empty-state .empty-icon {\n  font-size: 3rem;\n  color: var(--text-muted);\n}\n@media (max-width: 768px) {\n  .budgets-grid {\n    grid-template-columns: 1fr;\n  }\n  .summary-banner {\n    gap: 0.75rem;\n  }\n  .summary-divider {\n    display: none;\n  }\n}\n/*# sourceMappingURL=budget-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BudgetListComponent, { className: "BudgetListComponent", filePath: "src/app/features/budgets/budget-list/budget-list.component.ts", lineNumber: 18 });
})();
export {
  BudgetListComponent
};
//# sourceMappingURL=chunk-PVQV22EG.js.map
