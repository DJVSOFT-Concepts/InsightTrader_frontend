import { Component } from '@angular/core'
import { quickAccessFiles } from '@core/data'

@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [],
  template: `
    <div class="row mx-n1 g-0">
      @for (data of fileList; track $index) {
        <div class="col-xxl-3 col-lg-6">
          <div class="card m-1 shadow-none border">
            <div class="p-2">
              <div class="row align-items-center">
                <div class="col-auto">
                  <div class="avatar-sm">
                    <span class="avatar-title bg-light text-reset rounded">
                      <i class="{{ data.icon }}"></i>
                    </span>
                  </div>
                </div>
                <div class="col ps-0">
                  <a href="javascript:void(0);" class="text-muted fw-bold">{{
                    data.name
                  }}</a>
                  <p class="mb-0 font-13">{{ data.size }}</p>
                </div>
              </div>
              <!-- end row -->
            </div>
            <!-- end .p-2-->
          </div>
          <!-- end col -->
        </div>
        <!-- end col-->
      }
    </div>
    <!-- end row-->
  `,
  styles: ``,
})
export class QuickAccessComponent {
  fileList = quickAccessFiles
}
