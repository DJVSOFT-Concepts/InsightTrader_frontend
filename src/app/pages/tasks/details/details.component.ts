import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { TaskComponent } from './components/task.component'
import { AttachmentComponent } from './components/attachment.component'
import { CommentsComponent } from './components/comments.component'
import { todayTasks } from '@core/data'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    PagetitleComponent,
    TaskComponent,
    AttachmentComponent,
    CommentsComponent,
  ],
  template: `
    <app-pagetitle
      title="Task Detail"
      subtitle="Tasks"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xxl-8 col-xl-7">
        <app-task [task]="taskData"></app-task>

        <app-comments></app-comments>
      </div>
      <!-- end col -->

      <div class="col-xxl-4 col-xl-5">
        <app-attachment
          [attachmentList]="taskData.attachments"
        ></app-attachment>
      </div>
    </div>
    <!-- end row -->
  `,
  styles: ``,
})
export class DetailsComponent {
  taskData = todayTasks[0]
}
