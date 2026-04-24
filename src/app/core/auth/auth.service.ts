import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly router = inject(Router);

  private readonly _token = signal<string | null>(localStorage.getItem('fintrack_token'));
  private readonly _userName = signal<string>(localStorage.getItem('fintrack_user') ?? 'User');
  private readonly _userEmail = signal<string>(localStorage.getItem('fintrack_email') ?? '');

  readonly token = this._token.asReadonly();
  readonly userName = this._userName.asReadonly();
  readonly userEmail = this._userEmail.asReadonly();
  readonly isAuthenticated = computed(() => !!this._token());

  private inactivityTimer: ReturnType<typeof setTimeout> | null = null;
  private boundActivityHandler = () => this.resetInactivityTimer();

  constructor() {
    effect(() => {
      const t = this._token();
      if (t) {
        localStorage.setItem('fintrack_token', t);
      } else {
        localStorage.removeItem('fintrack_token');
      }
    });

    if (this._token()) {
      this.setupInactivityTracking();
    }
  }

  login(email: string, _password: string): boolean {
    const mockToken = `mock_jwt_${btoa(email)}_${Date.now()}`;
    const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    this._token.set(mockToken);
    this._userName.set(name);
    this._userEmail.set(email);
    localStorage.setItem('fintrack_user', name);
    localStorage.setItem('fintrack_email', email);
    this.setupInactivityTracking();
    return true;
  }

  logout(): void {
    this._token.set(null);
    this._userName.set('User');
    this._userEmail.set('');
    localStorage.removeItem('fintrack_token');
    localStorage.removeItem('fintrack_user');
    localStorage.removeItem('fintrack_email');
    this.clearInactivityTimer();
    this.removeActivityListeners();
    this.router.navigate(['/auth/login']);
  }

  private setupInactivityTracking(): void {
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
    events.forEach(evt => document.addEventListener(evt, this.boundActivityHandler, { passive: true }));
    this.resetInactivityTimer();
  }

  private removeActivityListeners(): void {
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
    events.forEach(evt => document.removeEventListener(evt, this.boundActivityHandler));
  }

  private resetInactivityTimer(): void {
    this.clearInactivityTimer();
    this.inactivityTimer = setTimeout(() => this.logout(), 15 * 60 * 1000);
  }

  private clearInactivityTimer(): void {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
      this.inactivityTimer = null;
    }
  }
}
