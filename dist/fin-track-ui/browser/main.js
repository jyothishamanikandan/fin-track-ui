import {
  ConfirmDialogService,
  ToastService
} from "./chunk-MYLQFWMS.js";
import {
  provideCharts,
  withDefaultRegisterables
} from "./chunk-IN3PZOQK.js";
import {
  AuthService
} from "./chunk-ONVH3BSU.js";
import {
  ChangeDetectionStrategy,
  Component,
  Router,
  RouterOutlet,
  bootstrapApplication,
  inject,
  provideHttpClient,
  provideRouter,
  provideZoneChangeDetection,
  setClassMetadata,
  withComponentInputBinding,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WWJDTDQY.js";

// src/app/core/auth/auth.guard.ts
var authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(["/auth/login"]);
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full"
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        loadComponent: () => import("./chunk-5TCTYIVN.js").then((m) => m.LoginComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./chunk-IXSNB23G.js").then((m) => m.RegisterComponent)
      },
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "dashboard",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-RPJ3WTII.js").then((m) => m.DashboardComponent)
  },
  {
    path: "transactions",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-PXMLYVBM.js").then((m) => m.TransactionListComponent)
  },
  {
    path: "budgets",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-PVQV22EG.js").then((m) => m.BudgetListComponent)
  },
  {
    path: "reports",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-ZKHZDWAO.js").then((m) => m.ReportsComponent)
  },
  {
    path: "**",
    redirectTo: "auth/login"
  }
];

// src/app/core/auth/jwt.interceptor.ts
var jwtInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.token();
  if (token) {
    const authReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`)
    });
    return next(authReq);
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideCharts(withDefaultRegisterables())
  ]
};

// src/app/shared/components/toast/toast.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275domElement(1, "i", 3);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 4);
    \u0275\u0275domListener("click", function ToastComponent_For_2_Template_button_click_4_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toastService.remove(toast_r2.id));
    });
    \u0275\u0275domElement(5, "i", 5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("toast-" + toast_r2.type);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getIcon(toast_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var _ToastComponent = class _ToastComponent {
  constructor() {
    this.toastService = inject(ToastService);
  }
  getIcon(type) {
    const icons = {
      success: "bi-check-circle-fill",
      error: "bi-x-circle-fill",
      warning: "bi-exclamation-triangle-fill",
      info: "bi-info-circle-fill"
    };
    return icons[type] ?? "bi-info-circle-fill";
  }
};
_ToastComponent.\u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastComponent)();
};
_ToastComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 3, vars: 0, consts: [[1, "toast-container"], [1, "toast-item", 3, "class"], [1, "toast-item"], [1, "bi"], [1, "toast-close", 3, "click"], [1, "bi", "bi-x"]], template: function ToastComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, ToastComponent_For_2_Template, 6, 5, "div", 1, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.toastService.toasts());
  }
}, styles: ["\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1.25rem;\n  right: 1.25rem;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 280px;\n  max-width: 380px;\n}\n.toast-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease;\n  color: #fff;\n}\n.toast-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: #1D9E75;\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: #E24B4A;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  background: #EF9F27;\n}\n.toast-info[_ngcontent-%COMP%] {\n  background: #4A90E2;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */"], changeDetection: 0 });
var ToastComponent = _ToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="toast-container">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="toast-item" [class]="'toast-' + toast.type">
          <i class="bi" [class]="getIcon(toast.type)"></i>
          <span>{{ toast.message }}</span>
          <button class="toast-close" (click)="toastService.remove(toast.id)">
            <i class="bi bi-x"></i>
          </button>
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;d66d041e1369e5d514a4e04d742223f94fca189351a55395b3cb1dda83db496e;C:/Users/jyothisha/project-2026/fin-track-ui/src/app/shared/components/toast/toast.component.ts */\n.toast-container {\n  position: fixed;\n  top: 1.25rem;\n  right: 1.25rem;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 280px;\n  max-width: 380px;\n}\n.toast-item {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0.75rem 1rem;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);\n  animation: slideIn 0.2s ease;\n  color: #fff;\n}\n.toast-item span {\n  flex: 1;\n}\n.toast-success {\n  background: #1D9E75;\n}\n.toast-error {\n  background: #E24B4A;\n}\n.toast-warning {\n  background: #EF9F27;\n}\n.toast-info {\n  background: #4A90E2;\n}\n.toast-close {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n}\n.toast-close:hover {\n  color: #fff;\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/shared/components/toast/toast.component.ts", lineNumber: 73 });
})();

// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
function ConfirmDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.reject());
    });
    \u0275\u0275domElementStart(1, "div", 2);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElementStart(2, "div", 3);
    \u0275\u0275domElement(3, "i", 4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h5", 5);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 7)(9, "button", 8);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.reject());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "button", 9);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.accept());
    });
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.svc.state().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.svc.state().message);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.svc.state().confirmLabel, " ");
  }
}
var _ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor() {
    this.svc = inject(ConfirmDialogService);
  }
};
_ConfirmDialogComponent.\u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmDialogComponent)();
};
_ConfirmDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 1, vars: 1, consts: [[1, "modal-overlay"], [1, "modal-overlay", 3, "click"], [1, "modal-card", "confirm-modal", 3, "click"], [1, "confirm-icon"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "confirm-title"], [1, "confirm-message"], [1, "confirm-actions"], [1, "btn", "btn-light", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ConfirmDialogComponent_Conditional_0_Template, 13, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.svc.state().visible ? 0 : -1);
  }
}, styles: ["\n\n.confirm-modal[_ngcontent-%COMP%] {\n  max-width: 420px;\n  text-align: center;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #EF9F27;\n  margin-bottom: 1rem;\n}\n.confirm-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: #1a1d23;\n}\n.confirm-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n}\n.confirm-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */"], changeDetection: 0 });
var ConfirmDialogComponent = _ConfirmDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (svc.state().visible) {
      <div class="modal-overlay" (click)="svc.reject()">
        <div class="modal-card confirm-modal" (click)="$event.stopPropagation()">
          <div class="confirm-icon">
            <i class="bi bi-exclamation-triangle-fill"></i>
          </div>
          <h5 class="confirm-title">{{ svc.state().title }}</h5>
          <p class="confirm-message">{{ svc.state().message }}</p>
          <div class="confirm-actions">
            <button class="btn btn-light" (click)="svc.reject()">Cancel</button>
            <button class="btn btn-danger" (click)="svc.accept()">
              {{ svc.state().confirmLabel }}
            </button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;75cc141b336a2412330ff671f79aff5820f0775ca259e1d45acc908dda979354;C:/Users/jyothisha/project-2026/fin-track-ui/src/app/shared/components/confirm-dialog/confirm-dialog.component.ts */\n.confirm-modal {\n  max-width: 420px;\n  text-align: center;\n}\n.confirm-icon {\n  font-size: 2.5rem;\n  color: #EF9F27;\n  margin-bottom: 1rem;\n}\n.confirm-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: #1a1d23;\n}\n.confirm-message {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin-bottom: 1.5rem;\n}\n.confirm-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n}\n.confirm-actions .btn {\n  padding: 0.5rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=confirm-dialog.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/components/confirm-dialog/confirm-dialog.component.ts", lineNumber: 66 });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet")(1, "app-toast")(2, "app-confirm-dialog");
  }
}, dependencies: [RouterOutlet, ToastComponent, ConfirmDialogComponent], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet, ToastComponent, ConfirmDialogComponent],
      template: `
    <router-outlet></router-outlet>
    <app-toast></app-toast>
    <app-confirm-dialog></app-confirm-dialog>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
