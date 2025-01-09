import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { timelineData } from '@core/data'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, PagetitleComponent],
  template: `
    <app-pagetitle
      title="Timeline"
      subtitle="Pages"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="timeline" dir="ltr">
          @for (timeline of timelineList; track $index) {
            <div class="timeline-show mb-3 text-center">
              <h5 class="m-0 time-show-name">{{ timeline.key }}</h5>
            </div>
            @for (item of timeline.items; track $index) {
              <div
                class="timeline-lg-item"
                [ngClass]="
                  $index % 2 == 0 ? 'timeline-item-left' : 'timeline-item-right'
                "
              >
                <div class="timeline-desk">
                  <div class="timeline-box">
                    <span
                      [ngClass]="$index % 2 == 0 ? 'arrow-alt' : 'arrow'"
                    ></span>
                    <span class="timeline-icon"
                      ><i class="mdi mdi-adjust"></i
                    ></span>
                    <h4 class="mt-0 mb-1 font-16">
                      {{ item.title }}
                    </h4>
                    <p class="text-muted">
                      <small>{{ item.date }}</small>
                    </p>
                    <p>
                      {{ item.text }}
                    </p>

                    @if (item.images) {
                      <div class="timeline-album mb-3">
                        @for (img of item.images; track $index) {
                          <a href="javascript: void(0);">
                            <img alt="" src="{{ img }}" />
                          </a>
                        }
                      </div>
                    }
                    @for (data of item.reactions; track $index) {
                      <a
                        href="javascript: void(0);"
                        class="btn btn-sm btn-light me-1"
                        >{{ data.emoji }} {{ data.count }}</a
                      >
                    }
                  </div>
                </div>
              </div>
            }
          }
        </div>
        <!-- end timeline -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class TimelineComponent {
  timelineList = timelineData
}
