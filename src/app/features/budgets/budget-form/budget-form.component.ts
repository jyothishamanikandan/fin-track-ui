import { Component, inject, input, output, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Budget } from '../../../models';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss'
})
export class BudgetFormComponent implements OnChanges {
  private readonly fb = inject(FormBuilder);

  readonly editBudget = input<Budget | null>(null);
  readonly closed = output<void>();
  readonly saved = output<{ category: string; limit: number; color: string }>();

  readonly colorOptions = [
    '#1D9E75', '#EF9F27', '#4A90E2', '#9B59B6', '#E24B4A',
    '#2ECC71', '#E67E22', '#3498DB', '#8E44AD', '#E74C3C',
  ];

  readonly form = this.fb.group({
    category: ['', [Validators.required, Validators.minLength(2)]],
    limit:    [null as number | null, [Validators.required, Validators.min(1)]],
    color:    ['#1D9E75', Validators.required],
  });

  get categoryCtrl() { return this.form.controls.category; }
  get limitCtrl()    { return this.form.controls.limit; }
  get colorCtrl()    { return this.form.controls.color; }
  get isEditing()    { return !!this.editBudget(); }

  ngOnChanges(): void {
    const b = this.editBudget();
    if (b) {
      this.form.patchValue({ category: b.category, limit: b.limit, color: b.color });
    } else {
      this.form.reset({ category: '', limit: null, color: '#1D9E75' });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    this.saved.emit({ category: v.category!, limit: v.limit!, color: v.color! });
  }

  selectColor(c: string): void {
    this.form.patchValue({ color: c });
  }

  onClose(): void { this.closed.emit(); }
}
