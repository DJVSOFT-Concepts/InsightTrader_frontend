import { Component, TemplateRef } from '@angular/core'
import { ToastService } from './toast.service'
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbToastModule],
  template: `
    @for (toast of toastService.toasts; track $index) {
      <ngb-toast
        [class]="toast.classname"
        [autohide]="true"
        [delay]="toast.delay || 5000"
        (hidden)="toastService.remove(toast)"
      >
        @if (isTemplate(toast)) {
          <ng-template>
            <ng-template [ngTemplateOutlet]="toast.content"></ng-template>
          </ng-template>
        } @else {
          <div>{{ toast.content }}</div>
        }
      </ngb-toast>
    }
  `,
  host: { '[class.ngb-toasts]': 'true' },
})
export class ToastsContainer {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.content instanceof TemplateRef
  }
}
