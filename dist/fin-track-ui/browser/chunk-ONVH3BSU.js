import {
  Injectable,
  Router,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-WWJDTDQY.js";

// src/app/core/auth/auth.service.ts
var _AuthService = class _AuthService {
  constructor() {
    this.router = inject(Router);
    this._token = signal(localStorage.getItem("fintrack_token"), ...ngDevMode ? [{ debugName: "_token" }] : []);
    this._userName = signal(localStorage.getItem("fintrack_user") ?? "User", ...ngDevMode ? [{ debugName: "_userName" }] : []);
    this._userEmail = signal(localStorage.getItem("fintrack_email") ?? "", ...ngDevMode ? [{ debugName: "_userEmail" }] : []);
    this.token = this._token.asReadonly();
    this.userName = this._userName.asReadonly();
    this.userEmail = this._userEmail.asReadonly();
    this.isAuthenticated = computed(() => !!this._token(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
    this.inactivityTimer = null;
    this.boundActivityHandler = () => this.resetInactivityTimer();
    effect(() => {
      const t = this._token();
      if (t) {
        localStorage.setItem("fintrack_token", t);
      } else {
        localStorage.removeItem("fintrack_token");
      }
    });
    if (this._token()) {
      this.setupInactivityTracking();
    }
  }
  login(email, _password) {
    const mockToken = `mock_jwt_${btoa(email)}_${Date.now()}`;
    const name = email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    this._token.set(mockToken);
    this._userName.set(name);
    this._userEmail.set(email);
    localStorage.setItem("fintrack_user", name);
    localStorage.setItem("fintrack_email", email);
    this.setupInactivityTracking();
    return true;
  }
  logout() {
    this._token.set(null);
    this._userName.set("User");
    this._userEmail.set("");
    localStorage.removeItem("fintrack_token");
    localStorage.removeItem("fintrack_user");
    localStorage.removeItem("fintrack_email");
    this.clearInactivityTimer();
    this.removeActivityListeners();
    this.router.navigate(["/auth/login"]);
  }
  setupInactivityTracking() {
    const events = ["mousedown", "keydown", "scroll", "touchstart", "click"];
    events.forEach((evt) => document.addEventListener(evt, this.boundActivityHandler, { passive: true }));
    this.resetInactivityTimer();
  }
  removeActivityListeners() {
    const events = ["mousedown", "keydown", "scroll", "touchstart", "click"];
    events.forEach((evt) => document.removeEventListener(evt, this.boundActivityHandler));
  }
  resetInactivityTimer() {
    this.clearInactivityTimer();
    this.inactivityTimer = setTimeout(() => this.logout(), 15 * 60 * 1e3);
  }
  clearInactivityTimer() {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
      this.inactivityTimer = null;
    }
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-ONVH3BSU.js.map
