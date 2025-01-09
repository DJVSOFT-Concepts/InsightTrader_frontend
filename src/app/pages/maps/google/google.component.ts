import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core'
import { GoogleMapsModule } from '@angular/google-maps'
import { PagetitleComponent } from '@shared/page-title/page-title.component'

type MarkerProperties = {
  position: {
    lat: number
    lng: number
  }
}
@Component({
  selector: 'app-google',
  standalone: true,
  imports: [PagetitleComponent, GoogleMapsModule],
  template: `
    <app-pagetitle
      title="Google Maps"
      subtitle="Maps"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Basic Google Map</h4>
            <div id="gmaps-basic" class="gmaps">
              <google-map
                [latitude]="latitude"
                [longitude]="longitude"
                [zoom]="15"
                width="100%"
                height="300px"
              ></google-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Markers Google Map</h4>
            <div id="gmaps-markers" class="gmaps">
              <google-map
                [latitude]="latitude"
                [longitude]="longitude"
                [zoom]="15"
                width="100%"
                height="300px"
              ></google-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Overlays</h4>
            <google-map height="300px" width="100%" [options]="mapOptions">
              @for (marker of markers; track $index) {
                <map-marker [position]="marker.position"></map-marker>
              }
            </google-map>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Location</h4>
            <google-map
              [latitude]="latitude"
              [longitude]="longitude"
              [zoom]="5"
              width="100%"
              height="300px"
            ></google-map>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
    </div>
    <!-- end row-->
  `,
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GoogleComponent {
  pagetitle = 'GOOGLE MAPS'
  longitude = -77.028333
  latitude = -12.043333
  zoom: number = 9

  @Input() pitch: number = 10
  @Input() scrollwheel: boolean = false

  ngOnInit(): void {}

  mapOptions: google.maps.MapOptions = {
    center: { lat: 48.8588548, lng: 2.347035 },
    zoom: 13,
  }

  markers: MarkerProperties[] = [
    { position: { lat: 48.8584, lng: 2.2945 } }, // Eiffel Tower
    { position: { lat: 48.8606, lng: 2.3376 } }, // Louvre Museum
    { position: { lat: 48.853, lng: 2.3499 } }, // Cathédrale Notre-Dame de Paris
  ]
}
