import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

function passwordMatchValidator(ctrl: AbstractControl): ValidationErrors | null {
  const password = ctrl.get('password')?.value;
  const confirm = ctrl.get('confirmPassword')?.value;
  return password && confirm && password !== confirm ? { passwordMismatch: true } : null;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly isLoading = signal(false);
  readonly showPassword = signal(false);
  readonly showConfirm = signal(false);

  readonly form = this.fb.group({
    name:            ['', [Validators.required, Validators.minLength(2)]],
    email:           ['', [Validators.required, Validators.email]],
    password:        ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { validators: passwordMatchValidator });

  get nameCtrl()    { return this.form.controls.name; }
  get emailCtrl()   { return this.form.controls.email; }
  get passwordCtrl(){ return this.form.controls.password; }
  get confirmCtrl() { return this.form.controls.confirmPassword; }

  togglePassword(): void { this.showPassword.update(v => !v); }
  toggleConfirm(): void  { this.showConfirm.update(v => !v); }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      this.router.navigate(['/auth/login']);
    }, 600);
  }
}
