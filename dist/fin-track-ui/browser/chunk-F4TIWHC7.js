import {
  AuthService
} from "./chunk-ONVH3BSU.js";
import {
  ChangeDetectionStrategy,
  Component,
  Pipe,
  RouterLink,
  RouterLinkActive,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-WWJDTDQY.js";

// src/app/shared/components/sidebar/sidebar.component.ts
var _SidebarComponent = class _SidebarComponent {
  constructor() {
    this.auth = inject(AuthService);
  }
  getInitial() {
    return this.auth.userName().charAt(0).toUpperCase();
  }
};
_SidebarComponent.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SidebarComponent)();
};
_SidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], decls: 51, vars: 2, consts: [[1, "sidebar"], [1, "sidebar-brand"], [1, "brand-logo"], [1, "bi", "bi-bar-chart-fill"], [1, "brand-name"], [1, "sidebar-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item"], [1, "bi", "bi-grid-1x2-fill", "nav-icon"], ["routerLink", "/transactions", "routerLinkActive", "active", 1, "nav-item"], [1, "bi", "bi-credit-card-fill", "nav-icon"], ["routerLink", "/budgets", "routerLinkActive", "active", 1, "nav-item"], [1, "bi", "bi-pie-chart-fill", "nav-icon"], ["routerLink", "/reports", "routerLinkActive", "active", 1, "nav-item"], [1, "bi", "bi-bar-chart-line-fill", "nav-icon"], [1, "sidebar-footer"], [1, "user-info"], [1, "user-avatar"], [1, "user-details"], [1, "user-name"], [1, "user-role"], ["title", "Logout", 1, "btn-logout", 3, "click"], [1, "bi", "bi-box-arrow-right"], [1, "mobile-nav"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "mobile-nav-item"], [1, "bi", "bi-grid-1x2-fill"], ["routerLink", "/transactions", "routerLinkActive", "active", 1, "mobile-nav-item"], [1, "bi", "bi-credit-card-fill"], ["routerLink", "/budgets", "routerLinkActive", "active", 1, "mobile-nav-item"], [1, "bi", "bi-pie-chart-fill"], ["routerLink", "/reports", "routerLinkActive", "active", 1, "mobile-nav-item"], [1, "bi", "bi-bar-chart-line-fill"]], template: function SidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5, "FinTrack");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "nav", 5)(7, "a", 6);
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 8);
    \u0275\u0275element(12, "i", 9);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Transactions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 10);
    \u0275\u0275element(16, "i", 11);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Budgets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "a", 12);
    \u0275\u0275element(20, "i", 13);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Reports");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 14)(24, "div", 15)(25, "div", 16);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 17)(28, "div", 18);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 19);
    \u0275\u0275text(31, "Personal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "button", 20);
    \u0275\u0275listener("click", function SidebarComponent_Template_button_click_32_listener() {
      return ctx.auth.logout();
    });
    \u0275\u0275element(33, "i", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 22)(35, "a", 23);
    \u0275\u0275element(36, "i", 24);
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "a", 25);
    \u0275\u0275element(40, "i", 26);
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Transactions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "a", 27);
    \u0275\u0275element(44, "i", 28);
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Budgets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "a", 29);
    \u0275\u0275element(48, "i", 30);
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50, "Reports");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate(ctx.getInitial());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.auth.userName());
  }
}, dependencies: [RouterLink, RouterLinkActive], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  min-width: var(--sidebar-width);\n  height: 100vh;\n  position: sticky;\n  top: 0;\n  background: #fff;\n  border-right: var(--border);\n  display: flex;\n  flex-direction: column;\n  padding: 1.25rem 0;\n  z-index: 100;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0 1.25rem 1.5rem;\n  border-bottom: var(--border);\n  margin-bottom: 1rem;\n}\n.sidebar-brand[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.1rem;\n}\n.sidebar-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.3px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.625rem 0.75rem;\n  border-radius: 8px;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 20px;\n  text-align: center;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  font-weight: 600;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem 0;\n  border-top: var(--border);\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  flex: 1;\n  min-width: 0;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.user-details[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.375rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: var(--danger);\n}\n.mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-nav[_ngcontent-%COMP%] {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: #fff;\n    border-top: var(--border);\n    z-index: 100;\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .mobile-nav-item[_ngcontent-%COMP%] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.25rem;\n    padding: 0.625rem 0.5rem;\n    color: var(--text-muted);\n    font-size: 0.625rem;\n    font-weight: 500;\n    text-decoration: none;\n    transition: color 0.15s;\n  }\n  .mobile-nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .mobile-nav-item.active[_ngcontent-%COMP%], \n   .mobile-nav-item[_ngcontent-%COMP%]:hover {\n    color: var(--primary);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */"], changeDetection: 0 });
var SidebarComponent = _SidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [RouterLink, RouterLinkActive], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-logo">
          <i class="bi bi-bar-chart-fill"></i>
        </div>
        <span class="brand-name">FinTrack</span>
      </div>

      <nav class="sidebar-nav">
        <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">
          <i class="bi bi-grid-1x2-fill nav-icon"></i>
          <span>Dashboard</span>
        </a>
        <a routerLink="/transactions" routerLinkActive="active" class="nav-item">
          <i class="bi bi-credit-card-fill nav-icon"></i>
          <span>Transactions</span>
        </a>
        <a routerLink="/budgets" routerLinkActive="active" class="nav-item">
          <i class="bi bi-pie-chart-fill nav-icon"></i>
          <span>Budgets</span>
        </a>
        <a routerLink="/reports" routerLinkActive="active" class="nav-item">
          <i class="bi bi-bar-chart-line-fill nav-icon"></i>
          <span>Reports</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar">{{ getInitial() }}</div>
          <div class="user-details">
            <div class="user-name">{{ auth.userName() }}</div>
            <div class="user-role">Personal</div>
          </div>
        </div>
        <button class="btn-logout" (click)="auth.logout()" title="Logout">
          <i class="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </aside>

    <div class="mobile-nav">
      <a routerLink="/dashboard" routerLinkActive="active" class="mobile-nav-item">
        <i class="bi bi-grid-1x2-fill"></i>
        <span>Dashboard</span>
      </a>
      <a routerLink="/transactions" routerLinkActive="active" class="mobile-nav-item">
        <i class="bi bi-credit-card-fill"></i>
        <span>Transactions</span>
      </a>
      <a routerLink="/budgets" routerLinkActive="active" class="mobile-nav-item">
        <i class="bi bi-pie-chart-fill"></i>
        <span>Budgets</span>
      </a>
      <a routerLink="/reports" routerLinkActive="active" class="mobile-nav-item">
        <i class="bi bi-bar-chart-line-fill"></i>
        <span>Reports</span>
      </a>
    </div>
  `, styles: ["/* src/app/shared/components/sidebar/sidebar.component.scss */\n.sidebar {\n  width: var(--sidebar-width);\n  min-width: var(--sidebar-width);\n  height: 100vh;\n  position: sticky;\n  top: 0;\n  background: #fff;\n  border-right: var(--border);\n  display: flex;\n  flex-direction: column;\n  padding: 1.25rem 0;\n  z-index: 100;\n}\n.sidebar-brand {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding: 0 1.25rem 1.5rem;\n  border-bottom: var(--border);\n  margin-bottom: 1rem;\n}\n.sidebar-brand .brand-logo {\n  width: 36px;\n  height: 36px;\n  background: var(--primary);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.1rem;\n}\n.sidebar-brand .brand-name {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: -0.3px;\n}\n.sidebar-nav {\n  flex: 1;\n  padding: 0 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.625rem 0.75rem;\n  border-radius: 8px;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.15s;\n  text-decoration: none;\n}\n.nav-item .nav-icon {\n  font-size: 1rem;\n  width: 20px;\n  text-align: center;\n}\n.nav-item:hover {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n}\n.nav-item.active {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  font-weight: 600;\n}\n.sidebar-footer {\n  padding: 1rem 1.25rem 0;\n  border-top: var(--border);\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  flex: 1;\n  min-width: 0;\n}\n.user-avatar {\n  width: 34px;\n  height: 34px;\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.user-details {\n  min-width: 0;\n}\n.user-details .user-name {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-details .user-role {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.btn-logout {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 0.375rem;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n.btn-logout:hover {\n  background: #fef2f2;\n  color: var(--danger);\n}\n.mobile-nav {\n  display: none;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n  .mobile-nav {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: #fff;\n    border-top: var(--border);\n    z-index: 100;\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .mobile-nav-item {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.25rem;\n    padding: 0.625rem 0.5rem;\n    color: var(--text-muted);\n    font-size: 0.625rem;\n    font-weight: 500;\n    text-decoration: none;\n    transition: color 0.15s;\n  }\n  .mobile-nav-item i {\n    font-size: 1.1rem;\n  }\n  .mobile-nav-item.active,\n  .mobile-nav-item:hover {\n    color: var(--primary);\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/components/sidebar/sidebar.component.ts", lineNumber: 73 });
})();

// src/app/shared/pipes/aed-currency.pipe.ts
var _AedCurrencyPipe = class _AedCurrencyPipe {
  transform(value, showDecimals = false) {
    if (value == null)
      return "AED 0";
    const formatted = value.toLocaleString("en-US", {
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0
    });
    return `AED ${formatted}`;
  }
};
_AedCurrencyPipe.\u0275fac = function AedCurrencyPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AedCurrencyPipe)();
};
_AedCurrencyPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "aedCurrency", type: _AedCurrencyPipe, pure: true });
var AedCurrencyPipe = _AedCurrencyPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AedCurrencyPipe, [{
    type: Pipe,
    args: [{ name: "aedCurrency", standalone: true }]
  }], null, null);
})();

export {
  SidebarComponent,
  AedCurrencyPipe
};
//# sourceMappingURL=chunk-F4TIWHC7.js.map
