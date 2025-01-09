import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  Renderer2,
  TemplateRef,
  inject,
} from '@angular/core'
import {
  NgbDropdownModule,
  NgbOffcanvas,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { Language } from '../shared/models/language.model'
import { LanguageService } from '@core/service/language.service'
import { SimplebarAngularModule } from 'simplebar-angular'
import { Store } from '@ngrx/store'
import { changecolor } from '@store/layout/layout-action'
import { getLayoutColor } from '@store/layout/layout-selector'
import { DOCUMENT } from '@angular/common'
import { RouterModule } from '@angular/router'
import { login, logout } from '@store/authentication/authentication.actions'

type FullScreenTypes = {
  requestFullscreen?: () => Promise<void>
  mozRequestFullScreen?: () => Promise<void>
  mozCancelFullScreen?: () => Promise<void>
  msExitFullscreen?: () => Promise<void>
  webkitExitFullscreen?: () => Promise<void>
  mozFullScreenElement?: Element
  msFullscreenElement?: Element
  webkitFullscreenElement?: Element
  msRequestFullscreen?: () => Promise<void>
  mozRequestFullscreen?: () => Promise<void>
  webkitRequestFullscreen?: () => Promise<void>
}
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    NgbDropdownModule,
    SimplebarAngularModule,
    NgbTooltipModule,
    RouterModule,
  ],
  templateUrl: './topbar.component.html',
  styles: ``,
})
export class TopbarComponent {
  languages: Language[] = []
  selectedLanguage?: Language
  element!: FullScreenTypes
  first_name:string | null = null;

  store = inject(Store)
  render = inject(Renderer2)

  constructor(
    @Inject(DOCUMENT) private document: Document & FullScreenTypes,
    public languageService: LanguageService,
    private elementRef: ElementRef
  ) {
    this.first_name = localStorage.getItem('first_name');
  }
  @Output() settingsButtonClicked = new EventEmitter()
  @Output() mobileMenuButtonClicked = new EventEmitter()

  ngOnInit(): void {
    this.element = document.documentElement
    this._fetchLanguages()
  }

  settingMenu() {
    this.settingsButtonClicked.emit()
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu() {
    this.mobileMenuButtonClicked.emit()
  }

  /**
   * Fetches supported languages
   */
  _fetchLanguages(): void {
    this.languages = [
      {
        id: 1,
        name: 'English',
        flag: 'assets/images/flags/us.jpg',
        lang: 'en',
      },
      {
        id: 2,
        name: 'German',
        flag: 'assets/images/flags/germany.jpg',
        lang: 'gr',
      },
      {
        id: 3,
        name: 'Italian',
        flag: 'assets/images/flags/italy.jpg',
        lang: 'it',
      },
      {
        id: 4,
        name: 'Spanish',
        flag: 'assets/images/flags/spain.jpg',
        lang: 'sp',
      },
      {
        id: 5,
        name: 'Russian',
        flag: 'assets/images/flags/russia.jpg',
        lang: 'ru',
      },
    ]

    this.selectedLanguage = this.languages[0]
  }

  //  Change the language
  changeLanguage(language: Language) {
    this.selectedLanguage = language
    this.languageService.setLanguage(language.lang)
  }

  // Change Theme
  changeTheme() {
    const color = document.documentElement.getAttribute('data-bs-theme')
    if (color == 'light') {
      this.store.dispatch(changecolor({ color: 'dark' }))
    } else {
      this.store.dispatch(changecolor({ color: 'light' }))
    }
    this.store.select(getLayoutColor).subscribe((color) => {
      this.render.setAttribute(document.documentElement, 'data-bs-theme', color)
    })
  }

  // set Fullscreen
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable')
    if (
      !document.fullscreenElement &&
      !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement
    ) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen()
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen()
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen()
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen()
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen()
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen()
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen()
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen()
      }
    }
  }

  // Logout
  logout() {
    this.store.dispatch(logout())
  }
}
