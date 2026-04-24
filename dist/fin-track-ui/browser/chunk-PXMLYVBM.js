import {
  ConfirmDialogService,
  ToastService
} from "./chunk-MYLQFWMS.js";
import {
  TransactionService
} from "./chunk-QZJFQXAI.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
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
  Input,
  Output,
  __async,
  computed,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WWJDTDQY.js";

// src/app/features/transactions/transaction-form/transaction-form.component.ts
function TransactionFormComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Title is required. ");
  }
}
function TransactionFormComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " At least 2 characters. ");
  }
}
function TransactionFormComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, TransactionFormComponent_Conditional_15_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, TransactionFormComponent_Conditional_15_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.titleCtrl.errors == null ? null : ctx_r0.titleCtrl.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.titleCtrl.errors == null ? null : ctx_r0.titleCtrl.errors["minlength"]) ? 2 : -1);
  }
}
function TransactionFormComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Amount is required. ");
  }
}
function TransactionFormComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Amount must be greater than 0. ");
  }
}
function TransactionFormComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, TransactionFormComponent_Conditional_23_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, TransactionFormComponent_Conditional_23_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.amountCtrl.errors == null ? null : ctx_r0.amountCtrl.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.amountCtrl.errors == null ? null : ctx_r0.amountCtrl.errors["min"]) ? 2 : -1);
  }
}
function TransactionFormComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Date is required.");
    \u0275\u0275elementEnd();
  }
}
var _TransactionFormComponent = class _TransactionFormComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.editTransaction = input(null, ...ngDevMode ? [{ debugName: "editTransaction" }] : []);
    this.closed = output();
    this.saved = output();
    this.form = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      type: ["expense", Validators.required],
      category: ["food", Validators.required],
      date: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      note: [""]
    });
  }
  get titleCtrl() {
    return this.form.controls.title;
  }
  get amountCtrl() {
    return this.form.controls.amount;
  }
  get typeCtrl() {
    return this.form.controls.type;
  }
  get categoryCtrl() {
    return this.form.controls.category;
  }
  get dateCtrl() {
    return this.form.controls.date;
  }
  get isEditing() {
    return !!this.editTransaction();
  }
  ngOnChanges() {
    const txn = this.editTransaction();
    if (txn) {
      this.form.patchValue({
        title: txn.title,
        amount: txn.amount,
        type: txn.type,
        category: txn.category,
        date: txn.date,
        note: txn.note ?? ""
      });
    } else {
      this.form.reset({
        title: "",
        amount: null,
        type: "expense",
        category: "food",
        date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        note: ""
      });
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    this.saved.emit({
      title: v.title,
      amount: v.amount,
      type: v.type,
      category: v.category,
      date: v.date,
      note: v.note || void 0
    });
  }
  onClose() {
    this.closed.emit();
  }
};
_TransactionFormComponent.\u0275fac = function TransactionFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TransactionFormComponent)();
};
_TransactionFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionFormComponent, selectors: [["app-transaction-form"]], inputs: { editTransaction: [1, "editTransaction"] }, outputs: { closed: "closed", saved: "saved" }, features: [\u0275\u0275NgOnChangesFeature], decls: 75, vars: 16, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-card", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-close", 3, "click"], [1, "bi", "bi-x-lg"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "mb-3", "flex-grow-1"], [1, "form-label"], [1, "required"], ["type", "text", "formControlName", "title", "placeholder", "e.g. Groceries at Carrefour", 1, "form-control"], [1, "invalid-feedback", "d-block"], [1, "form-row-2"], [1, "mb-3"], ["type", "number", "formControlName", "amount", "placeholder", "0.00", "min", "0.01", 1, "form-control"], ["type", "date", "formControlName", "date", 1, "form-control"], [1, "type-toggle"], ["type", "button", 1, "type-btn", 3, "click"], [1, "bi", "bi-arrow-up-circle", "me-1"], [1, "bi", "bi-arrow-down-circle", "me-1"], ["formControlName", "category", 1, "form-select"], ["value", "housing"], ["value", "food"], ["value", "transport"], ["value", "utilities"], ["value", "leisure"], ["value", "income"], ["value", "other"], [1, "mb-4"], ["formControlName", "note", "rows", "2", "placeholder", "Add a note...", 1, "form-control"], [1, "modal-footer-row"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "submit", 1, "btn-primary-brand"], [1, "bi", "bi-check-lg", "me-1"]], template: function TransactionFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function TransactionFormComponent_Template_div_click_0_listener() {
      return ctx.onClose();
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function TransactionFormComponent_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "h4", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function TransactionFormComponent_Template_button_click_5_listener() {
      return ctx.onClose();
    });
    \u0275\u0275element(6, "i", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 6);
    \u0275\u0275listener("ngSubmit", function TransactionFormComponent_Template_form_ngSubmit_7_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "label", 9);
    \u0275\u0275text(11, "Title ");
    \u0275\u0275elementStart(12, "span", 10);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275conditionalCreate(15, TransactionFormComponent_Conditional_15_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "label", 9);
    \u0275\u0275text(19, "Amount (AED) ");
    \u0275\u0275elementStart(20, "span", 10);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "input", 15);
    \u0275\u0275conditionalCreate(23, TransactionFormComponent_Conditional_23_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14)(25, "label", 9);
    \u0275\u0275text(26, "Date ");
    \u0275\u0275elementStart(27, "span", 10);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "input", 16);
    \u0275\u0275conditionalCreate(30, TransactionFormComponent_Conditional_30_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 13)(32, "div", 14)(33, "label", 9);
    \u0275\u0275text(34, "Type ");
    \u0275\u0275elementStart(35, "span", 10);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 17)(38, "button", 18);
    \u0275\u0275listener("click", function TransactionFormComponent_Template_button_click_38_listener() {
      return ctx.form.patchValue({ type: "expense" });
    });
    \u0275\u0275element(39, "i", 19);
    \u0275\u0275text(40, " Expense ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 18);
    \u0275\u0275listener("click", function TransactionFormComponent_Template_button_click_41_listener() {
      return ctx.form.patchValue({ type: "income" });
    });
    \u0275\u0275element(42, "i", 20);
    \u0275\u0275text(43, " Income ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 14)(45, "label", 9);
    \u0275\u0275text(46, "Category ");
    \u0275\u0275elementStart(47, "span", 10);
    \u0275\u0275text(48, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "select", 21)(50, "option", 22);
    \u0275\u0275text(51, "Housing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 23);
    \u0275\u0275text(53, "Food");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 24);
    \u0275\u0275text(55, "Transport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 25);
    \u0275\u0275text(57, "Utilities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 26);
    \u0275\u0275text(59, "Leisure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "option", 27);
    \u0275\u0275text(61, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 28);
    \u0275\u0275text(63, "Other");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "div", 29)(65, "label", 9);
    \u0275\u0275text(66, "Note (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "textarea", 30);
    \u0275\u0275text(68, "        ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 31)(70, "button", 32);
    \u0275\u0275listener("click", function TransactionFormComponent_Template_button_click_70_listener() {
      return ctx.onClose();
    });
    \u0275\u0275text(71, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 33);
    \u0275\u0275element(73, "i", 34);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.isEditing ? "Edit Transaction" : "Add Transaction");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx.titleCtrl.invalid && ctx.titleCtrl.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.titleCtrl.invalid && ctx.titleCtrl.touched ? 15 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", ctx.amountCtrl.invalid && ctx.amountCtrl.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.amountCtrl.invalid && ctx.amountCtrl.touched ? 23 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.dateCtrl.invalid && ctx.dateCtrl.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.dateCtrl.invalid && ctx.dateCtrl.touched ? 30 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("active-expense", ctx.typeCtrl.value === "expense");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active-income", ctx.typeCtrl.value === "income");
    \u0275\u0275advance(33);
    \u0275\u0275textInterpolate1(" ", ctx.isEditing ? "Save Changes" : "Add Transaction", " ");
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ["\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.25rem;\n  font-size: 1rem;\n  border-radius: 6px;\n  display: flex;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: #F3F4F6;\n  color: var(--text-primary);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.375rem;\n  display: block;\n}\n.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.type-toggle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n}\n.type-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.625rem;\n  border: var(--border);\n  border-radius: 8px;\n  background: #F8F9FA;\n  color: var(--text-secondary);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.type-btn.active-expense[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: var(--danger);\n  border-color: rgba(226, 75, 74, 0.3);\n}\n.type-btn.active-income[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  border-color: rgba(29, 158, 117, 0.3);\n}\n.modal-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.modal-footer-row[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=transaction-form.component.css.map */"], changeDetection: 0 });
var TransactionFormComponent = _TransactionFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionFormComponent, [{
    type: Component,
    args: [{ selector: "app-transaction-form", standalone: true, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="modal-overlay" (click)="onClose()">
  <div class="modal-card" (click)="$event.stopPropagation()">
    <div class="modal-header">
      <h4 class="modal-title">{{ isEditing ? 'Edit Transaction' : 'Add Transaction' }}</h4>
      <button class="modal-close" (click)="onClose()">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
      <div class="form-row">
        <div class="mb-3 flex-grow-1">
          <label class="form-label">Title <span class="required">*</span></label>
          <input
            type="text"
            class="form-control"
            [class.is-invalid]="titleCtrl.invalid && titleCtrl.touched"
            formControlName="title"
            placeholder="e.g. Groceries at Carrefour"
          />
          @if (titleCtrl.invalid && titleCtrl.touched) {
            <div class="invalid-feedback d-block">
              @if (titleCtrl.errors?.['required']) { Title is required. }
              @if (titleCtrl.errors?.['minlength']) { At least 2 characters. }
            </div>
          }
        </div>
      </div>

      <div class="form-row-2">
        <div class="mb-3">
          <label class="form-label">Amount (AED) <span class="required">*</span></label>
          <input
            type="number"
            class="form-control"
            [class.is-invalid]="amountCtrl.invalid && amountCtrl.touched"
            formControlName="amount"
            placeholder="0.00"
            min="0.01"
          />
          @if (amountCtrl.invalid && amountCtrl.touched) {
            <div class="invalid-feedback d-block">
              @if (amountCtrl.errors?.['required']) { Amount is required. }
              @if (amountCtrl.errors?.['min']) { Amount must be greater than 0. }
            </div>
          }
        </div>

        <div class="mb-3">
          <label class="form-label">Date <span class="required">*</span></label>
          <input
            type="date"
            class="form-control"
            [class.is-invalid]="dateCtrl.invalid && dateCtrl.touched"
            formControlName="date"
          />
          @if (dateCtrl.invalid && dateCtrl.touched) {
            <div class="invalid-feedback d-block">Date is required.</div>
          }
        </div>
      </div>

      <div class="form-row-2">
        <div class="mb-3">
          <label class="form-label">Type <span class="required">*</span></label>
          <div class="type-toggle">
            <button
              type="button"
              class="type-btn"
              [class.active-expense]="typeCtrl.value === 'expense'"
              (click)="form.patchValue({ type: 'expense' })">
              <i class="bi bi-arrow-up-circle me-1"></i> Expense
            </button>
            <button
              type="button"
              class="type-btn"
              [class.active-income]="typeCtrl.value === 'income'"
              (click)="form.patchValue({ type: 'income' })">
              <i class="bi bi-arrow-down-circle me-1"></i> Income
            </button>
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Category <span class="required">*</span></label>
          <select class="form-select" formControlName="category">
            <option value="housing">Housing</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="leisure">Leisure</option>
            <option value="income">Income</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label">Note (optional)</label>
        <textarea
          class="form-control"
          formControlName="note"
          rows="2"
          placeholder="Add a note...">
        </textarea>
      </div>

      <div class="modal-footer-row">
        <button type="button" class="btn btn-light" (click)="onClose()">Cancel</button>
        <button type="submit" class="btn-primary-brand">
          <i class="bi bi-check-lg me-1"></i>
          {{ isEditing ? 'Save Changes' : 'Add Transaction' }}
        </button>
      </div>
    </form>
  </div>
</div>
`, styles: ["/* src/app/features/transactions/transaction-form/transaction-form.component.scss */\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.modal-header .modal-title {\n  font-size: 1.0625rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-header .modal-close {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.25rem;\n  font-size: 1rem;\n  border-radius: 6px;\n  display: flex;\n}\n.modal-header .modal-close:hover {\n  background: #F3F4F6;\n  color: var(--text-primary);\n}\n.form-row {\n  display: flex;\n  gap: 0.75rem;\n}\n.flex-grow-1 {\n  flex: 1;\n}\n.form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.form-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.375rem;\n  display: block;\n}\n.form-label .required {\n  color: var(--danger);\n}\n.type-toggle {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n}\n.type-btn {\n  padding: 0.5rem 0.625rem;\n  border: var(--border);\n  border-radius: 8px;\n  background: #F8F9FA;\n  color: var(--text-secondary);\n  font-size: 0.8125rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.type-btn.active-expense {\n  background: #fef2f2;\n  color: var(--danger);\n  border-color: rgba(226, 75, 74, 0.3);\n}\n.type-btn.active-income {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  border-color: rgba(29, 158, 117, 0.3);\n}\n.modal-footer-row {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.modal-footer-row .btn-light {\n  padding: 0.5rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=transaction-form.component.css.map */\n"] }]
  }], null, { editTransaction: [{ type: Input, args: [{ isSignal: true, alias: "editTransaction", required: false }] }], closed: [{ type: Output, args: ["closed"] }], saved: [{ type: Output, args: ["saved"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionFormComponent, { className: "TransactionFormComponent", filePath: "src/app/features/transactions/transaction-form/transaction-form.component.ts", lineNumber: 13 });
})();

// src/app/features/transactions/transaction-list/transaction-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function TransactionListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "No transactions found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 4);
    \u0275\u0275listener("click", function TransactionListComponent_Conditional_42_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAdd());
    });
    \u0275\u0275text(5, "Add your first transaction");
    \u0275\u0275elementEnd()();
  }
}
function TransactionListComponent_Conditional_43_For_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const txn_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r4.note);
  }
}
function TransactionListComponent_Conditional_43_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TransactionListComponent_Conditional_43_For_18_Conditional_6_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 34);
    \u0275\u0275element(12, "i", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 36);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "aedCurrency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 28)(18, "div", 37)(19, "button", 38);
    \u0275\u0275listener("click", function TransactionListComponent_Conditional_43_For_18_Template_button_click_19_listener() {
      const txn_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(txn_r4));
    });
    \u0275\u0275element(20, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 40);
    \u0275\u0275listener("click", function TransactionListComponent_Conditional_43_For_18_Template_button_click_21_listener() {
      const txn_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDelete(txn_r4));
    });
    \u0275\u0275element(22, "i", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const txn_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(txn_r4.date));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(txn_r4.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(txn_r4.note ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(txn_r4.category);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(txn_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(txn_r4.type);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-arrow-down", txn_r4.type === "income")("bi-arrow-up", txn_r4.type === "expense");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", txn_r4.type, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-income", txn_r4.type === "income")("text-expense", txn_r4.type === "expense");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", txn_r4.type === "income" ? "+" : "-", "", \u0275\u0275pipeBind1(16, 19, txn_r4.amount), " ");
  }
}
function TransactionListComponent_Conditional_43_Conditional_19_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function TransactionListComponent_Conditional_43_Conditional_19_For_7_Template_button_click_0_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setPage(page_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r7 === ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r7, " ");
  }
}
function TransactionListComponent_Conditional_43_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "button", 44);
    \u0275\u0275listener("click", function TransactionListComponent_Conditional_43_Conditional_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275element(5, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, TransactionListComponent_Conditional_43_Conditional_19_For_7_Template, 2, 3, "button", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "button", 44);
    \u0275\u0275listener("click", function TransactionListComponent_Conditional_43_Conditional_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275element(9, "i", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Page ", ctx_r1.currentPage(), " of ", ctx_r1.totalPages(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pages());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
  }
}
function TransactionListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 26)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 27);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 28);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, TransactionListComponent_Conditional_43_For_18_Template, 23, 21, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(19, TransactionListComponent_Conditional_43_Conditional_19_Template, 10, 4, "div", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.paginated());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalPages() > 1 ? 19 : -1);
  }
}
function TransactionListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-transaction-form", 49);
    \u0275\u0275listener("closed", function TransactionListComponent_Conditional_44_Template_app_transaction_form_closed_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    })("saved", function TransactionListComponent_Conditional_44_Template_app_transaction_form_saved_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaved($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("editTransaction", ctx_r1.editingTxn());
  }
}
var PAGE_SIZE = 10;
var _TransactionListComponent = class _TransactionListComponent {
  constructor() {
    this.txService = inject(TransactionService);
    this.confirmSvc = inject(ConfirmDialogService);
    this.toastSvc = inject(ToastService);
    this.showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
    this.editingTxn = signal(null, ...ngDevMode ? [{ debugName: "editingTxn" }] : []);
    this.currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
    this.searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
    this.categoryFilter = signal("all", ...ngDevMode ? [{ debugName: "categoryFilter" }] : []);
    this.typeFilter = signal("all", ...ngDevMode ? [{ debugName: "typeFilter" }] : []);
    this.filtered = computed(() => {
      const all = this.txService.transactions();
      const search = this.searchTerm().toLowerCase();
      const cat = this.categoryFilter();
      const type = this.typeFilter();
      return all.filter((t) => {
        const matchSearch = !search || t.title.toLowerCase().includes(search);
        const matchCat = cat === "all" || t.category === cat;
        const matchType = type === "all" || t.type === type;
        return matchSearch && matchCat && matchType;
      }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, ...ngDevMode ? [{ debugName: "filtered" }] : []);
    this.totalPages = computed(() => Math.ceil(this.filtered().length / PAGE_SIZE) || 1, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
    this.paginated = computed(() => {
      const page = this.currentPage();
      const start = (page - 1) * PAGE_SIZE;
      return this.filtered().slice(start, start + PAGE_SIZE);
    }, ...ngDevMode ? [{ debugName: "paginated" }] : []);
    this.pages = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1), ...ngDevMode ? [{ debugName: "pages" }] : []);
  }
  openAdd() {
    this.editingTxn.set(null);
    this.showForm.set(true);
  }
  openEdit(txn) {
    this.editingTxn.set(txn);
    this.showForm.set(true);
  }
  closeForm() {
    this.showForm.set(false);
    this.editingTxn.set(null);
  }
  onSaved(data) {
    const editing = this.editingTxn();
    if (editing) {
      this.txService.updateTransaction(editing.id, data);
      this.toastSvc.success("Transaction updated.");
    } else {
      this.txService.addTransaction(data);
      this.toastSvc.success("Transaction added.");
      this.currentPage.set(1);
    }
    this.closeForm();
  }
  onDelete(txn) {
    return __async(this, null, function* () {
      const ok = yield this.confirmSvc.confirm(`Delete "${txn.title}"? This action cannot be undone.`, "Delete Transaction");
      if (ok) {
        this.txService.deleteTransaction(txn.id);
        this.toastSvc.success("Transaction deleted.");
        if (this.currentPage() > this.totalPages()) {
          this.currentPage.set(this.totalPages());
        }
      }
    });
  }
  setPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }
  onFilterChange() {
    this.currentPage.set(1);
    this.txService.setFilter({
      search: this.searchTerm(),
      category: this.categoryFilter(),
      type: this.typeFilter()
    });
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
};
_TransactionListComponent.\u0275fac = function TransactionListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TransactionListComponent)();
};
_TransactionListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionListComponent, selectors: [["app-transaction-list"]], decls: 45, vars: 6, consts: [[1, "page-layout"], [1, "main-content"], [1, "page-header", "d-flex", "align-items-center", "justify-content-between"], [1, "subtitle"], [1, "btn-primary-brand", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], [1, "filters-bar", "card", "mb-3"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "search-wrap"], [1, "bi", "bi-search", "search-icon"], ["type", "text", "placeholder", "Search transactions...", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel"], [1, "form-select", "filter-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "housing"], ["value", "food"], ["value", "transport"], ["value", "utilities"], ["value", "leisure"], ["value", "income"], ["value", "other"], ["value", "expense"], [1, "card", "table-card"], [1, "empty-state"], [3, "editTransaction"], [1, "bi", "bi-inbox", "empty-icon"], [1, "table-responsive"], [1, "table", "table-custom"], [1, "text-end"], [1, "text-center"], [1, "pagination-row"], [1, "date-cell"], [1, "txn-title"], [1, "txn-note"], [1, "badge-category"], [1, "type-badge"], [1, "bi"], [1, "text-end", "amount-cell"], [1, "action-btns"], ["title", "Edit", 1, "btn-action", "edit", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Delete", 1, "btn-action", "delete", 3, "click"], [1, "bi", "bi-trash"], [1, "page-info"], [1, "page-btns"], [1, "page-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-left"], [1, "page-btn", 3, "active"], [1, "bi", "bi-chevron-right"], [1, "page-btn", 3, "click"], [3, "closed", "saved", "editTransaction"]], template: function TransactionListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-sidebar");
    \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "div")(5, "h1");
    \u0275\u0275text(6, "Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 4);
    \u0275\u0275listener("click", function TransactionListComponent_Template_button_click_9_listener() {
      return ctx.openAdd();
    });
    \u0275\u0275element(10, "i", 5);
    \u0275\u0275text(11, " Add Transaction ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "div", 8);
    \u0275\u0275element(15, "i", 9);
    \u0275\u0275elementStart(16, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionListComponent_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function TransactionListComponent_Template_input_ngModelChange_16_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionListComponent_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.categoryFilter, $event) || (ctx.categoryFilter = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function TransactionListComponent_Template_select_ngModelChange_17_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementStart(18, "option", 12);
    \u0275\u0275text(19, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 13);
    \u0275\u0275text(21, "Housing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 14);
    \u0275\u0275text(23, "Food");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 15);
    \u0275\u0275text(25, "Transport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 16);
    \u0275\u0275text(27, "Utilities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 17);
    \u0275\u0275text(29, "Leisure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 18);
    \u0275\u0275text(31, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 19);
    \u0275\u0275text(33, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function TransactionListComponent_Template_select_ngModelChange_34_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.typeFilter, $event) || (ctx.typeFilter = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function TransactionListComponent_Template_select_ngModelChange_34_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementStart(35, "option", 12);
    \u0275\u0275text(36, "All Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option", 18);
    \u0275\u0275text(38, "Income");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option", 20);
    \u0275\u0275text(40, "Expense");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 21);
    \u0275\u0275conditionalCreate(42, TransactionListComponent_Conditional_42_Template, 6, 0, "div", 22)(43, TransactionListComponent_Conditional_43_Template, 20, 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(44, TransactionListComponent_Conditional_44_Template, 1, 1, "app-transaction-form", 23);
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx.filtered().length, " transactions found");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.categoryFilter);
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx.typeFilter);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.filtered().length === 0 ? 42 : 43);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.showForm() ? 44 : -1);
  }
}, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SidebarComponent, TransactionFormComponent, AedCurrencyPipe], styles: ["\n\n.filters-bar[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.25rem;\n}\n.filter-select[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 150px;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.table-custom[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.table-custom[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #F8F9FA;\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 0.75rem 1rem;\n  border-bottom: var(--border);\n  white-space: nowrap;\n}\n.table-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: var(--border);\n}\n.table-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.table-custom[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #FAFAFA;\n}\n.table-custom[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  vertical-align: middle;\n}\n.date-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--text-secondary);\n  font-size: 0.8125rem;\n}\n.txn-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.txn-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 0.1rem;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n.type-badge.income[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n}\n.type-badge.expense[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: var(--danger);\n}\n.amount-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  justify-content: center;\n}\n.btn-action[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8125rem;\n  transition: all 0.15s;\n}\n.btn-action.edit[_ngcontent-%COMP%] {\n  background: #EBF5FF;\n  color: #4A90E2;\n}\n.btn-action.edit[_ngcontent-%COMP%]:hover {\n  background: #D1E8FF;\n}\n.btn-action.delete[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: var(--danger);\n}\n.btn-action.delete[_ngcontent-%COMP%]:hover {\n  background: #FDE8E8;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.pagination-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1rem;\n  border-top: var(--border);\n  background: #FAFAFA;\n}\n.page-info[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-secondary);\n}\n.page-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: var(--border);\n  border-radius: 6px;\n  background: #fff;\n  color: var(--text-secondary);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  border-color: var(--primary);\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  border-color: var(--primary);\n  font-weight: 600;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=transaction-list.component.css.map */"], changeDetection: 0 });
var TransactionListComponent = _TransactionListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionListComponent, [{
    type: Component,
    args: [{ selector: "app-transaction-list", standalone: true, imports: [FormsModule, SidebarComponent, AedCurrencyPipe, TransactionFormComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="page-layout">
  <app-sidebar></app-sidebar>

  <main class="main-content">
    <div class="page-header d-flex align-items-center justify-content-between">
      <div>
        <h1>Transactions</h1>
        <p class="subtitle">{{ filtered().length }} transactions found</p>
      </div>
      <button class="btn-primary-brand" (click)="openAdd()">
        <i class="bi bi-plus-lg me-1"></i> Add Transaction
      </button>
    </div>

    <!-- Filters -->
    <div class="filters-bar card mb-3">
      <div class="d-flex gap-2 flex-wrap">
        <div class="search-wrap">
          <i class="bi bi-search search-icon"></i>
          <input
            type="text"
            class="form-control search-input"
            placeholder="Search transactions..."
            [(ngModel)]="searchTerm"
            (ngModelChange)="onFilterChange()"
          />
        </div>

        <select
          class="form-select filter-select"
          [(ngModel)]="categoryFilter"
          (ngModelChange)="onFilterChange()">
          <option value="all">All Categories</option>
          <option value="housing">Housing</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="utilities">Utilities</option>
          <option value="leisure">Leisure</option>
          <option value="income">Income</option>
          <option value="other">Other</option>
        </select>

        <select
          class="form-select filter-select"
          [(ngModel)]="typeFilter"
          (ngModelChange)="onFilterChange()">
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
    </div>

    <!-- Table -->
    <div class="card table-card">
      @if (filtered().length === 0) {
        <div class="empty-state">
          <i class="bi bi-inbox empty-icon"></i>
          <p>No transactions found</p>
          <button class="btn-primary-brand" (click)="openAdd()">Add your first transaction</button>
        </div>
      } @else {
        <div class="table-responsive">
          <table class="table table-custom">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Category</th>
                <th>Type</th>
                <th class="text-end">Amount</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (txn of paginated(); track txn.id) {
                <tr>
                  <td class="date-cell">{{ formatDate(txn.date) }}</td>
                  <td>
                    <div class="txn-title">{{ txn.title }}</div>
                    @if (txn.note) {
                      <div class="txn-note">{{ txn.note }}</div>
                    }
                  </td>
                  <td>
                    <span class="badge-category" [class]="txn.category">{{ txn.category }}</span>
                  </td>
                  <td>
                    <span class="type-badge" [class]="txn.type">
                      <i class="bi" [class.bi-arrow-down]="txn.type === 'income'" [class.bi-arrow-up]="txn.type === 'expense'"></i>
                      {{ txn.type }}
                    </span>
                  </td>
                  <td class="text-end amount-cell" [class.text-income]="txn.type === 'income'" [class.text-expense]="txn.type === 'expense'">
                    {{ txn.type === 'income' ? '+' : '-' }}{{ txn.amount | aedCurrency }}
                  </td>
                  <td class="text-center">
                    <div class="action-btns">
                      <button class="btn-action edit" (click)="openEdit(txn)" title="Edit">
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button class="btn-action delete" (click)="onDelete(txn)" title="Delete">
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        @if (totalPages() > 1) {
          <div class="pagination-row">
            <span class="page-info">
              Page {{ currentPage() }} of {{ totalPages() }}
            </span>
            <div class="page-btns">
              <button class="page-btn" (click)="setPage(currentPage() - 1)" [disabled]="currentPage() === 1">
                <i class="bi bi-chevron-left"></i>
              </button>
              @for (page of pages(); track page) {
                <button
                  class="page-btn"
                  [class.active]="page === currentPage()"
                  (click)="setPage(page)">
                  {{ page }}
                </button>
              }
              <button class="page-btn" (click)="setPage(currentPage() + 1)" [disabled]="currentPage() === totalPages()">
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        }
      }
    </div>
  </main>
</div>

@if (showForm()) {
  <app-transaction-form
    [editTransaction]="editingTxn()"
    (closed)="closeForm()"
    (saved)="onSaved($event)">
  </app-transaction-form>
}
`, styles: ["/* src/app/features/transactions/transaction-list/transaction-list.component.scss */\n.filters-bar {\n  padding: 0.875rem 1rem;\n}\n.search-wrap {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-wrap .search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.search-wrap .search-input {\n  padding-left: 2.25rem;\n}\n.filter-select {\n  width: auto;\n  min-width: 150px;\n}\n.table-card {\n  padding: 0;\n  overflow: hidden;\n}\n.table-custom {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.table-custom thead tr th {\n  background: #F8F9FA;\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 0.75rem 1rem;\n  border-bottom: var(--border);\n  white-space: nowrap;\n}\n.table-custom tbody tr {\n  border-bottom: var(--border);\n}\n.table-custom tbody tr:last-child {\n  border-bottom: none;\n}\n.table-custom tbody tr:hover {\n  background: #FAFAFA;\n}\n.table-custom td {\n  padding: 0.875rem 1rem;\n  vertical-align: middle;\n}\n.date-cell {\n  white-space: nowrap;\n  color: var(--text-secondary);\n  font-size: 0.8125rem;\n}\n.txn-title {\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.txn-note {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 0.1rem;\n}\n.type-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n.type-badge.income {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n}\n.type-badge.expense {\n  background: #fef2f2;\n  color: var(--danger);\n}\n.amount-cell {\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.action-btns {\n  display: flex;\n  gap: 0.375rem;\n  justify-content: center;\n}\n.btn-action {\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8125rem;\n  transition: all 0.15s;\n}\n.btn-action.edit {\n  background: #EBF5FF;\n  color: #4A90E2;\n}\n.btn-action.edit:hover {\n  background: #D1E8FF;\n}\n.btn-action.delete {\n  background: #FEF2F2;\n  color: var(--danger);\n}\n.btn-action.delete:hover {\n  background: #FDE8E8;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: var(--text-muted);\n}\n.empty-state .empty-icon {\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n.empty-state p {\n  margin-bottom: 1rem;\n}\n.pagination-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1rem;\n  border-top: var(--border);\n  background: #FAFAFA;\n}\n.page-info {\n  font-size: 0.8125rem;\n  color: var(--text-secondary);\n}\n.page-btns {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn {\n  width: 32px;\n  height: 32px;\n  border: var(--border);\n  border-radius: 6px;\n  background: #fff;\n  color: var(--text-secondary);\n  font-size: 0.8125rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.page-btn:hover:not(:disabled) {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  border-color: var(--primary);\n}\n.page-btn.active {\n  background: var(--primary);\n  color: #fff;\n  border-color: var(--primary);\n  font-weight: 600;\n}\n.page-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=transaction-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionListComponent, { className: "TransactionListComponent", filePath: "src/app/features/transactions/transaction-list/transaction-list.component.ts", lineNumber: 21 });
})();
export {
  TransactionListComponent
};
//# sourceMappingURL=chunk-PXMLYVBM.js.map
