import { Component } from '@angular/core'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import { UserProfileComponent } from './components/user-profile.component'
import { EventsComponent } from './components/events.component'
import { NewsComponent } from './components/news.component'
import { FeedComponent } from './components/feed.component'
import { FeaturedVideoComponent } from './components/featured-video.component'
import { FollowersComponent } from './components/followers.component'

@Component({
  selector: 'app-social-feed',
  standalone: true,
  imports: [
    PagetitleComponent,
    UserProfileComponent,
    EventsComponent,
    NewsComponent,
    FeedComponent,
    FeaturedVideoComponent,
    FollowersComponent,
  ],
  template: `
    <app-pagetitle
      title="Social Feed"
      subtitle="Apps"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xxl-3 col-lg-6 order-lg-1 order-xxl-1">
        <!-- start profile info -->
        <app-user-profile></app-user-profile>
        <!-- end profile info -->

        <!-- event info -->
        <app-events></app-events>
        <!-- end event info -->

        <!-- news -->
        <app-news></app-news>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xxl-6 col-lg-12 order-lg-2 order-xxl-1">
        <!-- new post -->
        <app-feed></app-feed>
        <!-- end new post -->
      </div>

      <div class="col-xxl-3 col-lg-6 order-lg-1 order-xxl-2">
        <!-- video -->
        <app-featured-video></app-featured-video>
        <!-- end video -->

        <!-- video -->
        <app-followers></app-followers>
        <!-- end video -->
      </div>
      <!-- end col -->
    </div>
    <!--end row -->
  `,
  styles: ``,
})
export class SocialFeedComponent {}
