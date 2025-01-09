import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CardTitleComponent, SimplebarAngularModule],
  template: `
    <!-- Todo-->
    <div class="card">
      <card-title
        classname="card-header d-flex justify-content-between align-items-center"
        title="Todo"
        [menuItems]="[{ label: 'Settings' }, { label: 'Action' }]"
      ></card-title>
      <div class="todoapp mt-n2">
        <ngx-simplebar
          class="card-body py-0 mb-2"
          data-simplebar
          style="max-height: 243px"
        >
          <ul class="list-group list-group-flush todo-list" id="todo-list">
            @for (data of todoList; track $index) {
              <li class="list-group-item border-0 ps-0">
                <div class="form-check mb-0">
                  <input
                    type="checkbox"
                    class="form-check-input todo-done"
                    id="7"
                    [checked]="data.done"
                  />
                  <label class="form-check-label" for="7">
                    @if (data.done) {
                      <s>{{ data.text }}</s>
                    } @else {
                      {{ data.text }}
                    }
                  </label>
                </div>
              </li>
            }
          </ul>
        </ngx-simplebar>
      </div>
      <!-- end .todoapp-->
    </div>
    <!-- end card-->
  `,
  styles: ``,
})
export class TodoComponent {
  todo = [
    {
      id: 1,
      text: 'Design One page theme',
      done: false,
    },
    {
      id: 2,
      text: 'Build a js based app',
      done: true,
    },
    {
      id: 3,
      text: 'Creating component page',
      done: true,
    },
    {
      id: 4,
      text: 'Testing??',
      done: true,
    },
    {
      id: 5,
      text: 'Hehe!! This looks cool!',
      done: false,
    },
    {
      id: 6,
      text: 'Create new version 3.0',
      done: false,
    },
    {
      id: 7,
      text: 'Build an angular app',
      done: true,
    },
  ]

  todoList = this.todo.reverse()
}
