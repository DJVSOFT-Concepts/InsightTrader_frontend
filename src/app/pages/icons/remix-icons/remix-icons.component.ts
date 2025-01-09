import { Component } from '@angular/core'
import { remixicons } from '@core/data'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-remixicons',
  standalone: true,
  imports: [PagetitleComponent],
  template: `
    <app-pagetitle
      title="Remix Icons"
      subtitle="Icons"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12" id="icons"></div>
      <!-- end col-->
    </div>
    <!-- end row -->
    <!-- end row -->
  `,
  styles: ``,
})
export class RemixiconsComponent {
  icons = remixicons

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      var iconData = ''
      /**
       * Blank Icon set
       */
      //  this.icons.push({ name: 'blank', hex: 'f68c' });
      const icons1 = JSON.parse(remixicons)
      console.log(icons1)
      Object.keys(icons1).forEach((key) => {
        if (key === 'Editor') {
          iconData =
            iconData +
            '<div class="card"><div class="card-body"><h4 class="header-title">' +
            key +
            ' </h4><p class="card-title-desc mb-2">Use <code>&lt;i class="ri-bold"&gt;&lt;/i&gt;</code></p><div class="row icons-list-demo">'
          Object.keys(icons1[key]).forEach((k) => {
            iconData +=
              '<div class="col-xl-3 col-lg-4 col-sm-6">\
              <i class="ri-' +
              k +
              '"></i> ri-' +
              k +
              '</div>'
          })
        } else {
          iconData =
            iconData +
            '<div class="card"><div class="card-body"><h4 class="header-title">' +
            key +
            ' </h4><p class="card-title-desc mb-2">Use <code>&lt;i class="ri-home-line"&gt;&lt;/i&gt;</code> or <code>&lt;i class="ri-home-fill"&gt;&lt;/i&gt;</code></p><div class="row icons-list-demo">'
          if (icons1[key]) {
            Object.keys(icons1[key]).forEach((k) => {
              iconData +=
                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                <i class="ri-' +
                k +
                '-line"></i> ri-' +
                k +
                '-line\
            </div><div class="col-xl-3 col-lg-4 col-sm-6">\
                <i class="ri-' +
                k +
                '-fill"></i> ri-' +
                k +
                '-fill\
            </div>'
            })
          }
        }
        iconData += '</div></div></div>'
      })
      const element: HTMLElement = document.getElementById(
        'icons'
      ) as HTMLElement
      element.innerHTML = iconData
    }, 300)
  }
}
