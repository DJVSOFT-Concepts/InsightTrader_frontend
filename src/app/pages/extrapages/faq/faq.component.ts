import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FaqsComponent } from '@component/faqs/faqs.component'
import { rawFaqs } from '@core/data'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, PagetitleComponent, FaqsComponent],
  template: `
    <app-pagetitle
      title="FAQ"
      subtitle="Pages"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-sm-12">
        <div class="text-center">
          <h3 class="">Frequently Asked Questions</h3>
          <p class="text-muted mt-3">
            Nisi praesentium similique totam odio obcaecati, reprehenderit,
            dignissimos rem temporibus ea inventore alias!<br />
            Beatae animi nemo ea tempora, temporibus laborum facilis ut!
          </p>

          <button type="button" class="btn btn-success btn-sm mt-2">
            <i class="mdi mdi-email-outline me-1"></i> Email us your question
          </button>
          <button type="button" class="btn btn-info btn-sm mt-2 ms-1">
            <i class="mdi mdi-twitter me-1"></i> Send us a tweet
          </button>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <app-faqs [faqList]="faqData"></app-faqs>
  `,
  styles: ``,
})
export class FaqComponent {
  faqData = rawFaqs
}
