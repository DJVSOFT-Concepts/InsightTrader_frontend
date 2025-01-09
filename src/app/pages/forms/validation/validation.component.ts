import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [PagetitleComponent, CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <app-pagetitle
      title="Form Validation"
      subtitle="Forms"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Custom styles</h4>
            <p class="text-muted font-14">
              Custom feedback styles apply custom colors, borders, focus styles,
              and background icons to better communicate feedback. Background
              icons for
              <code>&lt;select&gt;</code>s are only available with
              <code>.form-select</code>, and not <code>.form-control</code>.
            </p>

            <form
              class="needs-validation"
              novalidate
              (ngSubmit)="validSubmit()"
              [formGroup]="validationform"
            >
              <div class="mb-3">
                <label class="form-label" for="validationCustom01"
                  >First name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="First name"
                  value="Mark"
                  [ngClass]="{ 'is-valid': submit && form['firstName'].errors }"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="validationCustom02"
                  >Last name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  placeholder="Last name"
                  value="Otto"
                  [ngClass]="{ 'is-valid': submit && form['lastName'].errors }"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="validationCustomUsername"
                  >Username</label
                >
                <div class="input-group">
                  <span class="input-group-text" id="inputGroupPrepend"
                    >&#64;</span
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    formControlName="username"
                    [ngClass]="{
                      'is-invalid': submit && form['username'].errors
                    }"
                    required
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="validationCustom03">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  placeholder="City"
                  formControlName="city"
                  [ngClass]="{ 'is-invalid': submit && form['city'].errors }"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="validationCustom04">State</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom04"
                  placeholder="State"
                  formControlName="state"
                  [ngClass]="{ 'is-invalid': submit && form['state'].errors }"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="validationCustom05">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  placeholder="Zip"
                  formControlName="zip"
                  [ngClass]="{ 'is-invalid': submit && form['zip'].errors }"
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="invalidCheck"
                    formControlName="agree"
                    [ngClass]="{ 'is-invalid': submit && form['agree'].errors }"
                    required
                  />
                  <label class="form-check-label form-label" for="invalidCheck"
                    >Agree to terms and conditions</label
                  >
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Tooltips</h4>
            <p class="text-muted font-14">
              If your form layout allows it, you can swap the
              <code>.&#0123;valid|invalid&#0125;-feedback</code> classes for
              <code>.&#0123;valid|invalid&#0125;-tooltip</code> classes to
              display validation feedback in a styled tooltip. Be sure to have a
              parent with
              <code>position: relative</code>
              on it for tooltip positioning. In the example below, our column
              classes have this already, but your project may require an
              alternative setup.
            </p>

            <form
              class="needs-validation"
              novalidate
              (ngSubmit)="formSubmit()"
              [formGroup]="tooltipvalidationform"
            >
              <div class="position-relative mb-3">
                <label class="form-label" for="validationTooltip01"
                  >First name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip01"
                  placeholder="First name"
                  value="Mark"
                  [ngClass]="{
                    'is-valid': formsubmit && formData['firstName'].errors
                  }"
                  required
                />
                <div class="valid-tooltip">Looks good!</div>
                <div class="invalid-tooltip">Please enter first name.</div>
              </div>
              <div class="position-relative mb-3">
                <label class="form-label" for="validationTooltip02"
                  >Last name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip02"
                  placeholder="Last name"
                  value="Otto"
                  [ngClass]="{
                    'is-valid': formsubmit && formData['lastName'].errors
                  }"
                  required
                />
                <div class="valid-tooltip">Looks good!</div>
                <div class="invalid-tooltip">Please enter last name.</div>
              </div>
              <div class="position-relative mb-3">
                <label class="form-label" for="validationTooltipUsername"
                  >Username</label
                >
                <div class="input-group">
                  <span
                    class="input-group-text"
                    id="validationTooltipUsernamePrepend"
                    >&#64;</span
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationTooltipUsername"
                    placeholder="Username"
                    aria-describedby="validationTooltipUsernamePrepend"
                    [ngClass]="{
                      'is-invalid': formsubmit && formData['userName'].errors
                    }"
                    required
                  />
                  <div class="invalid-tooltip">
                    Please choose a unique and valid username.
                  </div>
                </div>
              </div>
              <div class="position-relative mb-3">
                <label class="form-label" for="validationTooltip03">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip03"
                  placeholder="City"
                  [ngClass]="{
                    'is-invalid': formsubmit && formData['city'].errors
                  }"
                  required
                />
                <div class="invalid-tooltip">Please provide a valid city.</div>
              </div>
              <div class="position-relative mb-3">
                <label class="form-label" for="validationTooltip04"
                  >State</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip04"
                  placeholder="State"
                  [ngClass]="{
                    'is-invalid': formsubmit && formData['state'].errors
                  }"
                  required
                />
                <div class="invalid-tooltip">Please provide a valid state.</div>
              </div>
              <div class="position-relative mb-3">
                <label class="form-label" for="validationTooltip05">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip05"
                  placeholder="Zip"
                  [ngClass]="{
                    'is-invalid': formsubmit && formData['zip'].errors
                  }"
                  required
                />
                <div class="invalid-tooltip">Please provide a valid zip.</div>
              </div>
              <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class ValidationComponent {
  //  Validation form
  validationform!: UntypedFormGroup
  tooltipvalidationform!: UntypedFormGroup
  submit!: boolean
  formsubmit!: boolean

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    /**
     * Bootstrap validation form data
     */
    this.validationform = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
      ],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      agree: ['', [Validators.required]],
    })

    /**
     * Bootstrap tooltip validation form data
     */
    this.tooltipvalidationform = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
      ],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    })
  }

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls
  }

  /**
   * Bootstrap tooltip form validation submit method
   */
  formSubmit() {
    this.formsubmit = true
  }

  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.tooltipvalidationform.controls
  }
}
