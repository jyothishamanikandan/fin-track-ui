import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="brand-logo">
          <i class="bi bi-bar-chart-fill"></i>
        </div>
        <span class="brand-name">FinTrack</span>
      </div>

      <nav class="sidebar-nav">
        <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">
          <i class="bi bi-grid-1x2-fill nav-icon"></i>
          <span>Dashboard</span>
        </a>
        <a routerLink="/transactions" routerLinkActive="active" class="nav-item">
          <i class="bi bi-credit-card-fill nav-icon"></i>
          <span>Transactions</span>
        </a>
        <a routerLink="/budgets" routerLinkActive="active" class="nav-item">
          <i class="bi bi-pie-chart-fill nav-icon"></i>
          <span>Budgets</span>
        </a>
        <a routerLink="/reports" routerLinkActive="active" class="nav-item">
          <i class="bi bi-bar-chart-line-fill nav-icon"></i>
          <span>Reports</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar">F</div>
          <div class="user-details">
            <div class="user-name">FinTrack</div>
            <div class="user-role">Personal</div>
          </div>
        </div>
      </div>
    </aside>

    <div class="mobile-nav">
      <a routerLink="/dashboard" routerLinkActive="active" class="mobile-nav-item">
        <i class="bi bi-grid-1x2-fill"></i>
        <span>Dashboard</span>
      </a>
      <a routerLink="/transactions" routerLinkActive="active" class="mobile-nav-item">
        <i class="bi bi-credit-card-fill"></i>
        <span>Transactions</span>
      </a>
      <a routerLink="/budgets" routerLinkActive="active" class="mobile-nav-item">
        <i class="bi bi-pie-chart-fill"></i>
        <span>Budgets</span>
      </a>
      <a routerLink="/reports" routerLinkActive="active" class="mobile-nav-item">
        <i class="bi bi-bar-chart-line-fill"></i>
        <span>Reports</span>
      </a>
    </div>
  `,
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
}
