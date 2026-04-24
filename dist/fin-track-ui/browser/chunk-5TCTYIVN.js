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
  AuthService
} from "./chunk-ONVH3BSU.js";
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
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WWJDTDQY.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.loginError(), " ");
  }
}
function LoginComponent_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Email is required. ");
  }
}
function LoginComponent_Conditional_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Enter a valid email address. ");
  }
}
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_17_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, LoginComponent_Conditional_17_Conditional_2_Template, 1, 0);
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
function LoginComponent_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Password is required. ");
  }
}
function LoginComponent_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Password must be at least 6 characters. ");
  }
}
function LoginComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275conditionalCreate(1, LoginComponent_Conditional_26_Conditional_1_Template, 1, 0);
    \u0275\u0275conditionalCreate(2, LoginComponent_Conditional_26_Conditional_2_Template, 1, 0);
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
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
    \u0275\u0275text(1, " Signing in... ");
  }
}
function LoginComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In ");
  }
}
var _LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.authService = inject(AuthService);
    this.isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
    this.showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
    this.loginError = signal("", ...ngDevMode ? [{ debugName: "loginError" }] : []);
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  get emailCtrl() {
    return this.form.controls.email;
  }
  get passwordCtrl() {
    return this.form.controls.password;
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.loginError.set("");
    setTimeout(() => {
      const { email, password } = this.form.value;
      const ok = this.authService.login(email, password);
      if (ok) {
        this.router.navigate(["/dashboard"]);
      } else {
        this.loginError.set("Invalid email or password.");
        this.isLoading.set(false);
      }
    }, 600);
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)();
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 37, vars: 15, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-header"], [1, "brand-logo"], [1, "bi", "bi-bar-chart-fill"], [1, "auth-title"], [1, "auth-subtitle"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "email", 1, "form-label"], [1, "input-group-custom"], [1, "bi", "bi-envelope", "input-icon"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "you@example.com", "autocomplete", "email", 1, "form-control"], [1, "invalid-feedback", "d-block"], [1, "mb-4"], ["for", "password", 1, "form-label"], [1, "bi", "bi-lock", "input-icon"], ["id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 1, "form-control", 3, "type"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "bi"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/auth/register"], [1, "demo-hint"], [1, "bi", "bi-info-circle", "me-1"], [1, "bi", "bi-exclamation-circle-fill"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 5);
    \u0275\u0275text(6, "FinTrack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, "Sign in to your account");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, LoginComponent_Conditional_9_Template, 3, 1, "div", 7);
    \u0275\u0275elementStart(10, "form", 8);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(11, "div", 9)(12, "label", 10);
    \u0275\u0275text(13, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275element(15, "i", 12)(16, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, LoginComponent_Conditional_17_Template, 3, 2, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 15)(19, "label", 16);
    \u0275\u0275text(20, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11);
    \u0275\u0275element(22, "i", 17)(23, "input", 18);
    \u0275\u0275elementStart(24, "button", 19);
    \u0275\u0275listener("click", function LoginComponent_Template_button_click_24_listener() {
      return ctx.togglePassword();
    });
    \u0275\u0275element(25, "i", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(26, LoginComponent_Conditional_26_Template, 3, 2, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275conditionalCreate(28, LoginComponent_Conditional_28_Template, 2, 0)(29, LoginComponent_Conditional_29_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "p", 22);
    \u0275\u0275text(31, " Don't have an account? ");
    \u0275\u0275elementStart(32, "a", 23);
    \u0275\u0275text(33, "Create one");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 24);
    \u0275\u0275element(35, "i", 25);
    \u0275\u0275text(36, " Use any email & password (6+ chars) to sign in ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.loginError() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.emailCtrl.invalid && ctx.emailCtrl.touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.emailCtrl.invalid && ctx.emailCtrl.touched ? 17 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx.passwordCtrl.invalid && ctx.passwordCtrl.touched);
    \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-eye", !ctx.showPassword())("bi-eye-slash", ctx.showPassword());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.passwordCtrl.invalid && ctx.passwordCtrl.touched ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isLoading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isLoading() ? 28 : 29);
  }
}, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f0faf5 0%,\n      #e8f4fd 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);\n  border: var(--border);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: var(--primary);\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.auth-header[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n}\n.auth-header[_ngcontent-%COMP%]   .auth-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  margin: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.375rem;\n  display: block;\n}\n.input-group-custom[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-group-custom[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.input-group-custom[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 2.25rem;\n  padding-right: 2.5rem;\n  height: 44px;\n}\n.input-group-custom[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0;\n  font-size: 0.875rem;\n}\n.input-group-custom[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n}\n.demo-hint[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.625rem 0.875rem;\n  background: var(--primary-light);\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  color: var(--primary-dark);\n  text-align: center;\n}\n/*# sourceMappingURL=login.component.css.map */"], changeDetection: 0 });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [ReactiveFormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="auth-page">
  <div class="auth-card">
    <div class="auth-header">
      <div class="brand-logo">
        <i class="bi bi-bar-chart-fill"></i>
      </div>
      <h1 class="auth-title">FinTrack</h1>
      <p class="auth-subtitle">Sign in to your account</p>
    </div>

    @if (loginError()) {
      <div class="alert alert-danger d-flex align-items-center gap-2" role="alert">
        <i class="bi bi-exclamation-circle-fill"></i>
        {{ loginError() }}
      </div>
    }

    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
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

      <div class="mb-4">
        <label class="form-label" for="password">Password</label>
        <div class="input-group-custom">
          <i class="bi bi-lock input-icon"></i>
          <input
            id="password"
            [type]="showPassword() ? 'text' : 'password'"
            class="form-control"
            [class.is-invalid]="passwordCtrl.invalid && passwordCtrl.touched"
            formControlName="password"
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
            autocomplete="current-password"
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

      <button type="submit" class="btn-submit" [disabled]="isLoading()">
        @if (isLoading()) {
          <span class="spinner-border spinner-border-sm me-2" role="status"></span>
          Signing in...
        } @else {
          Sign In
        }
      </button>
    </form>

    <p class="auth-footer">
      Don't have an account?
      <a routerLink="/auth/register">Create one</a>
    </p>

    <div class="demo-hint">
      <i class="bi bi-info-circle me-1"></i>
      Use any email &amp; password (6+ chars) to sign in
    </div>
  </div>
</div>
`, styles: ["/* src/app/features/auth/login/login.component.scss */\n.auth-page {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f0faf5 0%,\n      #e8f4fd 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n}\n.auth-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);\n  border: var(--border);\n}\n.auth-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-header .brand-logo {\n  width: 56px;\n  height: 56px;\n  background: var(--primary);\n  border-radius: 14px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.auth-header .auth-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n}\n.auth-header .auth-subtitle {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  margin: 0;\n}\n.form-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 0.375rem;\n  display: block;\n}\n.input-group-custom {\n  position: relative;\n}\n.input-group-custom .input-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.input-group-custom .form-control {\n  padding-left: 2.25rem;\n  padding-right: 2.5rem;\n  height: 44px;\n}\n.input-group-custom .password-toggle {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0;\n  font-size: 0.875rem;\n}\n.input-group-custom .password-toggle:hover {\n  color: var(--text-primary);\n}\n.btn-submit {\n  width: 100%;\n  height: 44px;\n  background: var(--primary);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-submit:hover {\n  background: var(--primary-dark);\n}\n.btn-submit:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.auth-footer a {\n  color: var(--primary);\n  font-weight: 600;\n}\n.demo-hint {\n  margin-top: 1rem;\n  padding: 0.625rem 0.875rem;\n  background: var(--primary-light);\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  color: var(--primary-dark);\n  text-align: center;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-5TCTYIVN.js.map
