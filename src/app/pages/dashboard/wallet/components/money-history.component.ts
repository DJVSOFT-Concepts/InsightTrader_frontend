import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'

@Component({
  selector: 'app-money-history',
  standalone: true,
  imports: [CardTitleComponent],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Money History"
        [menuItems]="[
          { label: 'Refresh' },
          { label: 'Edit' },
          { label: 'Remove' }
        ]"
      ></card-title>

      <div class="card-body pt-0">
        <div class="border border-light p-3 rounded mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <p class="font-18 mb-1">Income</p>
              <h3 class="text-primary my-0">$2,76,548</h3>
            </div>
            <div class="avatar-sm">
              <span class="avatar-title bg-primary rounded-circle h3 my-0">
                <i class="mdi mdi-arrow-up-bold-outline"></i>
              </span>
            </div>
          </div>
        </div>

        <div class="border border-light p-3 rounded mb-3">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <p class="font-18 mb-1">Expenses</p>
              <h3 class="text-danger my-0">$50,216</h3>
            </div>
            <div class="avatar-sm">
              <span class="avatar-title bg-danger rounded-circle h3 my-0">
                <i class="mdi mdi-arrow-down-bold-outline"></i>
              </span>
            </div>
          </div>
        </div>

        <div class="border border-light p-3 rounded">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <p class="font-18 mb-1">Transfar</p>
              <h3 class="text-success my-0">$98,100</h3>
            </div>
            <div class="avatar-sm">
              <span class="avatar-title bg-success rounded-circle h3 my-0">
                <i class="mdi mdi-swap-horizontal"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MoneyHistoryComponent {}
