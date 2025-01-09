import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CardTitleComponent],
  template: `
    <div class="card">
      <div class="card-body">
        <card-title
          classname="d-flex justify-content-between align-items-center mb-2"
          title="Trending"
          [menuItems]="[
            { label: 'Today' },
            { label: 'Yesterday' },
            { label: 'Last Week' },
            { label: 'Last Month' }
          ]"
        ></card-title>

        <div class="d-flex mt-3">
          <i class="uil uil-arrow-growth me-2 font-18 text-primary"></i>
          <div>
            <a class="mt-1 font-14" href="javascript:void(0);">
              <strong>Golden Globes:</strong>
              <span class="text-muted">
                The 27 Best moments from the Golden Globe Awards
              </span>
            </a>
          </div>
        </div>

        <div class="d-flex mt-3">
          <i class="uil uil-arrow-growth me-2 font-18 text-primary"></i>
          <div>
            <a class="mt-1 font-14" href="javascript:void(0);">
              <strong>World Cricket:</strong>
              <span class="text-muted">
                India has won ICC T20 World Cup Yesterday
              </span>
            </a>
          </div>
        </div>

        <div class="d-flex mt-3">
          <i class="uil uil-arrow-growth me-2 font-18 text-primary"></i>
          <div>
            <a class="mt-1 font-14" href="javascript:void(0);">
              <strong>Antartica:</strong>
              <span class="text-muted">
                Metling of Totten Glacier could cause high risk to areas near by
                sea
              </span>
            </a>
          </div>
        </div>
      </div>
      <!-- end card-body-->
    </div>
  `,
  styles: ``,
})
export class NewsComponent {}
