import { Component } from '@angular/core'

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body p-2">
        <div class="list-group list-group-flush my-2">
          <a
            href="javascript:void(0);"
            class="list-group-item list-group-item-action border-0"
            ><i class="uil uil-calendar-alt me-1"></i> 3 events this week</a
          >
          <a
            href="javascript:void(0);"
            class="list-group-item list-group-item-action border-0"
            ><i class="uil uil-calender me-1"></i> Eva's birthday today</a
          >
          <a
            href="javascript:void(0);"
            class="list-group-item list-group-item-action border-0"
            ><i class="uil uil-bookmark me-1"></i> Jenny's wedding tomorrow</a
          >
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class EventsComponent {}
