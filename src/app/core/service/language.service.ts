import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { CookieService } from 'ngx-cookie-service'

@Injectable({ providedIn: 'root' })
export class LanguageService {
  public languages: string[] = ['en', 'gr', 'it', 'ru', 'sp']

  constructor(
    public translate: TranslateService,
    private cookieService: CookieService
  ) {
    let browserLang: string | undefined
    /***
     * cookie Language Get
     */
    this.translate.addLangs(this.languages)
    if (this.cookieService.check('lang')) {
      browserLang = this.cookieService.get('lang')
    } else {
      browserLang = translate.getBrowserLang()
    }
    translate.use(
      browserLang && browserLang.match(/en|gr|it|ru|sp/) ? browserLang : 'en'
    )
  }

  /***
   * Cookie Language set
   */
  public setLanguage(lang: string) {
    this.translate.use(lang)
    this.cookieService.set('lang', lang)
  }
}
