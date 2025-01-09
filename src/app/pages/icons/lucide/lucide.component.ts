import { Component, importProvidersFrom } from '@angular/core'
import { iconsData } from './data'

import {
  Home,
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { PagetitleComponent } from '@/app/shared/page-title/page-title.component'

@Component({
  selector: 'app-lucide',
  standalone: true,
  imports: [LucideAngularModule, PagetitleComponent],
  templateUrl: './lucide.component.html',
  styles: ``,
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class LucideComponent {
  iconsData = iconsData
}
