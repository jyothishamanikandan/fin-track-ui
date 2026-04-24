import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TransactionService } from '../../core/services/transaction.service';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { MetricCardComponent } from './widgets/metric-card/metric-card.component';
import { SpendingDonutComponent } from './widgets/spending-donut/spending-donut.component';
import { MonthlyTrendComponent } from './widgets/monthly-trend/monthly-trend.component';
import { BudgetProgressComponent } from './widgets/budget-progress/budget-progress.component';
import { RecentTransactionsComponent } from './widgets/recent-transactions/recent-transactions.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    MetricCardComponent,
    SpendingDonutComponent,
    MonthlyTrendComponent,
    BudgetProgressComponent,
    RecentTransactionsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  protected readonly txService = inject(TransactionService);

  readonly currentMonth = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
}
