import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { FlatpickrDirective } from '@component/flatpickr/flatpickr.directive'

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CardTitleComponent, FlatpickrDirective],
  template: `
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Calendar"
        [menuItems]="[
          { label: 'Today' },
          { label: 'Yesterday' },
          { label: 'Last Week' },
          { label: 'Last Month' }
        ]"
      ></card-title>

      <div class="card-body px-2 pb-2 pt-0 mt-n2 crm-calendar">
        <div
          mwlFlatpickr
          class="calendar-widget"
          [flatpickrOptions]="{
            altInput: true,
            inline: true,
            altInputClass: 'invisible'
          }"
        ></div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CalendarComponent {}
