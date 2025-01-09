import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { posts } from '@core/data'

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- comment box -->
    <div class="border rounded mt-2 mb-3">
      <form class="comment-area-box">
        <textarea
          rows="3"
          class="form-control border-0 resize-none"
          placeholder="Write something...."
        ></textarea>
        <div
          class="p-2 bg-light d-flex justify-content-between align-items-center"
        >
          <div>
            <a
              href="javascript:void(0)"
              class="btn btn-sm px-2 font-16 btn-light"
              ><i class="mdi mdi-account-circle"></i
            ></a>
            <a
              href="javascript:void(0)"
              class="btn btn-sm px-2 font-16 btn-light"
              ><i class="mdi mdi-map-marker"></i
            ></a>
            <a
              href="javascript:void(0)"
              class="btn btn-sm px-2 font-16 btn-light"
              ><i class="mdi mdi-camera"></i
            ></a>
            <a
              href="javascript:void(0)"
              class="btn btn-sm px-2 font-16 btn-light"
              ><i class="mdi mdi-emoticon-outline"></i
            ></a>
          </div>
          <button type="submit" class="btn btn-sm btn-dark waves-effect">
            Post
          </button>
        </div>
      </form>
    </div>
    <!-- end .border-->
    <!-- end comment box -->

    <!-- Story Box-->
    @for (data of timelineList; track $index) {
      <div class="border border-light rounded p-2 mb-3">
        <div class="d-flex">
          <img
            class="me-2 rounded-circle"
            src="{{ data.author.avatar }}"
            alt="Generic placeholder image"
            height="32"
          />
          <div>
            <h5 class="m-0">{{ data.author.name }}</h5>
            <p class="text-muted">
              <small>{{ data.postedOn }}</small>
            </p>
          </div>
        </div>
        <div [innerHTML]="data.content"></div>
        @if (!data.engagement) {
          <iframe
            src="https://player.vimeo.com/video/87993762"
            height="300"
            class="img-fluid border-0"
          ></iframe>
        }
        @if (data.images) {
          @for (img of data.images; track $index) {
            <img
              src="{{ img }}"
              alt="post-img"
              class="rounded me-1"
              height="60"
            />
          }
        }
        @if (data.comments) {
          <div class="mx-n2 p-2 mt-3 bg-light">
            @for (commet of data.comments; track $index) {
              <div class="d-flex">
                <img
                  class="me-2 rounded-circle"
                  src="{{ commet.author.avatar }}"
                  alt="Generic placeholder image"
                  height="32"
                />
                <div>
                  <h5 class="mt-0">
                    {{ commet.author.name }}
                    <small class="text-muted">{{ commet.postedOn }}</small>
                  </h5>
                  {{ commet.content }}

                  <br />
                  @if (commet.replies) {
                    <a
                      href="javascript: void(0);"
                      class="text-muted font-13 d-inline-block mt-2"
                      ><i class="mdi mdi-reply"></i> Reply</a
                    >
                    @for (reply of commet.replies; track $index) {
                      <div class="d-flex mt-3">
                        <a class="pe-2" href="javascript:void(0)">
                          <img
                            src="{{ reply.author.avatar }}"
                            class="rounded-circle"
                            alt="Generic placeholder image"
                            height="32"
                          />
                        </a>
                        <div>
                          <h5 class="mt-0">
                            {{ reply.author.name }}
                            <small class="text-muted">{{
                              reply.postedOn
                            }}</small>
                          </h5>
                          {{ reply.content }}
                        </div>
                      </div>
                    }
                  }
                </div>
              </div>
            }
            <div class="d-flex mt-2">
              <a class="pe-2" href="#">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  class="rounded-circle"
                  alt="Generic placeholder image"
                  height="32"
                />
              </a>
              <div class="w-100">
                <input
                  type="text"
                  id="simpleinput"
                  class="form-control border-0 form-control-sm"
                  placeholder="Add comment"
                />
              </div>
            </div>
          </div>
        }
        @if (data.engagement) {
          <div class="mt-2">
            @if (!data.comments) {
              <a
                href="javascript: void(0);"
                class="btn btn-sm btn-link text-muted"
                ><i class="mdi mdi-reply"></i> Reply</a
              >
            }
            <a
              href="javascript: void(0);"
              class="btn btn-sm btn-link "
              [ngClass]="data.isLiked ? 'text-danger' : 'text-muted'"
              ><i
                class="mdi"
                [ngClass]="data.isLiked ? 'mdi-heart' : 'mdi-heart-outline'"
              ></i>
              Like
              @if (data.isLiked) {
                ({{ data.totalLikes }})
              }
            </a>
            <a
              href="javascript: void(0);"
              class="btn btn-sm btn-link text-muted"
              ><i class="mdi mdi-share-variant"></i> Share</a
            >
          </div>
        }
      </div>
    }

    <div class="text-center">
      <a href="javascript:void(0);" class="text-danger"
        ><i class="mdi mdi-spin mdi-loading me-1"></i> Load more
      </a>
    </div>
  `,
  styles: ``,
})
export class TimelineComponent {
  timelineList = posts
}
