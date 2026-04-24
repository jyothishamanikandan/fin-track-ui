import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../../core/services/transaction.service';
import { ConfirmDialogService } from '../../../shared/components/confirm-dialog/confirm-dialog.service';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { AedCurrencyPipe } from '../../../shared/pipes/aed-currency.pipe';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';
import { Transaction } from '../../../models';

const PAGE_SIZE = 10;

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [FormsModule, SidebarComponent, AedCurrencyPipe, TransactionFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent {
  protected readonly txService = inject(TransactionService);
  private readonly confirmSvc = inject(ConfirmDialogService);
  private readonly toastSvc = inject(ToastService);

  readonly showForm = signal(false);
  readonly editingTxn = signal<Transaction | null>(null);
  readonly currentPage = signal(1);

  readonly searchTerm = signal('');
  readonly categoryFilter = signal('all');
  readonly typeFilter = signal('all');

  readonly filtered = computed(() => {
    const all = this.txService.transactions();
    const search = this.searchTerm().toLowerCase();
    const cat = this.categoryFilter();
    const type = this.typeFilter();

    return all.filter(t => {
      const matchSearch = !search || t.title.toLowerCase().includes(search);
      const matchCat = cat === 'all' || t.category === cat;
      const matchType = type === 'all' || t.type === type;
      return matchSearch && matchCat && matchType;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  readonly totalPages = computed(() => Math.ceil(this.filtered().length / PAGE_SIZE) || 1);

  readonly paginated = computed(() => {
    const page = this.currentPage();
    const start = (page - 1) * PAGE_SIZE;
    return this.filtered().slice(start, start + PAGE_SIZE);
  });

  readonly pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  openAdd(): void {
    this.editingTxn.set(null);
    this.showForm.set(true);
  }

  openEdit(txn: Transaction): void {
    this.editingTxn.set(txn);
    this.showForm.set(true);
  }

  closeForm(): void {
    this.showForm.set(false);
    this.editingTxn.set(null);
  }

  onSaved(data: Omit<Transaction, 'id'>): void {
    const editing = this.editingTxn();
    if (editing) {
      this.txService.updateTransaction(editing.id, data);
      this.toastSvc.success('Transaction updated.');
    } else {
      this.txService.addTransaction(data);
      this.toastSvc.success('Transaction added.');
      this.currentPage.set(1);
    }
    this.closeForm();
  }

  async onDelete(txn: Transaction): Promise<void> {
    const ok = await this.confirmSvc.confirm(
      `Delete "${txn.title}"? This action cannot be undone.`,
      'Delete Transaction'
    );
    if (ok) {
      this.txService.deleteTransaction(txn.id);
      this.toastSvc.success('Transaction deleted.');
      if (this.currentPage() > this.totalPages()) {
        this.currentPage.set(this.totalPages());
      }
    }
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  onFilterChange(): void {
    this.currentPage.set(1);
    this.txService.setFilter({
      search: this.searchTerm(),
      category: this.categoryFilter(),
      type: this.typeFilter(),
    });
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
