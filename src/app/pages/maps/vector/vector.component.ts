import { Component } from '@angular/core'
import { WorldVectorMapComponent } from '@component/vector-maps/world-vector-map.component'
import { PagetitleComponent } from '@shared/page-title/page-title.component'
import 'jsvectormap/dist/maps/world-merc.js'
import 'jsvectormap'
import 'jsvectormap/dist/jsvectormap.min.js'
import 'jsvectormap/dist/maps/world.js'

@Component({
  selector: 'app-vector',
  standalone: true,
  imports: [PagetitleComponent, WorldVectorMapComponent],
  template: `
    <app-pagetitle
      title="Vector Maps"
      subtitle="Maps"
      pagetitle="Hyper"
    ></app-pagetitle>

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">World Vector Map</h4>
            <div id="world-map-markers1" style="height: 360px">
              <app-world-vector-map
                mapId="world-map-markers1"
                type="world"
                [options]="worldMapConfig"
              ></app-world-vector-map>
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
            <h4 class="header-title mb-3">Markers Line Vector Map</h4>
            <div id="world-map-markers-line" style="height: 360px">
              <app-world-vector-map
                mapId="world-map-markers-line"
                type="world_merc"
                [options]="markerMapConfig"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">India Vector Map</h4>
            <div id="india-vector-map" style="height: 360px">
              <app-world-vector-map
                mapId="india"
                type="in_mill"
                [options]="indiaMapConfig"
                height="360px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- card end -->
      </div>
      <!-- end col-->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Canada Vector Map</h4>
            <div id="canada-vectormap" style="height: 300px">
              <app-world-vector-map
                mapId="canada-map-markers"
                type="canada"
                [options]="canadaMapConfig"
                height="300px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col-->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">RUSSIA VECTOR MAP</h4>
            <div id="russia-vector-map" style="height: 300px">
              <app-world-vector-map
                mapId="russia-vector-map"
                type="russia"
                [options]="russiaMapConfig"
                width="100%"
              ></app-world-vector-map>
              <!-- end card-body-->
            </div>
            <!-- card end -->
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">US Vector Map</h4>
            <div id="usa-vector-map" style="height: 300px">
              <app-world-vector-map
                mapId="usa-vector-map"
                type="us_aea_en"
                [options]="usaMapConfig"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
          <!-- end card-body-->
        </div>
        <!-- card end -->
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">Iraq Vector Map</h4>

            <div id="iraq-vector-map" style="height: 360px">
              <app-world-vector-map
                mapId="iraq-map-markers"
                type="iraq"
                [options]="iraqMapConfig"
                height="300px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mb-3">SPAIN VECTOR MAP</h4>
            <div id="italy-vectormap" style="height: 360px">
              <app-world-vector-map
                mapId="spain-map-markers"
                type="spain"
                [options]="spainMapConfig"
                height="300px"
                width="100%"
              ></app-world-vector-map>
            </div>
          </div>
        </div>
      </div>

      <!-- end row-->
    </div>
  `,
})
export class VectorComponent {
  worldMapConfig = {
    map: 'world',
    selector: '#world-map-markers1',
    zoomOnScroll: false,
    zoomButtons: true,
    markersSelectable: true,
    markers: [
      { name: 'Greenland', coords: [72, -42] },
      { name: 'Canada', coords: [56.1304, -106.3468] },
      { name: 'Brazil', coords: [-14.235, -51.9253] },
      { name: 'Egypt', coords: [26.8206, 30.8025] },
      { name: 'Russia', coords: [61, 105] },
      { name: 'China', coords: [35.8617, 104.1954] },
      { name: 'United States', coords: [37.0902, -95.7129] },
      { name: 'Norway', coords: [60.472024, 8.468946] },
      { name: 'Ukraine', coords: [48.379433, 31.16558] },
    ],
    markerStyle: {
      initial: { fill: '#3e60d5' },
      selected: { fill: '#3e60d56e' },
    },
    labels: {
      markers: {
        render: (marker: any) => marker.name,
      },
    },
  }
  canadaMapConfig = {
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: '#3e60d5',
      },
    },
  }
  russiaMapConfig = {
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: '#5d7186',
      },
    },
  }
  markerMapConfig = {
    map: 'world_merc',
    selector: '#world-map-markers-line',
    zoomOnScroll: false,
    zoomButtons: false,
    markers: [
      {
        name: 'Greenland',
        coords: [72, -42],
      },
      {
        name: 'Canada',
        coords: [56.1304, -106.3468],
      },
      {
        name: 'Brazil',
        coords: [-14.235, -51.9253],
      },
      {
        name: 'Egypt',
        coords: [26.8206, 30.8025],
      },
      {
        name: 'Russia',
        coords: [61, 105],
      },
      {
        name: 'China',
        coords: [35.8617, 104.1954],
      },
      {
        name: 'United States',
        coords: [37.0902, -95.7129],
      },
      {
        name: 'Norway',
        coords: [60.472024, 8.468946],
      },
      {
        name: 'Ukraine',
        coords: [48.379433, 31.16558],
      },
    ],
    lines: [
      {
        from: 'Canada',
        to: 'Egypt',
      },
      {
        from: 'Russia',
        to: 'Egypt',
      },
      {
        from: 'Greenland',
        to: 'Egypt',
      },
      {
        from: 'Brazil',
        to: 'Egypt',
      },
      {
        from: 'United States',
        to: 'Egypt',
      },
      {
        from: 'China',
        to: 'Egypt',
      },
      {
        from: 'Norway',
        to: 'Egypt',
      },
      {
        from: 'Ukraine',
        to: 'Egypt',
      },
    ],
    regionStyle: {
      initial: {
        stroke: '#9ca3af',
        strokeWidth: 0.25,
        fill: '#9ca3af69',
        fillOpacity: 1,
      },
    },
    markerStyle: {
      initial: { fill: '#9ca3af' },
      selected: { fill: '#9ca3af' },
    },
    lineStyle: {
      animation: true,
      strokeDasharray: '6 3 6',
    },
  }

  spainMapConfig = {
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: '#ffc35a',
      },
    },
  }

  italyMapConfig = {
    zoomOnScroll: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#fa5c7c',
      },
    },
  }
  iraqMapConfig = {
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: '#3e60d5',
      },
    },
  }

  indiaMapConfig = {
    backgroundColor: 'transparent',
    selector: '#india',
    regionStyle: {
      initial: {
        fill: '#16a7e9',
      },
    },
  }

  usaMapConfig = {
    regionStyle: {
      initial: {
        fill: '#3e60d5',
      },
    },
  }
}
