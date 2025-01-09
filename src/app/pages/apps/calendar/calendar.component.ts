import { Component, TemplateRef, ViewChild, inject } from '@angular/core'

// Calendar
import { FullCalendarModule } from '@fullcalendar/angular'
import { CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core'
import interactionPlugin, {
  DateClickArg,
  Draggable,
} from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import listPlugin from '@fullcalendar/list'
import { Store } from '@ngrx/store'
import {
  addCalendar,
  deleteCalendar,
  fetchCalendar,
  updateCalendar,
} from '@store/calendar/calendar.actions'
import { getEvents } from '@store/calendar/calendar.selectors'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import Swal from 'sweetalert2'
import { externalEvents } from '@core/data'
import { CommonModule } from '@angular/common'
import { externalModel } from '@core/data/calendar'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

export type CalendarEvent = {
  id: string
  title: string
  start: Date | null
  end?: Date | null
  allDay?: boolean
  classNames?: string[]
}

type UpdateEventType = {
  event: CalendarEvent
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    PagetitleComponent,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <app-pagetitle
      title="Calendar"
      subtitle="Apps"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-3">
                <div class="d-grid">
                  <button
                    class="btn btn-lg font-16 btn-danger"
                    id="btn-new-event"
                    (click)="createEvent()"
                  >
                    <i class="mdi mdi-plus-circle-outline"></i> Create New Event
                  </button>
                </div>
                <div id="external-events" class="mt-3">
                  <p class="text-muted">
                    Drag and drop your event or click in the calendar
                  </p>
                  @for (data of externalEvents; track $index) {
                    <div
                      id="{{ data.className }}"
                      class="external-event {{ data.className }}-lighten {{
                        data.textClass
                      }}"
                    >
                      <i
                        class="mdi mdi-checkbox-blank-circle me-2 vertical-middle"
                      ></i>
                      {{ data.title }}
                    </div>
                  }
                </div>

                <div class="mt-5 d-none d-xl-block">
                  <h5 class="text-center">How It Works ?</h5>

                  <ul class="ps-3">
                    <li class="text-muted mb-3">
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged.
                    </li>
                    <li class="text-muted mb-3">
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage.
                    </li>
                    <li class="text-muted mb-3">
                      It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially
                      unchanged.
                    </li>
                  </ul>
                </div>
              </div>
              <!-- end col-->

              <div class="col-lg-9">
                <div class="mt-4 mt-lg-0">
                  <div id="calendar">
                    <full-calendar
                      [options]="calendarOptions"
                      [events]="this.calendarEvents"
                    ></full-calendar>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card body-->
        </div>
        <!-- end card -->

        <!-- Add New Event MODAL -->
        <ng-template #modalShow let-modal id="event-modal" tabindex="-1">
          <form
            [formGroup]="formData"
            (ngSubmit)="saveEvent()"
            class="needs-validation"
            name="event-form"
            id="form-event"
            novalidate
          >
            <div class="modal-header py-3 px-4 border-bottom-0">
              <h5 class="modal-title" id="modal-title">Event</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                (click)="modal.dismiss('Cross click')"
              ></button>
            </div>
            <div class="modal-body px-4 pb-4 pt-0">
              <div class="row">
                <div class="col-12">
                  <div class="mb-3">
                    <label class="control-label form-label">Event Name</label>
                    <input
                      class="form-control"
                      placeholder="Insert Event Name"
                      type="text"
                      name="title"
                      id="event-title"
                      formControlName="title"
                      required
                    />
                    <div class="invalid-feedback">
                      Please provide a valid event name
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="control-label form-label">Category</label>
                    <select
                      class="form-select"
                      name="category"
                      id="event-category"
                      formControlName="className"
                      required
                    >
                      <option value="bg-danger" selected>Danger</option>
                      <option value="bg-success">Success</option>
                      <option value="bg-primary">Primary</option>
                      <option value="bg-info">Info</option>
                      <option value="bg-dark">Dark</option>
                      <option value="bg-warning">Warning</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid event category
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  @if (isEditMode) {
                    <button
                      type="button"
                      class="btn btn-danger"
                      id="btn-delete-event"
                        
                    >
                      Delete
                    </button>
                  }
                </div>
                <div class="col-6 text-end">
                  <button
                    type="button"
                    class="btn btn-light me-1"
                    data-bs-dismiss="modal"
                    (click)="modal.dismiss('Cross click')"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-success"
                    id="btn-save-event"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </ng-template>
        <!-- end modal-->
      </div>
      <!-- end col-12 -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class CalendarComponent {
  calendarEvents!: EventInput[]
  formData!: UntypedFormGroup
  externalEvents!: externalModel[]
  editEvent: CalendarEvent | null = null
  isEditMode = false
  currentDate!: Date

  private store = inject(Store)
  private modalService = inject(NgbModal)

  @ViewChild('modalShow') modalShow!: TemplateRef<HTMLElement | HTMLElement[]>

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    // Fetch Calendar Event
    this.store.dispatch(fetchCalendar())
    this.store.select(getEvents).subscribe((data) => {
      this.calendarEvents = data
    })

    this.externalEvents = externalEvents

    // Validation
    this.formData = this.formBuilder.group({
      title: ['', [Validators.required]],
      className: ['', [Validators.required]],
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeDraggable()
    }, 500)
  }

  private initializeDraggable() {
    const externalEventContainerEl = document.getElementById('external-events')

    if (externalEventContainerEl) {
      new Draggable(externalEventContainerEl, {
        itemSelector: '.external-event',
        eventData: (eventEl) => ({
          id: Math.floor(Math.random() * 11000),
          title: eventEl.innerText,
          allDay: true,
          start: new Date(),
          className: eventEl.getAttribute('id'),
        }),
      })
    }
  }

  calendarOptions: CalendarOptions = {
    plugins: [
      dayGridPlugin,
      listPlugin,
      interactionPlugin,
      timeGridPlugin,
      bootstrapPlugin,
    ],
    headerToolbar: {
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
      center: 'title',
      left: 'prev,next today',
    },
    bootstrapFontAwesome: false,
    buttonText: {
      today: 'Today',
      month: 'Month',
      week: 'Week',
      day: 'Day',
      list: 'List',
      prev: 'Prev',
      next: 'Next',
    },
    themeSystem: 'bootstrap',
    initialView: 'dayGridMonth',
    initialEvents: this.calendarEvents,
    height: window.innerHeight - 200,
    droppable: true,
    editable: true,
    selectable: true,
    eventReceive: (info) => this.updateEvent(info),
    eventClick: this.handleEventClick.bind(this),
    dateClick: this.openModal.bind(this),
  }

  // Create New Event
  createEvent() {
    this.currentDate = new Date()
    this.modalService.open(this.modalShow, { centered: true })
  }

  updateEvent(info: UpdateEventType) {
    var newEvent = {
      id: info.event.id,
      title: info.event.title,
      start: info.event.start!,
      allDay: info.event.allDay,
      className: info.event.classNames,
    }
    this.store.dispatch(addCalendar({ events: newEvent }))
  }

  openModal(events: DateClickArg) {
    this.currentDate = events.date
    this.modalService.open(this.modalShow, { centered: true })
  }

  // Handle Edit Event
  handleEventClick(clickInfo: EventClickArg) {
    this.isEditMode = true
    this.editEvent = clickInfo.event
    this.formData.patchValue({
      title: this.editEvent.title,
      className: this.editEvent.classNames,
    })
    this.modalService.open(this.modalShow, { centered: true })
  }

  saveEvent() {
    if (this.isEditMode == true) {
      const newEvent = {
        ...this.formData.value,
        id: this.editEvent?.id,
        start: this.editEvent?.start,
        end: this.editEvent?.end ? this.editEvent?.end : this.editEvent?.start,
      }
      this.store.dispatch(updateCalendar({ events: newEvent }))
    } else {
      const newEvent = {
        id: this.calendarEvents.length + 1,
        ...this.formData.value,
        start: this.currentDate,
      }
      this.store.dispatch(addCalendar({ events: newEvent }))
    }
    this.formData.reset()
    this.modalService.dismissAll()
    this.isEditMode = false
  }

  // Delete Event
  deleteEvent() {
    this.store.dispatch(
      deleteCalendar({ id: this.editEvent?.id ? this.editEvent?.id : '' })
    )
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Event has been deleted',
      showConfirmButton: false,
      timer: 1000,
    })
    this.modalService.dismissAll()
  }
}
