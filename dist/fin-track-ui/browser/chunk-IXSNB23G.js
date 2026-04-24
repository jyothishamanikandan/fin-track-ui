import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HEGPPGSL.js";
import {
  ChangeDetectionStrategy,
  Component,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-WWJDTDQY.js";

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Full name is required. ");
  }
}
function RegisterComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Name must be at least 2 characters. ");
  }
}
function RegisterComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, RegisterComponent_Conditional_16_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, RegisterComponent_Conditional_16_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.nameCtrl.errors == null ? null : ctx_r0.nameCtrl.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.nameCtrl.errors == null ? null : ctx_r0.nameCtrl.errors["minlength"]) ? 2 : -1);
  }
}
function RegisterComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Email is required. ");
  }
}
function RegisterComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter a valid email address. ");
  }
}
function RegisterComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, RegisterComponent_Conditional_23_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, RegisterComponent_Conditional_23_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.emailCtrl.errors == null ? null : ctx_r0.emailCtrl.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.emailCtrl.errors == null ? null : ctx_r0.emailCtrl.errors["email"]) ? 2 : -1);
  }
}
function RegisterComponent_Conditional_32_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Password is required. ");
  }
}
function RegisterComponent_Conditional_32_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Password must be at least 6 characters. ");
  }
}
function RegisterComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, RegisterComponent_Conditional_32_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, RegisterComponent_Conditional_32_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.passwordCtrl.errors == null ? null : ctx_r0.passwordCtrl.errors["required"]) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.passwordCtrl.errors == null ? null : ctx_r0.passwordCtrl.errors["minlength"]) ? 2 : -1);
  }
}
function RegisterComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Please confirm your password.");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 29);
    \u0275\u0275text(1, " Creating account... ");
  }
}
function RegisterComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create Account ");
  }
}
function passwordMatchValidator(ctrl) {
  const password = ctrl.get("password")?.value;
  const confirm = ctrl.get("confirmPassword")?.value;
  return password && confirm && password !== confirm ? { passwordMismatch: true } : null;
}
var _RegisterComponent = class _RegisterComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
    this.showConfirm = signal(false, ...ngDevMode ? [{ debugName: "showConfirm" }] : []);
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    }, { validators: passwordMatchValidator });
  }
  get nameCtrl() {
    return this.form.controls.name;
  }
  get emailCtrl() {
    return this.form.controls.email;
  }
  get passwordCtrl() {
    return this.form.controls.password;
  }
  get confirmCtrl() {
    return this.form.controls.confirmPassword;
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  toggleConfirm() {
    this.showConfirm.update((v) => !v);
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      this.router.navigate(["/auth/login"]);
    }, 600);
  }
};
_RegisterComponent.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegisterComponent)();
};
_RegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 50, vars: 26, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-header"], [1, "brand-logo"], [1, "bi", "bi-bar-chart-fill"], [1, "auth-title"], [1, "auth-subtitle"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "name", 1, "form-label"], [1, "input-group-custom"], [1, "bi", "bi-person", "input-icon"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Ahmed Al Mansoori", "autocomplete", "name", 1, "form-control"], [1, "invalid-feedback", "d-block"], ["for", "email", 1, "form-label"], [1, "bi", "bi-envelope", "input-icon"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "you@example.com", "autocomplete", "email", 1, "form-control"], ["for", "password", 1, "form-label"], [1, "bi", "bi-lock", "input-icon"], ["id", "password", "formControlName", "password", "placeholder", "At least 6 characters", "autocomplete", "new-password", 1, "form-control", 3, "type"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "bi"], [1, "mb-4"], ["for", "confirmPassword", 1, "form-label"], [1, "bi", "bi-shield-lock", "input-icon"], ["id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Repeat your password", "autocomplete", "new-password", 1, "form-control", 3, "type"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/auth/login"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function RegisterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 5);
    \u0275\u0275text(6, "Create Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, "Start tracking your finances today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "form", 7);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
    \u0275\u0275text(12, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275element(14, "i", 11)(15, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, RegisterComponent_Conditional_16_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8)(18, "label", 14);
    \u0275\u0275text(19, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 10);
    \u0275\u0275element(21, "i", 15)(22, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, RegisterComponent_Conditional_23_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 8)(25, "label", 17);
    \u0275\u0275text(26, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 10);
    \u0275\u0275element(28, "i", 18)(29, "input", 19);
    \u0275\u0275elementStart(30, "button", 20);
    \u0275\u0275listener("click", function RegisterComponent_Template_button_click_30_listener() {
      return ctx.togglePassword();
    });
    \u0275\u0275element(31, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(32, RegisterComponent_Conditional_32_Template, 3, 2, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 22)(34, "label", 23);
    \u0275\u0275text(35, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 10);
    \u0275\u0275element(37, "i", 24)(38, "input", 25);
    \u0275\u0275elementStart(39, "button", 20);
    \u0275\u0275listener("click", function RegisterComponent_Template_button_click_39_listener() {
      return ctx.toggleConfirm();
    });
    \u0275\u0275element(40, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, RegisterComponent_Conditional_41_Template, 2, 0, "div", 13);
    \u0275\u0275conditionalCreate(42, RegisterComponent_Conditional_42_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 26);
    \u0275\u0275conditionalCreate(44, RegisterComponent_Conditional_44_Template, 2, 0)(45, RegisterComponent_Conditional_45_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "p", 27);
    \u0275\u0275text(47, " Already have an account? ");
    \u0275\u0275elementStart(48, "a", 28);
    \u0275\u0275text(49, "Sign in");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.nameCtrl.invalid && ctx.nameCtrl.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.nameCtrl.invalid && ctx.nameCtrl.touched ? 16 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.emailCtrl.invalid && ctx.emailCtrl.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.emailCtrl.invalid && ctx.emailCtrl.touched ? 23 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.passwordCtrl.invalid && ctx.passwordCtrl.touched);
    \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-eye", !ctx.showPassword())("bi-eye-slash", ctx.showPassword());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.passwordCtrl.invalid && ctx.passwordCtrl.touched ? 32 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.confirmCtrl.invalid && ctx.confirmCtrl.touched || (ctx.form.errors == null ? null : ctx.form.errors["passwordMismatch"]) && ctx.confirmCtrl.touched);
    \u0275\u0275property("type", ctx.showConfirm() ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-eye", !ctx.showConfirm())("bi-eye-slash", ctx.showConfirm());
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.form.errors == null ? null : ctx.form.errors["passwordMismatch"]) && ctx.confirmCtrl.touched ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx.confirmCtrl.errors == null ? null : ctx.confirmCtrl.errors["required"]) && ctx.confirmCtrl.touched ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading() ? 44 : 45);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f0faf5 0%,\n      #e8f4fd 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 440px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);\n  border: var(--border);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: var(--primary);\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.auth-header[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n}\n.auth-header[_ngcontent-%COMP%]   .auth-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  margin: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.375rem;\n  display: block;\n}\n.input-group-custom[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-group-custom[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.input-group-custom[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 2.25rem;\n  padding-right: 2.5rem;\n  height: 44px;\n}\n.input-group-custom[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0;\n  font-size: 0.875rem;\n}\n.input-group-custom[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=register.component.css.map */"], changeDetection: 0 });
var RegisterComponent = _RegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [ReactiveFormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="auth-page">
  <div class="auth-card">
    <div class="auth-header">
      <div class="brand-logo">
        <i class="bi bi-bar-chart-fill"></i>
      </div>
      <h1 class="auth-title">Create Account</h1>
      <p class="auth-subtitle">Start tracking your finances today</p>
    </div>

    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
      <div class="mb-3">
        <label class="form-label" for="name">Full Name</label>
        <div class="input-group-custom">
          <i class="bi bi-person input-icon"></i>
          <input
            id="name"
            type="text"
            class="form-control"
            [class.is-invalid]="nameCtrl.invalid && nameCtrl.touched"
            formControlName="name"
            placeholder="Ahmed Al Mansoori"
            autocomplete="name"
          />
        </div>
        @if (nameCtrl.invalid && nameCtrl.touched) {
          <div class="invalid-feedback d-block">
            @if (nameCtrl.errors?.['required']) { Full name is required. }
            @if (nameCtrl.errors?.['minlength']) { Name must be at least 2 characters. }
          </div>
        }
      </div>

      <div class="mb-3">
        <label class="form-label" for="email">Email Address</label>
        <div class="input-group-custom">
          <i class="bi bi-envelope input-icon"></i>
          <input
            id="email"
            type="email"
            class="form-control"
            [class.is-invalid]="emailCtrl.invalid && emailCtrl.touched"
            formControlName="email"
            placeholder="you@example.com"
            autocomplete="email"
          />
        </div>
        @if (emailCtrl.invalid && emailCtrl.touched) {
          <div class="invalid-feedback d-block">
            @if (emailCtrl.errors?.['required']) { Email is required. }
            @if (emailCtrl.errors?.['email']) { Enter a valid email address. }
          </div>
        }
      </div>

      <div class="mb-3">
        <label class="form-label" for="password">Password</label>
        <div class="input-group-custom">
          <i class="bi bi-lock input-icon"></i>
          <input
            id="password"
            [type]="showPassword() ? 'text' : 'password'"
            class="form-control"
            [class.is-invalid]="passwordCtrl.invalid && passwordCtrl.touched"
            formControlName="password"
            placeholder="At least 6 characters"
            autocomplete="new-password"
          />
          <button type="button" class="password-toggle" (click)="togglePassword()">
            <i class="bi" [class.bi-eye]="!showPassword()" [class.bi-eye-slash]="showPassword()"></i>
          </button>
        </div>
        @if (passwordCtrl.invalid && passwordCtrl.touched) {
          <div class="invalid-feedback d-block">
            @if (passwordCtrl.errors?.['required']) { Password is required. }
            @if (passwordCtrl.errors?.['minlength']) { Password must be at least 6 characters. }
          </div>
        }
      </div>

      <div class="mb-4">
        <label class="form-label" for="confirmPassword">Confirm Password</label>
        <div class="input-group-custom">
          <i class="bi bi-shield-lock input-icon"></i>
          <input
            id="confirmPassword"
            [type]="showConfirm() ? 'text' : 'password'"
            class="form-control"
            [class.is-invalid]="(confirmCtrl.invalid && confirmCtrl.touched) || (form.errors?.['passwordMismatch'] && confirmCtrl.touched)"
            formControlName="confirmPassword"
            placeholder="Repeat your password"
            autocomplete="new-password"
          />
          <button type="button" class="password-toggle" (click)="toggleConfirm()">
            <i class="bi" [class.bi-eye]="!showConfirm()" [class.bi-eye-slash]="showConfirm()"></i>
          </button>
        </div>
        @if (form.errors?.['passwordMismatch'] && confirmCtrl.touched) {
          <div class="invalid-feedback d-block">Passwords do not match.</div>
        }
        @if (confirmCtrl.errors?.['required'] && confirmCtrl.touched) {
          <div class="invalid-feedback d-block">Please confirm your password.</div>
        }
      </div>

      <button type="submit" class="btn-submit" [disabled]="isLoading()">
        @if (isLoading()) {
          <span class="spinner-border spinner-border-sm me-2" role="status"></span>
          Creating account...
        } @else {
          Create Account
        }
      </button>
    </form>

    <p class="auth-footer">
      Already have an account?
      <a routerLink="/auth/login">Sign in</a>
    </p>
  </div>
</div>
`, styles: ["/* src/app/features/auth/register/register.component.scss */\n.auth-page {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f0faf5 0%,\n      #e8f4fd 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n}\n.auth-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 440px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);\n  border: var(--border);\n}\n.auth-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header .brand-logo {\n  width: 56px;\n  height: 56px;\n  background: var(--primary);\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.auth-header .auth-title {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n}\n.auth-header .auth-subtitle {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  margin: 0;\n}\n.form-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.375rem;\n  display: block;\n}\n.input-group-custom {\n  position: relative;\n}\n.input-group-custom .input-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.input-group-custom .form-control {\n  padding-left: 2.25rem;\n  padding-right: 2.5rem;\n  height: 44px;\n}\n.input-group-custom .password-toggle {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0;\n  font-size: 0.875rem;\n}\n.input-group-custom .password-toggle:hover {\n  color: var(--text-primary);\n}\n.btn-submit {\n  width: 100%;\n  height: 44px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-submit:hover {\n  background: var(--primary-dark);\n}\n.btn-submit:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.auth-footer a {\n  color: var(--primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 19 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-IXSNB23G.js.map
