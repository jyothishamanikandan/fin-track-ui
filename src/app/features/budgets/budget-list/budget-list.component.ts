import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { BudgetService } from '../../../core/services/budget.service';
import { ConfirmDialogService } from '../../../shared/components/confirm-dialog/confirm-dialog.service';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { AedCurrencyPipe } from '../../../shared/pipes/aed-currency.pipe';
import { BudgetFormComponent } from '../budget-form/budget-form.component';
import { Budget } from '../../../models';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [SidebarComponent, AedCurrencyPipe, BudgetFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.scss'
})
export class BudgetListComponent {
  protected readonly budgetSvc = inject(BudgetService);
  private readonly confirmSvc = inject(ConfirmDialogService);
  private readonly toastSvc = inject(ToastService);

  readonly showForm = signal(false);
  readonly editingBudget = signal<Budget | null>(null);

  openAdd(): void {
    this.editingBudget.set(null);
    this.showForm.set(true);
  }

  openEdit(b: Budget): void {
    this.editingBudget.set(b);
    this.showForm.set(true);
  }

  closeForm(): void {
    this.showForm.set(false);
    this.editingBudget.set(null);
  }

  onSaved(data: { category: string; limit: number; color: string }): void {
    const editing = this.editingBudget();
    if (editing) {
      this.budgetSvc.updateBudget(editing.id, { category: data.category, limit: data.limit, color: data.color });
      this.toastSvc.success('Budget updated.');
    } else {
      this.budgetSvc.addBudget(data);
      this.toastSvc.success('Budget added.');
    }
    this.closeForm();
  }

  async onDelete(b: Budget): Promise<void> {
    const ok = await this.confirmSvc.confirm(
      `Delete the "${b.category}" budget? This action cannot be undone.`,
      'Delete Budget'
    );
    if (ok) {
      this.budgetSvc.deleteBudget(b.id);
      this.toastSvc.success('Budget deleted.');
    }
  }

  getStatusLabel(b: Budget): string {
    const pct = this.budgetSvc.getUsagePercent(b);
    if (pct > 100) return 'Over budget';
    if (pct >= 90) return 'Critical';
    if (pct >= 70) return 'Warning';
    return 'On track';
  }

  getStatusClass(b: Budget): string {
    const pct = this.budgetSvc.getUsagePercent(b);
    if (pct > 100) return 'over';
    if (pct >= 90) return 'critical';
    if (pct >= 70) return 'warning';
    return 'good';
  }

  clamp(pct: number): number { return Math.min(pct, 100); }
}
