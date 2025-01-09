import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FlatpickrDirective } from '@component/flatpickr/flatpickr.directive'
import {
  NgbDatepickerModule,
  NgbTimepickerModule,
} from '@ng-bootstrap/ng-bootstrap'
import { NgSelectModule } from '@ng-select/ng-select'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'

@Component({
  selector: 'app-advanced',
  standalone: true,
  imports: [
    PagetitleComponent,
    NgSelectModule,
    FormsModule,
    NgbDatepickerModule,
    FlatpickrDirective,
    NgxMaskDirective,
    NgxMaskPipe,
    NgbTimepickerModule,
  ],
  template: `
    <app-pagetitle
      title="Form Advanced"
      subtitle="Forms"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Select2</h4>
            <p class="text-muted font-14">
              Select2 gives you a customizable select box with support for
              searching, tagging, remote data sets, infinite scrolling, and many
              other highly used options.
            </p>

            <div class="row">
              <div class="col-lg-6">
                <p class="mb-1 fw-bold text-muted">Single Select</p>
                <p class="text-muted font-14">
                  Select2 can take a regular select box like this...
                </p>

                <ng-select
                  [items]="singleData"
                  bindLabel="name"
                  bindValue="name"
                  groupBy="label"
                  [(ngModel)]="selectedGroup"
                >
                  <ng-template ng-optgroup-tmp let-item="item">
                    {{ item.label || 'Unnamed group' }}
                  </ng-template>
                </ng-select>
              </div>
              <!-- end col -->

              <div class="col-lg-6">
                <p class="mb-1 fw-bold text-muted">Multiple Select</p>
                <p class="text-muted font-14">
                  Select2 can take a regular select box like this...
                </p>

                <ng-select
                  [items]="singleData"
                  bindLabel="name"
                  bindValue="name"
                  groupBy="label"
                  [(ngModel)]="selectedGroup"
                  [multiple]="true"
                >
                  <ng-template ng-optgroup-tmp let-item="item">
                    {{ item.label || 'Unnamed group' }}
                  </ng-template>
                </ng-select>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Switch</h4>
            <p class="text-muted font-14">Here are a few types of switches.</p>

            <!-- without label-->
            <input type="checkbox" id="switch0" data-switch="none" />
            <label for="switch0" data-off-label="" class="me-1"></label>

            <!-- Bool Switch-->
            <input type="checkbox" id="switch1" checked data-switch="bool" />
            <label for="switch1" data-off-label="Off" class="me-1"></label>

            <!-- Primary Switch-->
            <input type="checkbox" id="switch2" checked data-switch="primary" />
            <label for="switch2" data-off-label="Off" class="me-1"></label>

            <!-- Success Switch-->
            <input type="checkbox" id="switch3" checked data-switch="success" />
            <label for="switch3" data-off-label="No" class="me-1"></label>

            <!-- Info Switch-->
            <input type="checkbox" id="switch4" checked data-switch="info" />
            <label for="switch4" data-off-label="Off" class="me-1"></label>

            <!-- Warning Switch-->
            <input type="checkbox" id="switch5" checked data-switch="warning" />
            <label for="switch5" data-off-label="No" class="me-1"></label>

            <!-- Danger Switch-->
            <input type="checkbox" id="switch6" checked data-switch="danger" />
            <label for="switch6" data-off-label="Off" class="me-1"></label>

            <!-- Dark Switch-->
            <input
              type="checkbox"
              id="switch7"
              checked
              data-switch="secondary"
            />
            <label for="switch7" data-off-label="No" class="me-1"></label>

            <!-- Disbled Switch-->
            <input
              type="checkbox"
              id="switchdis"
              data-switch="primary"
              checked
              disabled
            />
            <label for="switchdis" data-off-label="Off"></label>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Bootstrap Datepicker</h4>
            <p class="text-muted font-14">
              Bootstrap-datepicker provides a flexible datepicker widget in the
              Bootstrap style.
            </p>

            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3 position-relative" id="datepicker1">
                  <label class="form-label">Date Picker</label>
                  <input
                    type="text"
                    class="form-control"
                    name="dp"
                    ngbDatepicker
                    #d="ngbDatepicker"
                    (click)="d.toggle()"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3 position-relative" id="datepicker4">
                  <label class="form-label">Autoclose</label>
                  <input
                    type="text"
                    class="form-control"
                    name="dp"
                    ngbDatepicker
                    #t="ngbDatepicker"
                    [autoClose]="'outside'"
                    (click)="t.toggle()"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3 position-relative" id="datepicker5">
                  <label class="form-label">Show Week Number</label>
                  <input
                    type="text"
                    class="form-control"
                    ngbDatepicker
                    #w="ngbDatepicker"
                    [showWeekNumbers]="true"
                    (click)="w.toggle()"
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3 position-relative" id="datepicker6">
                  <label class="form-label">Outside Days</label>
                  <input
                    type="text"
                    class="form-control"
                    ngbDatepicker
                    #m="ngbDatepicker"
                    [outsideDays]="'hidden'"
                    (click)="m.toggle()"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div>
                  <label class="form-label">Inline Datepicker</label>
                  <div data-provide="datepicker-inline">
                    <ngb-datepicker #dp />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Flatpickr - Date picker</h4>
            <p class="text-muted font-14">
              A lightweight and powerful datetimepicker
            </p>

            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Basic</label>
                  <input
                    type="text"
                    mwlFlatpickr
                    id="basic-datepicker"
                    class="form-control"
                    placeholder="Basic datepicker"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label">Date & Time</label>
                  <input
                    type="text"
                    mwlFlatpickr
                    [flatpickrOptions]="{
                      enableTime: true,
                      dateFormat: 'Y-m-d H:i'
                    }"
                    id="datetime-datepicker"
                    class="form-control"
                    placeholder="Date and Time"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label">Human-friendly Dates</label>
                  <input
                    type="text"
                    mwlFlatpickr
                    [flatpickrOptions]="{ altInput: true }"
                    id="humanfd-datepicker"
                    class="form-control"
                    placeholder="October 9, 2018"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label">MinDate and MaxDate</label>
                  <input
                    type="text"
                    mwlFlatpickr
                    [flatpickrOptions]="{
                      altInput: true,
                      minDate: '25-01-2024',
                      maxDate: '29-01-2024'
                    }"
                    id="minmax-datepicker"
                    class="form-control"
                    placeholder="mindate - maxdate"
                  />
                </div>

                <div class="mb-3">
                  <label class="form-label">Selecting multiple dates</label>
                  <input
                    type="text"
                    mwlFlatpickr
                    [flatpickrOptions]="{
                      altInput: true,
                      dateFormat: 'd M, Y',
                      mode: 'multiple'
                    }"
                    id="multiple-datepicker"
                    class="form-control"
                    placeholder="Multiple dates"
                  />
                </div>
              </div>
              <!-- end col -->

              <div class="col-lg-6 mt-3 mt-lg-0">
                <div class="mb-3">
                  <label class="form-label">Range Calendar</label>
                  <input
                    type="text"
                    mwlFlatpickr
                    [flatpickrOptions]="{ altInput: true, mode: 'range' }"
                    id="range-datepicker"
                    class="form-control"
                    placeholder="2018-10-03 to 2018-10-10"
                  />
                </div>

                <div>
                  <label class="form-label">Inline Calendar</label>
                  <input
                    type="text"
                    mwlFlatpickr
                    [flatpickrOptions]="{ altInput: true, inline: true }"
                    id="inline-datepicker"
                    class="form-control"
                    placeholder="Inline calendar"
                  />
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Flatpickr - Time Picker</h4>
            <p class="text-muted font-14">
              A lightweight and powerful datetimepicker
            </p>

            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label">Default Time Picker</label>
                  <div class="input-group">
                    <input
                      id="basic-timepicker"
                      mwlFlatpickr
                      [flatpickrOptions]="{
                        noCalendar: true,
                        dateFormat: 'H:i',
                        time_24hr: true,
                        enableTime: true
                      }"
                      type="text"
                      class="form-control"
                      placeholder="Basic timepicker"
                    />
                    <span class="input-group-text"
                      ><i class="ri-time-line"></i
                    ></span>
                  </div>
                </div>
              </div>
              <!-- end col -->

              <div class="col-lg-6 mt-3 mt-lg-0">
                <div class="mb-0">
                  <label class="form-label">Inline</label>
                  <div class="input-group">
                    <input
                      id="24hours-timepicker"
                      mwlFlatpickr
                      [flatpickrOptions]="{
                        noCalendar: true,
                        dateFormat: 'H:i',
                        time_24hr: true,
                        enableTime: true,
                        inline: true
                      }"
                      type="text"
                      class="form-control w-100"
                      placeholder="16:21"
                    />
                    <span class="input-group-text"
                      ><i class="ri-time-line"></i
                    ></span>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Input Masks</h4>
            <p class="text-muted font-14">
              A jQuery Plugin to make masks on form fields and HTML elements.
            </p>

            <div class="row">
              <div class="col-md-6">
                <form action="#">
                  <div class="mb-3">
                    <label class="form-label">Date</label>
                    <input type="text" class="form-control" mask="00/00/0000" />
                    <span class="font-13 text-muted">e.g "DD/MM/YYYY"</span>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Hour</label>
                    <input type="text" class="form-control" mask="00:00:00" />
                    <span class="font-13 text-muted">e.g "HH:MM:SS"</span>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Date & Hour</label>
                    <input
                      type="text"
                      class="form-control"
                      mask="00/00/0000 00:00:00"
                    />
                    <span class="font-13 text-muted"
                      >e.g "DD/MM/YYYY HH:MM:SS"</span
                    >
                  </div>
                  <div class="mb-3">
                    <label class="form-label">ZIP Code</label>
                    <input type="text" class="form-control" mask="00000-000" />
                    <span class="font-13 text-muted">e.g "xxxxx-xxx"</span>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Crazy Zip Code</label>
                    <input type="text" class="form-control" mask="0-00-00-00" />
                    <span class="font-13 text-muted">e.g "x-xx-xx-xx"</span>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Money</label>
                    <input
                      type="text"
                      class="form-control"
                      mask="000.000.000.000.000,00"
                      data-reverse="true"
                    />
                    <span class="font-13 text-muted">e.g "Your money"</span>
                  </div>
                  <div>
                    <label class="form-label">Money 2</label>
                    <input
                      type="text"
                      class="form-control"
                      mask="#.##0,00"
                      data-reverse="true"
                    />
                    <span class="font-13 text-muted">e.g "#.##0,00"</span>
                  </div>
                </form>
              </div>
              <!-- end col -->

              <div class="col-md-6">
                <form action="#">
                  <div class="mb-3">
                    <label class="form-label">Telephone</label>
                    <input type="text" class="form-control" mask="0000-0000" />
                    <span class="font-13 text-muted">e.g "xxxx-xxxx"</span>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Telephone with Code Area</label>
                    <input
                      type="text"
                      class="form-control"
                      mask="(00) 0000-0000"
                    />
                    <span class="font-13 text-muted">e.g "(xx) xxxx-xxxx"</span>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">US Telephone</label>
                    <input
                      type="text"
                      class="form-control"
                      mask="(000) 000-0000"
                    />
                    <span class="font-13 text-muted">e.g "(xxx) xxx-xxxx"</span>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">São Paulo Celphones</label>
                    <input
                      type="text"
                      class="form-control"
                      mask="(00) 00000-0000"
                    />
                    <span class="font-13 text-muted"
                      >e.g "(xx) xxxxx-xxxx"</span
                    >
                  </div>
                  <div class="mb-3">
                    <label class="form-label">CPF</label>
                    <input
                      type="text"
                      class="form-control"
                      mask="000.000.000-00"
                      data-reverse="true"
                    />
                    <span class="font-13 text-muted"
                      >e.g "xxx.xxx.xxxx-xx"</span
                    >
                  </div>
                  <div class="mb-3">
                    <label class="form-label">CNPJ</label>
                    <input
                      type="text"
                      class="form-control"
                      mask="00.000.000/0000-00"
                      data-reverse="true"
                    />
                    <span class="font-13 text-muted"
                      >e.g "xx.xxx.xxx/xxxx-xx"</span
                    >
                  </div>
                  <div>
                    <label class="form-label">IP Address</label>
                    <input
                      type="text"
                      class="form-control"
                      mask="099.099.099.099"
                      data-reverse="true"
                    />
                    <span class="font-13 text-muted"
                      >e.g "xxx.xxx.xxx.xxx"</span
                    >
                  </div>
                </form>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Timepicker</h4>
            <p class="text-muted font-14">
              Easily select a time for a text input using your mouse or
              keyboards arrow keys. Specify element <code>ngb-timepicker</code>
              and you would have nice timepicker input element.
            </p>

            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Default Time Picker E.g.
                    <code> meridian="true"</code></label
                  >

                  <ngb-timepicker [(ngModel)]="time" [meridian]="true" />
                </div>

                <div class="mb-0">
                  <label class="form-label">24 Hour Mode Time Picker </label>
                  <ngb-timepicker [(ngModel)]="time" />
                </div>
              </div>
              <!-- end col -->

              <div class="col-lg-6 mt-3 mt-lg-0">
                <div class="mb-0">
                  <label class="form-label"
                    >Specify a seconds field E.g.
                    <code>seconds="true"</code></label
                  >
                  <ngb-timepicker [(ngModel)]="time" [seconds]="true" />
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
  providers: [provideNgxMask()],
})
export class AdvancedComponent {
  selectedGroup: string = ''
  time = { hour: 13, minute: 30 }

  singleData = [
    {
      name: 'Alaska',
      label: 'Alaskan/Hawaiian Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Hawaii',
      label: 'Alaskan/Hawaiian Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'California',
      label: 'Pacific Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Nevada',
      label: 'Pacific Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Oregon',
      label: 'Pacific Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Washington',
      label: 'Pacific Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Arizona',
      label: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Colorado',
      label: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Idaho',
      label: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Montana',
      label: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Nebraska',
      label: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'New Mexico',
      label: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'North Dakota',
      label: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Utah',
      label: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Wyoming',
      label: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Alabama',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Arkansas',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Illinois',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Iowa',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Kansas',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Kentucky',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Louisiana',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Minnesota',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Mississippi',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Missouri',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Oklahoma',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'South Dakota',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Texas',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Tennessee',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Wisconsin',
      label: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Connecticut',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Delaware',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Florida',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Georgia',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Indiana',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Maine',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Maryland',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Massachusetts',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Michigan',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'New Hampshire',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'New Jersey',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'New York',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'North Carolina',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Ohio',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Pennsylvania',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Rhode Island',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'South Carolina',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Vermont',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Virginia',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'West Virginia',
      label: 'Eastern Time Zone',
      child: { state: 'Active' },
    },
  ]

  constructor() {}
}
