import { Routes } from '@angular/router'
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component'
import { AuthGuard } from '@core/guards/auth.guard'

export const routes: Routes = [
  {
    path: '',
    component: PrivateLayoutComponent,
    loadChildren: () =>
      import('./pages/pages.route').then((mod) => mod.PAGE_ROUTES),
    //canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./account/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
]
