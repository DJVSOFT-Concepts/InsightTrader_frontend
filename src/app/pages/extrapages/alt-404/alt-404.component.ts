import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-alt-404',
  standalone: true,
  imports: [PagetitleComponent, RouterModule],
  template: `
    <app-pagetitle
      title="404 Error"
      subtitle="Pages"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row justify-content-center">
      <div class="col-lg-4">
        <div class="text-center">
          <img
            src="assets/images/svg/file-searching.svg"
            height="90"
            alt="File not found Image"
          />

          <h1 class="text-error mt-4">404</h1>
          <h4 class="text-uppercase text-danger mt-3">Page Not Found</h4>
          <p class="text-muted mt-3">
            It's looking like you may have taken a wrong turn. Don't worry... it
            happens to the best of us. Here's a little tip that might help you
            get back on track.
          </p>

          <a class="btn btn-info mt-3" routerLink="/"
            ><i class="mdi mdi-reply"></i> Return Home</a
          >
        </div>
        <!-- end /.text-center-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class Alt404Component {}
