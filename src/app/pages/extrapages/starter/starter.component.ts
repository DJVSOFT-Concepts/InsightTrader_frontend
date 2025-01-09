import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [PagetitleComponent],
  template: `
    <app-pagetitle
      title="Starter"
      subtitle="Pages"
      pagetitle="Hyper"
    ></app-pagetitle>
  `,
  styles: ``,
})
export class StarterComponent {}
