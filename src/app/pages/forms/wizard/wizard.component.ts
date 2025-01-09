import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper'
import { CommonModule } from '@angular/common'
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { NgStepperComponent, NgStepperModule } from 'angular-ng-stepper'
import { Validators } from 'ngx-editor'

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [
    PagetitleComponent,
    CdkStepperModule,
    NgStepperModule,
    NgbProgressbarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <app-pagetitle
      title="Form Wizard"
      subtitle="Forms"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Basic Wizard</h4>

            <form>
              <ng-stepper
                cdkStepper
                [linear]="true"
                id="basicwizard"
                class="cdksteppercontent nav nav-pills progress-bar-tab custom-nav"
              >
                <cdk-step class="nav-justified form-wizard-header mb-4">
                  <ng-template cdkStepLabel class="nav-item">
                    <a
                      data-bs-toggle="tab"
                      data-toggle="tab"
                      class="nav-link rounded-0 py-2"
                    >
                      <i
                        class="mdi mdi-account-circle font-18 align-middle me-1"
                      ></i>
                      <span class="d-none d-sm-inline">Account</span>
                    </a>
                  </ng-template>
                  <div class="tab-pane" id="basictab1">
                    <div class="row">
                      <div class="col-12">
                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="userName"
                            >User name</label
                          >
                          <div class="col-md-9">
                            <input
                              type="text"
                              class="form-control"
                              id="userName"
                              name="userName"
                              value="hyper"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="password">
                            Password</label
                          >
                          <div class="col-md-9">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              class="form-control"
                              value="123456789"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="confirm"
                            >Re Password</label
                          >
                          <div class="col-md-9">
                            <input
                              type="password"
                              id="confirm"
                              name="confirm"
                              class="form-control"
                              value="123456789"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->

                    <ul class="list-inline wizard mb-0">
                      <li class="next list-inline-item float-end">
                        <button
                          type="button"
                          class="btn btn-info"
                          cdkStepperNext
                        >
                          Add More Info <i class="mdi mdi-arrow-right ms-1"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </cdk-step>
                <cdk-step>
                  <ng-template cdkStepLabel class="nav-item">
                    <a
                      data-bs-toggle="tab"
                      data-toggle="tab"
                      class="nav-link rounded-0 py-2"
                    >
                      <i
                        class="mdi mdi-face-man-profile font-18 align-middle me-1"
                      ></i>
                      <span class="d-none d-sm-inline">Profile</span>
                    </a>
                  </ng-template>
                  <div class="tab-pane" id="basictab2">
                    <div class="row">
                      <div class="col-12">
                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="name">
                            First name</label
                          >
                          <div class="col-md-9">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              class="form-control"
                              value="Francis"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="surname">
                            Last name</label
                          >
                          <div class="col-md-9">
                            <input
                              type="text"
                              id="surname"
                              name="surname"
                              class="form-control"
                              value="Brinkman"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="email"
                            >Email</label
                          >
                          <div class="col-md-9">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              class="form-control"
                              value="cory1979@hotmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->

                    <ul class="pager wizard mb-0 list-inline">
                      <li class="previous list-inline-item">
                        <button
                          type="button"
                          class="btn btn-light"
                          cdkStepperPrevious
                        >
                          <i class="mdi mdi-arrow-left me-1"></i> Back to
                          Account
                        </button>
                      </li>
                      <li class="next list-inline-item float-end">
                        <button
                          type="button"
                          class="btn btn-info"
                          cdkStepperNext
                        >
                          Add More Info <i class="mdi mdi-arrow-right ms-1"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </cdk-step>
                <cdk-step>
                  <ng-template cdkStepLabel class="nav-item">
                    <a
                      data-bs-toggle="tab"
                      data-toggle="tab"
                      class="nav-link rounded-0 py-2"
                    >
                      <i
                        class="mdi mdi-checkbox-marked-circle-outline font-18 align-middle me-1"
                      ></i>
                      <span class="d-none d-sm-inline">Finish</span>
                    </a>
                  </ng-template>
                  <div class="tab-pane" id="basictab3">
                    <div class="row">
                      <div class="col-12">
                        <div class="text-center">
                          <h2 class="mt-0">
                            <i class="mdi mdi-check-all"></i>
                          </h2>
                          <h3 class="mt-0">Thank you !</h3>

                          <p class="w-75 mb-2 mx-auto">
                            Quisque nec turpis at urna dictum luctus.
                            Suspendisse convallis dignissim eros at volutpat. In
                            egestas mattis dui. Aliquam mattis dictum aliquet.
                          </p>

                          <div class="mb-3">
                            <div class="form-check d-inline-block">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="customCheck1"
                              />
                              <label class="form-check-label" for="customCheck1"
                                >I agree with the Terms and Conditions</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->

                    <ul class="pager wizard mb-0 list-inline mt-1">
                      <li class="previous list-inline-item">
                        <button
                          type="button"
                          class="btn btn-light"
                          cdkStepperPrevious
                        >
                          <i class="mdi mdi-arrow-left me-1"></i> Back to
                          Profile
                        </button>
                      </li>
                      <li class="next list-inline-item float-end">
                        <button type="button" class="btn btn-info">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </div>
                </cdk-step>
              </ng-stepper>
              <!-- end #basicwizard-->
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Button Wizard</h4>

            <div id="btnwizard">
              <ng-stepper
                cdkStepper
                [linear]="true"
                class="cdksteppercontent nav nav-pills nav-justified"
              >
                <cdk-step
                  [optional]="false"
                  class="nav-item form-wizard-header"
                >
                  <ng-template cdkStepLabel>
                    <a class="nav-link rounded-0 py-2">
                      <i
                        class="mdi mdi-account-circle font-18 align-middle me-1"
                      ></i>
                      <span class="d-none d-sm-inline">Account</span>
                    </a>
                  </ng-template>
                  <div class="tab-pane" id="tab12">
                    <div class="row">
                      <div class="col-12">
                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="userName2"
                            >User name</label
                          >
                          <div class="col-md-9">
                            <input
                              type="text"
                              class="form-control"
                              id="userName2"
                              name="userName2"
                              value="hyper"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label
                            class="col-md-3 col-form-label"
                            for="password2"
                          >
                            Password</label
                          >
                          <div class="col-md-9">
                            <input
                              type="password"
                              id="password2"
                              name="password2"
                              class="form-control"
                              value="123456789"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="confirm2"
                            >Re Password</label
                          >
                          <div class="col-md-9">
                            <input
                              type="password"
                              id="confirm2"
                              name="confirm2"
                              class="form-control"
                              value="123456789"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                  </div>
                  <div class="float-start d-flex gap-1">
                    <button
                      type="button"
                      class="btn btn-info button-previous"
                      cdkStepperPrevious
                      disabled
                    >
                      Previous
                    </button>
                  </div>

                  <div class="float-end d-flex gap-1">
                    <button
                      type="button"
                      class="btn btn-info button-next"
                      cdkStepperNext
                    >
                      Next
                    </button>
                  </div>
                </cdk-step>
                <cdk-step [optional]="false" class="nav-item">
                  <ng-template cdkStepLabel>
                    <a class="nav-link rounded-0 py-2">
                      <i
                        class="mdi mdi-face-man-profile font-18 align-middle me-1"
                      ></i>
                      <span class="d-none d-sm-inline">Profile</span>
                    </a>
                  </ng-template>
                  <div class="tab-pane" id="tab22">
                    <div class="row">
                      <div class="col-12">
                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="name2">
                            First name</label
                          >
                          <div class="col-md-9">
                            <input
                              type="text"
                              id="name2"
                              name="name2"
                              class="form-control"
                              value="Francis"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="surname2">
                            Last name</label
                          >
                          <div class="col-md-9">
                            <input
                              type="text"
                              id="surname2"
                              name="surname2"
                              class="form-control"
                              value="Brinkman"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label class="col-md-3 col-form-label" for="email2"
                            >Email</label
                          >
                          <div class="col-md-9">
                            <input
                              type="email"
                              id="email2"
                              name="email2"
                              class="form-control"
                              value="cory1979@hotmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                  </div>
                  <div class="float-start d-flex gap-1">
                    <button
                      type="button"
                      class="btn btn-info button-previous"
                      cdkStepperPrevious
                    >
                      Previous
                    </button>
                  </div>

                  <div class="float-end d-flex gap-1">
                    <button
                      type="button"
                      class="btn btn-info button-next"
                      cdkStepperNext
                    >
                      Next
                    </button>
                  </div>
                </cdk-step>
                <cdk-step [optional]="false" class="nav-item">
                  <ng-template cdkStepLabel>
                    <a class="nav-link rounded-0 py-2">
                      <i
                        class="mdi mdi-checkbox-marked-circle-outline font-18 align-middle me-1"
                      ></i>
                      <span class="d-none d-sm-inline">Finish</span>
                    </a>
                  </ng-template>
                  <div class="tab-pane" id="tab32">
                    <div class="row">
                      <div class="col-12">
                        <div class="text-center">
                          <h2 class="mt-0">
                            <i class="mdi mdi-check-all"></i>
                          </h2>
                          <h3 class="mt-0">Thank you !</h3>

                          <p class="w-75 mb-2 mx-auto">
                            Quisque nec turpis at urna dictum luctus.
                            Suspendisse convallis dignissim eros at volutpat. In
                            egestas mattis dui. Aliquam mattis dictum aliquet.
                          </p>

                          <div class="mb-3">
                            <div class="form-check d-inline-block">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="customCheck2"
                              />
                              <label class="form-check-label" for="customCheck2"
                                >I agree with the Terms and Conditions</label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                  </div>
                  <div class="float-start d-flex gap-1">
                    <button
                      type="button"
                      class="btn btn-info button-previous"
                      cdkStepperPrevious
                    >
                      Previous
                    </button>
                  </div>

                  <div class="float-end d-flex gap-1">
                    <button
                      type="button"
                      class="btn btn-info button-next"
                      cdkStepperNext
                      disabled
                    >
                      Next
                    </button>
                  </div>
                </cdk-step>
              </ng-stepper>
            </div>
            <!-- end #btnwizard-->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Wizard With Progress Bar</h4>

            <form>
              <div id="progressbarwizard">
                <div id="bar" class="progress mb-3" style="height: 7px">
                  <ngb-progressbar
                    [value]="100"
                    [striped]="true"
                    type="success"
                    [animated]="true"
                    class="wizardprogress"
                    [style.width]="
                      ((cdkSteppers.selectedIndex + 1) /
                        cdkSteppers.steps.length) *
                        100 +
                      '%'
                    "
                  ></ngb-progressbar>
                </div>
                <ng-stepper
                  #cdkSteppers
                  [linear]="true"
                  class="nav nav-pills nav-justified mb-3"
                >
                  <cdk-step
                    [optional]="false"
                    class="form-wizard-header nav-item"
                  >
                    <ng-template cdkStepLabel>
                      <a class="nav-link rounded-0 py-2">
                        <i
                          class="mdi mdi-account-circle font-18 align-middle me-1"
                        ></i>
                        <span class="d-none d-sm-inline">Account</span>
                      </a>
                    </ng-template>
                    <div class="tab-pane" id="account-2">
                      <div class="row">
                        <div class="col-12">
                          <div class="row mb-3">
                            <label
                              class="col-md-3 col-form-label"
                              for="userName1"
                              >User name</label
                            >
                            <div class="col-md-9">
                              <input
                                type="text"
                                class="form-control"
                                id="userName1"
                                name="userName1"
                                value="hyper"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-md-3 col-form-label"
                              for="password1"
                            >
                              Password</label
                            >
                            <div class="col-md-9">
                              <input
                                type="password"
                                id="password1"
                                name="password1"
                                class="form-control"
                                value="123456789"
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              class="col-md-3 col-form-label"
                              for="confirm1"
                              >Re Password</label
                            >
                            <div class="col-md-9">
                              <input
                                type="password"
                                id="confirm1"
                                name="confirm1"
                                class="form-control"
                                value="123456789"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->

                      <ul class="list-inline wizard mb-0">
                        <li class="next list-inline-item float-end">
                          <button
                            type="button"
                            class="btn btn-info"
                            cdkStepperNext
                          >
                            Add More Info
                            <i class="mdi mdi-arrow-right ms-1"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </cdk-step>
                  <cdk-step
                    [optional]="false"
                    class="form-wizard-header nav-item"
                  >
                    <ng-template cdkStepLabel>
                      <a class="nav-link rounded-0 py-2">
                        <i
                          class="mdi mdi-face-man-profile font-18 align-middle me-1"
                        ></i>
                        <span class="d-none d-sm-inline">Profile</span>
                      </a>
                    </ng-template>
                    <div class="tab-pane" id="profile-tab-2">
                      <div class="row">
                        <div class="col-12">
                          <div class="row mb-3">
                            <label class="col-md-3 col-form-label" for="name1">
                              First name</label
                            >
                            <div class="col-md-9">
                              <input
                                type="text"
                                id="name1"
                                name="name1"
                                class="form-control"
                                value="Francis"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-md-3 col-form-label"
                              for="surname1"
                            >
                              Last name</label
                            >
                            <div class="col-md-9">
                              <input
                                type="text"
                                id="surname1"
                                name="surname1"
                                class="form-control"
                                value="Brinkman"
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label class="col-md-3 col-form-label" for="email1"
                              >Email</label
                            >
                            <div class="col-md-9">
                              <input
                                type="email"
                                id="email1"
                                name="email1"
                                class="form-control"
                                value="cory1979@hotmail.com"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                      <ul class="pager wizard mb-0 list-inline">
                        <li class="previous list-inline-item">
                          <button
                            type="button"
                            class="btn btn-light"
                            cdkStepperPrevious
                          >
                            <i class="mdi mdi-arrow-left me-1"></i> Back to
                            Account
                          </button>
                        </li>
                        <li class="next list-inline-item float-end">
                          <button
                            type="button"
                            class="btn btn-info"
                            cdkStepperNext
                          >
                            Add More Info
                            <i class="mdi mdi-arrow-right ms-1"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </cdk-step>
                  <cdk-step
                    [optional]="false"
                    class="form-wizard-header nav-item"
                  >
                    <ng-template cdkStepLabel>
                      <a class="nav-link rounded-0 py-2">
                        <i
                          class="mdi mdi-checkbox-marked-circle-outline font-18 align-middle me-1"
                        ></i>
                        <span class="d-none d-sm-inline">Finish</span>
                      </a>
                    </ng-template>
                    <div class="tab-pane" id="finish-2">
                      <div class="row">
                        <div class="col-12">
                          <div class="text-center">
                            <h2 class="mt-0">
                              <i class="mdi mdi-check-all"></i>
                            </h2>
                            <h3 class="mt-0">Thank you !</h3>

                            <p class="w-75 mb-2 mx-auto">
                              Quisque nec turpis at urna dictum luctus.
                              Suspendisse convallis dignissim eros at volutpat.
                              In egestas mattis dui. Aliquam mattis dictum
                              aliquet.
                            </p>

                            <div class="mb-3">
                              <div class="form-check d-inline-block">
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="customCheck3"
                                />
                                <label
                                  class="form-check-label"
                                  for="customCheck3"
                                  >I agree with the Terms and Conditions</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                      <ul class="pager wizard mb-0 list-inline mt-1">
                        <li class="previous list-inline-item">
                          <button
                            type="button"
                            class="btn btn-light"
                            cdkStepperPrevious
                          >
                            <i class="mdi mdi-arrow-left me-1"></i> Back to
                            Profile
                          </button>
                        </li>
                        <li class="next list-inline-item float-end">
                          <button type="button" class="btn btn-info">
                            Submit
                          </button>
                        </li>
                      </ul>
                    </div>
                  </cdk-step>
                </ng-stepper>
              </div>
              <!-- end #progressbarwizard-->
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Wizard With Form Validation</h4>

            <div id="rootwizard">
              <ng-stepper
                #stepper
                [linear]="true"
                class="nav nav-pills nav-justified mb-3"
              >
                <cdk-step class="nav-item" data-target-form="#accountForm">
                  <ng-template cdkStepLabel>
                    <a class="nav-link rounded-0 py-2">
                      <i
                        class="mdi mdi-account-circle font-18 align-middle me-1"
                      ></i>
                      <span class="d-none d-sm-inline">Account</span>
                    </a>
                  </ng-template>

                  <div class="tab-pane" id="first">
                    <form
                      id="accountForm"
                      method="post"
                      action="#"
                      class="form-horizontal"
                      [formGroup]="myForm"
                    >
                      <div class="row">
                        <div class="col-12">
                          <div class="row mb-3">
                            <label
                              class="col-md-3 col-form-label"
                              for="userName3"
                              >User name</label
                            >
                            <div class="col-md-9">
                              <input
                                type="text"
                                class="form-control"
                                id="userName3"
                                name="userName3"
                                required
                                formControlName="userName"
                                [ngClass]="{
                                  'is-invalid':
                                    submit && form['userName'].errors
                                }"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-md-3 col-form-label"
                              for="password3"
                            >
                              Password</label
                            >
                            <div class="col-md-9">
                              <input
                                type="password"
                                id="password3"
                                name="password3"
                                class="form-control"
                                required
                                formControlName="password"
                                [ngClass]="{
                                  'is-invalid':
                                    submit && form['password'].errors
                                }"
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              class="col-md-3 col-form-label"
                              for="confirm3"
                              >Re Password</label
                            >
                            <div class="col-md-9">
                              <input
                                type="password"
                                id="confirm3"
                                name="confirm3"
                                class="form-control"
                                required
                                formControlName="repassword"
                                [ngClass]="{
                                  'is-invalid':
                                    submit && form['repassword'].errors
                                }"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </form>
                    <ul class="list-inline wizard mb-0">
                      <li class="next list-inline-item float-end">
                        <button
                          type="button"
                          class="btn btn-info"
                          (click)="nextStep(1)"
                        >
                          Add More Info <i class="mdi mdi-arrow-right ms-1"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </cdk-step>
                <cdk-step class="nav-item" data-target-form="#profileForm">
                  <ng-template cdkStepLabel>
                    <a class="nav-link rounded-0 py-2">
                      <i
                        class="mdi mdi-face-man-profile font-18 align-middle me-1"
                      ></i>
                      <span class="d-none d-sm-inline">Profile</span>
                    </a>
                  </ng-template>

                  <div class="tab-pane" id="second">
                    <form
                      id="profileForm"
                      method="post"
                      action="#"
                      class="form-horizontal"
                      [formGroup]="profileForm"
                    >
                      <div class="row">
                        <div class="col-12">
                          <div class="row mb-3">
                            <label class="col-md-3 col-form-label" for="name3">
                              First name</label
                            >
                            <div class="col-md-9">
                              <input
                                type="text"
                                id="name3"
                                name="name3"
                                class="form-control"
                                required
                                formControlName="firstName"
                                [ngClass]="{
                                  'is-invalid':
                                    submit && secondform['firstName'].errors
                                }"
                              />
                            </div>
                          </div>
                          <div class="row mb-3">
                            <label
                              class="col-md-3 col-form-label"
                              for="surname3"
                            >
                              Last name</label
                            >
                            <div class="col-md-9">
                              <input
                                type="text"
                                id="surname3"
                                name="surname3"
                                class="form-control"
                                required
                                formControlName="lastName"
                                [ngClass]="{
                                  'is-invalid':
                                    submit && secondform['lastName'].errors
                                }"
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label class="col-md-3 col-form-label" for="email3"
                              >Email</label
                            >
                            <div class="col-md-9">
                              <input
                                type="email"
                                id="email3"
                                name="email3"
                                class="form-control"
                                required
                                formControlName="email"
                                [ngClass]="{
                                  'is-invalid':
                                    submit && secondform['email'].errors
                                }"
                              />
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </form>
                    <ul class="pager wizard mb-0 list-inline">
                      <li class="previous list-inline-item">
                        <button
                          type="button"
                          class="btn btn-light"
                          cdkStepperPrevious
                        >
                          <i class="mdi mdi-arrow-left me-1"></i> Back to
                          Account
                        </button>
                      </li>
                      <li class="next list-inline-item float-end">
                        <button
                          type="button"
                          class="btn btn-info"
                          (click)="nextStep(2)"
                        >
                          Add More Info <i class="mdi mdi-arrow-right ms-1"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </cdk-step>
                <cdk-step class="nav-item" data-target-form="#otherForm">
                  <ng-template cdkStepLabel>
                    <a class="nav-link rounded-0 py-2">
                      <i
                        class="mdi mdi-checkbox-marked-circle-outline font-18 align-middle me-1"
                      ></i>
                      <span class="d-none d-sm-inline">Finish</span>
                    </a>
                  </ng-template>
                  <div class="tab-pane" id="third">
                    <form
                      id="otherForm"
                      method="post"
                      action="#"
                      class="form-horizontal"
                    >
                      <div class="row">
                        <div class="col-12">
                          <div class="text-center">
                            <h2 class="mt-0">
                              <i class="mdi mdi-check-all"></i>
                            </h2>
                            <h3 class="mt-0">Thank you !</h3>

                            <p class="w-75 mb-2 mx-auto">
                              Quisque nec turpis at urna dictum luctus.
                              Suspendisse convallis dignissim eros at volutpat.
                              In egestas mattis dui. Aliquam mattis dictum
                              aliquet.
                            </p>

                            <div class="mb-3">
                              <div class="form-check d-inline-block">
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="customCheck4"
                                  required
                                />
                                <label
                                  class="form-check-label"
                                  for="customCheck4"
                                  >I agree with the Terms and Conditions</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </form>
                    <ul class="pager wizard mb-0 list-inline mt-1">
                      <li class="previous list-inline-item">
                        <button
                          type="button"
                          class="btn btn-light"
                          cdkStepperPrevious
                        >
                          <i class="mdi mdi-arrow-left me-1"></i> Back to
                          Profile
                        </button>
                      </li>
                      <li class="next list-inline-item float-end">
                        <button type="button" class="btn btn-info">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </div>
                </cdk-step>
              </ng-stepper>
            </div>
            <!-- end #rootwizard-->
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
})
export class WizardComponent {
  myForm!: UntypedFormGroup
  profileForm!: UntypedFormGroup
  submit = false

  @ViewChild('stepper') stepper!: NgStepperComponent
  @ViewChild('cdkSteppers') cdkSteppers!: CdkStepper
  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
    })

    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
    })
  }

  ngAfterViewInit() {
    this.updateProgressBarWidth()
  }

  updateProgressBarWidth() {
    if (this.cdkSteppers) {
      const selectedIndex = this.cdkSteppers.selectedIndex || 0
      const stepsLength = this.cdkSteppers.steps.length || 1
      const width = ((selectedIndex + 1) / stepsLength) * 100 + '%'
      const progressBar = document.querySelector('.wizardprogress')
      if (progressBar) {
        ;(progressBar as HTMLElement).style.width = width
      }
      this.cdr.detectChanges()
    }
  }

  get form() {
    return this.myForm.controls
  }

  get secondform() {
    return this.profileForm.controls
  }

  // next step
  nextStep(id: number) {
    this.submit = true
    if (id == 1) {
      if (this.myForm.valid) {
        this.stepper.next()
      }
    } else {
      if (this.profileForm.valid) {
        this.stepper.next()
      }
    }
  }
}
