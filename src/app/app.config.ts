import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core'
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router'

import { routes } from './app.routes'
import { provideStore } from '@ngrx/store'
import { rootReducer } from './store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core'
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { provideEffects } from '@ngrx/effects'
import { CalendarEffects } from './store/calendar/calendar.effects'
import { CRMEffects } from './store/crm/crm.effects'
import { EcommerceEffects } from '@store/ecommerce/ecommerce.effects'
import { ProjectEffects } from '@store/projects/project-effect'
import { TaskEffects } from '@store/tasks/task-effect'
import { JwtInterceptor } from '@core/helpers/jwt.interceptor'
import { ErrorInterceptor } from '@core/helpers/error.interceptor'
import {
  FakeBackendInterceptor,
  FakeBackendProvider,
} from '@core/helpers/fake-backend'
import { AuthenticationEffects } from '@store/authentication/authentication.effects'

// required for AoT
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/')
}

// Scroll
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), importProvidersFrom(TranslateModule.forRoot()),
    FakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideRouter(routes, inMemoryScrollingFeature),
    provideStore(rootReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(
      AuthenticationEffects,
      CalendarEffects,
      CRMEffects,
      EcommerceEffects,
      ProjectEffects,
      TaskEffects
    ),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    TranslateService,
    importProvidersFrom(
      // HttpClientModule,
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
  ],
}
