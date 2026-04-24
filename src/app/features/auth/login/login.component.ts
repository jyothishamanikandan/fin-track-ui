import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly isLoading = signal(false);
  readonly showPassword = signal(false);
  readonly loginError = signal('');

  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  get emailCtrl() { return this.form.controls.email; }
  get passwordCtrl() { return this.form.controls.password; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.loginError.set('');

    setTimeout(() => {
      const { email, password } = this.form.value;
      const ok = this.authService.login(email!, password!);
      if (ok) {
        this.router.navigate(['/dashboard']);
      } else {
        this.loginError.set('Invalid email or password.');
        this.isLoading.set(false);
      }
    }, 600);
  }

  togglePassword(): void {
    this.showPassword.update(v => !v);
  }
}
