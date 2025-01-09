import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [PagetitleComponent],
  template: `
    <app-pagetitle
      title="Breadcrumb"
      subtitle="Base UI"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Example</h4>
            <p class="text-muted font-14">
              Indicate the current page’s location within a navigational
              hierarchy that automatically adds separators via CSS. Please read
              the official
              <a
                target="_blank"
                href="https://getbootstrap.com/docs/5.3/components/breadcrumb/"
                >Bootstrap</a
              >
              documentation for more options.
            </p>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 py-2">
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 py-2">
                <li class="breadcrumb-item">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Library
                </li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 py-2">
                <li class="breadcrumb-item">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="javascript:void(0)">Library</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">With Icons</h4>
            <p class="text-muted font-14">
              Optionally you can also specify the icon with your breadcrumb
              item.
            </p>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-light-lighten p-2">
                <li class="breadcrumb-item active" aria-current="page">
                  <i class="uil-home-alt me-1"></i>Home
                </li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-light-lighten p-2">
                <li class="breadcrumb-item">
                  <a href="javascript:void(0)"
                    ><i class="uil-home-alt"></i> Home</a
                  >
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Library
                </li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-light-lighten p-2 mb-0">
                <li class="breadcrumb-item">
                  <a href="javascript:void(0)"
                    ><i class="uil-home-alt"></i> Home</a
                  >
                </li>
                <li class="breadcrumb-item">
                  <a href="javascript:void(0)">Library</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
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
export class BreadcrumbComponent {}
