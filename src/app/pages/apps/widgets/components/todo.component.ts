import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular'

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [SimplebarAngularModule, NgbDropdownModule],
  template: `
    <div class="card">
      <div
        class="card-header d-flex justify-content-between align-items-center"
      >
        <h4 class="header-title">Todo</h4>
        <div ngbDropdown class="dropdown float-end">
          <a
            ngbDropdownToggle
            class="dropdown-toggle arrow-none card-drop"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="mdi mdi-dots-vertical"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu dropdown-menu-end">
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">Settings</a>
            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item">Action</a>
          </div>
        </div>
      </div>

      <div class="todoapp">
        <div class="card-body py-0">
          <div class="row">
            <div class="col">
              <h5 id="todo-message">
                <span id="todo-remaining">{{ countIt }}</span> of
                <span id="todo-total">{{ todoList.length }}</span> remaining
              </h5>
            </div>
            <div class="col-auto">
              <a
                class="float-end btn btn-light btn-sm"
                id="btn-archive"
                (click)="archiveTodo()"
                >Archive</a
              >
            </div>
          </div>
        </div>

        <ngx-simplebar class="card-body py-0 mb-0" style="max-height: 298px">
          <ul class="list-group list-group-flush todo-list" id="todo-list">
            @for (data of todoList; track $index) {
              <li class="list-group-item border-0 ps-0">
                <div class="form-check mb-0">
                  <input
                    type="checkbox"
                    class="form-check-input todo-done"
                    id="7"
                    [checked]="data.done"
                    (change)="changeTodo($event, $index)"
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

        <div class="card-body pt-2">
          <form
            name="todo-form"
            id="todo-form"
            class="needs-validation"
            novalidate
          >
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  id="todo-input-text"
                  name="todo-input-text"
                  class="form-control"
                  placeholder="Add new todo"
                  required
                />
                <div class="invalid-feedback">Please enter your task name</div>
              </div>
              <div class="col-auto d-grid">
                <button
                  class="btn-primary btn-md btn"
                  type="submit"
                  id="todo-btn-submit"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
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
  countIt = this.todo.filter(
    (item) => typeof item === 'object' && item.done == false
  ).length

  archiveTodo() {
    this.todoList = this.todo.filter((item) => item.done == false)
  }

  changeTodo(event: Event, i: number) {
    this.todoList[i].done = (event.target as HTMLInputElement).checked
    this.countIt = this.todo.filter(
      (item) => typeof item === 'object' && item.done == false
    ).length
  }
}
