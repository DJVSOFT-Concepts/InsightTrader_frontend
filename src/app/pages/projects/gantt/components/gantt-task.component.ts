import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ganttask } from '@core/data'
import Gantt from '@lib/frappe-gantt'

@Component({
  selector: 'app-gantt-task',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row">
      <div class="col-auto">
        <a href="javascript: void(0);" class="btn btn-success btn-sm mb-2"
          >Add New Task</a
        >
      </div>
      <div class="col text-sm-end">
        <div
          class="btn-group btn-group-sm mb-2"
          data-bs-toggle="buttons"
          id="modes-filter"
        >
          @for (mode of modes; track $index) {
            <button
              class="btn btn-primary d-sm-inline-block"
              [ngClass]="{ active: mode == defaultMode }"
              (click)="changeMode(mode)"
            >
              {{ mode }}
            </button>
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class GanttTaskComponent {
  modes!: Gantt.viewMode[]
  gantt!: Gantt
  defaultMode: Gantt.viewMode = 'Week'

  ngOnInit(): void {
    this.modes = ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month']

    this.gantt = new Gantt('#tasks-gantt', ganttask, {
      view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
      bar_height: 20,
      padding: 18,
      view_mode: 'Week',
      custom_popup_html(task) {
        return (
          '<div class="popover fade show bs-popover-right gantt-task-details" role="tooltip">' +
          '<div class="arrow"></div><div class="popover-body">' +
          `<h5>${task.name}</h5><p class="mb-2">Expected to finish by ${task.end}</p>` +
          '<div class="progress mb-2" style="height: 10px;">' +
          `<div class="progress-bar" role="progressbar" style="width: ${task.progress}%;" aria-valuenow="${task.progress}"` +
          ` aria-valuemin="0" aria-valuemax="100">${task.progress}%</div>` +
          '</div></div></div>'
        )
      },
    })
  }

  // Change Gantt Mode
  changeMode(mode: Gantt.viewMode) {
    this.defaultMode = mode
    this.gantt.change_view_mode(mode)
  }
}
