# FinTrack — Why This Project & Business Logic

## Why This Project

Managing personal finances is a common challenge. Most people track spending across multiple categories — rent, food, transport, leisure — but without a single view, it's easy to overspend, miss savings goals, or lose awareness of where money is going month to month.

**FinTrack** was built to solve that problem for individuals, particularly in the UAE context (AED currency), by providing:

- A clear picture of income vs. expenses at any point in time
- Proactive budget alerts before overspending happens
- Historical trends so users can spot patterns and make better decisions
- A lightweight, no-backend-required tool that can be self-hosted or deployed instantly

The application is intentionally frontend-only (no server, no cloud database) to keep it simple, private, and fast to deploy — making it useful as both a personal tool and a portfolio/demo project demonstrating modern Angular architecture.

---

## Core Business Concepts

### 1. Transactions

A **Transaction** is the fundamental unit of data. Every financial event the user records is a transaction.

| Field | Purpose |
|---|---|
| `type` | `income` or `expense` — determines whether it adds to or subtracts from balance |
| `category` | Groups transactions for budget tracking and reporting |
| `amount` | Always stored as a positive number; `type` determines its sign effect |
| `date` | ISO date string used for monthly grouping and trend analysis |

**Categories:** `housing`, `food`, `transport`, `utilities`, `leisure`, `income`, `other`

Transactions are the source of truth for all computed financial metrics.

---

### 2. Financial Metrics (derived from transactions)

All metrics are computed from the transaction list using Angular Signals. There is no separately stored balance — everything is recalculated reactively.

| Metric | Formula |
|---|---|
| **Total Income** | Sum of all `income` transactions |
| **Total Expenses** | Sum of all `expense` transactions |
| **Net Balance** | Total Income − Total Expenses |
| **Savings Rate** | (Net Balance / Total Income) × 100, capped at 0% minimum |
| **Category Expenses** | Sum of expenses grouped by category |

A positive net balance means the user is saving. A negative net balance means spending exceeds income.

---

### 3. Budgets

A **Budget** sets a spending limit for a category over a period. Budgets are compared against actual category spending derived from transactions.

**Budget status thresholds:**

| Usage | Status | Meaning |
|---|---|---|
| < 70% | On Track | Spending is healthy |
| 70% – 89% | Warning | Approaching the limit |
| 90% – 99% | Critical | Nearly at the limit |
| ≥ 100% | Over Budget | Limit exceeded |

`spent` on a budget is populated from the sum of expense transactions in that category. The `limit` is set by the user. Color coding gives instant visual feedback without needing to read numbers.

---

### 4. Reports

Reports answer the question: *how has my spending changed over time?*

**Monthly Report** aggregates per calendar month:
- Total income for the month
- Total expenses for the month
- Net (income − expenses)

This powers the 6-month trend line chart on the dashboard and the reports page.

**Daily Spend** aggregates expenses by day-of-month for a selected month — useful for spotting high-spend days (e.g., weekends, paydays).

**Key report metrics:**
- Highest spending category
- Biggest single expense
- Average daily spend for the selected month

---

### 5. Authentication & Session

Authentication is mock (no real backend) but models real-world session behavior:

- On login, a mock JWT token is generated and stored in `localStorage`
- The token is attached to all HTTP requests via an interceptor (ready for real API integration)
- A 15-minute inactivity timer automatically logs the user out — tracking mouse, keyboard, scroll, and touch events
- On logout or timeout, all auth state is cleared from `localStorage`

The guard (`authGuard`) protects all financial routes. Unauthenticated users are redirected to login.

---

### 6. Data Flow Summary

```
User Action (add/edit/delete transaction or budget)
        │
        ▼
Service (Signal updated)
        │
        ├──▶ Computed Signals recalculate totals, category sums, metrics
        │
        └──▶ Components re-render only what changed (OnPush)
```

No manual subscriptions, no explicit refresh calls. Angular Signals ensure derived data (net balance, budget usage, monthly reports) always reflects the current state of transactions automatically.

---

### 7. Business Rules Summary

- A transaction must have a title, amount > 0, type, category, and date
- Budget limits must be > 0; a category can only have one active budget
- Deleting a transaction recalculates all metrics, budgets, and reports immediately
- The savings rate is floored at 0% (never shown as negative in the UI)
- All monetary values are in AED (United Arab Emirates Dirham)
- Pagination is 10 transactions per page; the list is sorted newest-first by date
- Session expires after 15 minutes of no user interaction

---

## Intended Future Extensions

The architecture is designed so these additions require minimal changes:

- **Real backend API** — swap mock data in services with HTTP calls; the interceptor is already wired
- **Multi-month budgets** — extend the `Budget` model with a `month` field
- **Recurring transactions** — add a `recurring` flag and a scheduler service
- **Export to CSV/PDF** — read from `TransactionService` signals and serialize
- **Multi-currency support** — replace `AedCurrencyPipe` with a configurable currency pipe
