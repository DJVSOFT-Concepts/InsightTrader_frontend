import { Component } from '@angular/core'
import { icons } from '@core/data'
import { MDIIconType } from '@core/data/mdi'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

@Component({
  selector: 'app-mdi',
  standalone: true,
  imports: [PagetitleComponent],
  template: `
    <app-pagetitle
      title="Mdi Icons"
      subtitle="Icons"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">
              New Icons <span class="badge badge-danger-lighten">6.5.95</span>
            </h4>
            <div class="row icons-list-demo" id="newIcons"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">All Icons</h4>
            <div class="row icons-list-demo" id="icons"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Size</h4>

            <div class="row icons-list-demo">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-18px mdi-account"></i> mdi-18px
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-24px mdi-account"></i> mdi-24px
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-36px mdi-account"></i> mdi-36px
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-48px mdi-account"></i> mdi-48px
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Rotate</h4>

            <div class="row icons-list-demo">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-45 mdi-account"></i> mdi-rotate-45
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-90 mdi-account"></i> mdi-rotate-90
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-135 mdi-account"></i> mdi-rotate-135
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-180 mdi-account"></i> mdi-rotate-180
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-225 mdi-account"></i> mdi-rotate-225
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-270 mdi-account"></i> mdi-rotate-270
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-315 mdi-account"></i> mdi-rotate-315
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-4">Spin</h4>

            <div class="row icons-list-demo">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-spin mdi-loading"></i> mdi-spin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-spin mdi-star"></i> mdi-spin
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class MdiComponent {
  icons!: MDIIconType[]
  iconsCount = 0
  newIconsCount = 0
  deprecatedIconsCount = 0

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.icons = icons
      /**
       * Blank Icon set
       */
      this.icons.push({ name: 'blank', hex: 'f68c' })
      this.icons.forEach((icon) => {
        var item = this.getIconItem(icon, this.isNew(icon))
        document.getElementById('icons')?.appendChild(item)

        if (this.isNew(icon)) {
          var newItem = this.getIconItem(icon, false)
          document.getElementById('newIcons')?.appendChild(newItem)

          this.newIconsCount++
        }
        if (this.isDeprecated(icon)) {
          var deprecatedItem = this.getIconItem(icon, false)
          document
            .getElementById('deprecatedIcons')
            ?.appendChild(deprecatedItem)
          this.deprecatedIconsCount++
        }
        this.iconsCount++
      })
    }, 300)
  }

  /***
   * Icon Get
   */
  getIconItem(icon: MDIIconType, isNewIcon: boolean) {
    var div = document.createElement('div'),
      i = document.createElement('i')
    div.className = 'col-xl-3 col-lg-4 col-sm-6'
    i.className = 'mdi mdi-' + icon.name
    div.appendChild(i)
    var span = document.createElement('span')
    span.appendChild(document.createTextNode('mdi-' + icon.name))
    div.appendChild(span)

    return div
  }

  /***
   * change icon version
   */
  isNew(icon: MDIIconType) {
    return icon.version === '6.5.95'
  }

  isDeprecated(icon: MDIIconType) {
    return typeof icon.deprecated == 'undefined' ? false : icon.deprecated
  }
}
