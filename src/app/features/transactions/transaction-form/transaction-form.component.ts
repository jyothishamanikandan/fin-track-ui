import { Component, inject, output, input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Transaction } from '../../../models';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent implements OnChanges {
  private readonly fb = inject(FormBuilder);

  readonly editTransaction = input<Transaction | null>(null);
  readonly closed = output<void>();
  readonly saved = output<Omit<Transaction, 'id'>>();

  readonly form = this.fb.group({
    title:    ['', [Validators.required, Validators.minLength(2)]],
    amount:   [null as number | null, [Validators.required, Validators.min(0.01)]],
    type:     ['expense' as 'income' | 'expense', Validators.required],
    category: ['food' as Transaction['category'], Validators.required],
    date:     [new Date().toISOString().split('T')[0], Validators.required],
    note:     [''],
  });

  get titleCtrl()    { return this.form.controls.title; }
  get amountCtrl()   { return this.form.controls.amount; }
  get typeCtrl()     { return this.form.controls.type; }
  get categoryCtrl() { return this.form.controls.category; }
  get dateCtrl()     { return this.form.controls.date; }

  get isEditing(): boolean { return !!this.editTransaction(); }

  ngOnChanges(): void {
    const txn = this.editTransaction();
    if (txn) {
      this.form.patchValue({
        title:    txn.title,
        amount:   txn.amount,
        type:     txn.type,
        category: txn.category,
        date:     txn.date,
        note:     txn.note ?? '',
      });
    } else {
      this.form.reset({
        title: '',
        amount: null,
        type: 'expense',
        category: 'food',
        date: new Date().toISOString().split('T')[0],
        note: '',
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    this.saved.emit({
      title:    v.title!,
      amount:   v.amount!,
      type:     v.type!,
      category: v.category!,
      date:     v.date!,
      note:     v.note || undefined,
    });
  }

  onClose(): void { this.closed.emit(); }
}
