import { Component } from '@angular/core'
import { CrmComponent } from '@pages/dashboard/crm/crm.component'

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CrmComponent],
  template: `
    @defer {
      <app-crm></app-crm>
    } @placeholder (minimum 500ms) {
      <!-- Pre-loader -->
      <div id="preloader">
        <div id="status">
          <div class="bouncing-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <!-- End Preloader-->
    }
  `,
  styles: ``,
})
export class PreloaderComponent {}
