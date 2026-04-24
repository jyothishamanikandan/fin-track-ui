import {
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-WWJDTDQY.js";

// src/app/shared/components/confirm-dialog/confirm-dialog.service.ts
var _ConfirmDialogService = class _ConfirmDialogService {
  constructor() {
    this._state = signal({
      visible: false,
      title: "Confirm",
      message: "",
      confirmLabel: "Delete",
      resolve: null
    }, ...ngDevMode ? [{ debugName: "_state" }] : []);
    this.state = this._state.asReadonly();
  }
  confirm(message, title = "Confirm Action", confirmLabel = "Delete") {
    return new Promise((resolve) => {
      this._state.set({ visible: true, title, message, confirmLabel, resolve });
    });
  }
  accept() {
    this._state().resolve?.(true);
    this._state.update((s) => __spreadProps(__spreadValues({}, s), { visible: false, resolve: null }));
  }
  reject() {
    this._state().resolve?.(false);
    this._state.update((s) => __spreadProps(__spreadValues({}, s), { visible: false, resolve: null }));
  }
};
_ConfirmDialogService.\u0275fac = function ConfirmDialogService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmDialogService)();
};
_ConfirmDialogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmDialogService, factory: _ConfirmDialogService.\u0275fac, providedIn: "root" });
var ConfirmDialogService = _ConfirmDialogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/toast/toast.service.ts
var _ToastService = class _ToastService {
  constructor() {
    this._toasts = signal([], ...ngDevMode ? [{ debugName: "_toasts" }] : []);
    this.toasts = this._toasts.asReadonly();
  }
  show(message, type = "info") {
    const id = `toast_${Date.now()}`;
    this._toasts.update((ts) => [...ts, { id, message, type }]);
    setTimeout(() => this.remove(id), 3500);
  }
  success(message) {
    this.show(message, "success");
  }
  error(message) {
    this.show(message, "error");
  }
  info(message) {
    this.show(message, "info");
  }
  warning(message) {
    this.show(message, "warning");
  }
  remove(id) {
    this._toasts.update((ts) => ts.filter((t) => t.id !== id));
  }
};
_ToastService.\u0275fac = function ToastService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastService)();
};
_ToastService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
var ToastService = _ToastService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ConfirmDialogService,
  ToastService
};
//# sourceMappingURL=chunk-MYLQFWMS.js.map
