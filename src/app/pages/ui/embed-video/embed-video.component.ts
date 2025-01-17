import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-embed-video',
  standalone: true,
  imports: [PagetitleComponent],
  template: `
    <app-pagetitle
      title="Embed Video"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Responsive embed video 21:9</h4>
            <p class="text-muted font-14">Use class <code>.ratio-21x9</code></p>

            <!-- 21:9 aspect ratio -->
            <div class="ratio ratio-21x9">
              <iframe
                src="https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0"
              ></iframe>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Responsive embed video 1:1</h4>
            <p class="text-muted font-14">Use class <code>.ratio-1x1</code></p>

            <!-- 1:1 aspect ratio -->
            <div class="ratio ratio-1x1">
              <iframe
                src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1"
              ></iframe>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Responsive embed video 16:9</h4>
            <p class="text-muted font-14">Use class <code>.ratio-16x9</code></p>

            <!-- 16:9 aspect ratio -->
            <div class="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0"
              ></iframe>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->

        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Responsive embed video 4:3</h4>
            <p class="text-muted font-14">Use class <code>.ratio-4x3</code></p>

            <!-- 4:3 aspect ratio -->
            <div class="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1"
              ></iframe>
            </div>
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
export class EmbedVideoComponent {}
