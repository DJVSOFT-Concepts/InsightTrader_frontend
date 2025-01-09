import { Component } from '@angular/core'
import { CardTitleComponent } from '@component/card-title.component'
import { WorldVectorMapComponent } from '@component/vector-maps/world-vector-map.component'
import { ChartOptions } from '@core/model/apexchart.model'
import 'jsvectormap'
import 'jsvectormap/dist/maps/world.js' // Import world map data
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'session-by-country',
  standalone: true,
  imports: [CardTitleComponent, WorldVectorMapComponent, NgApexchartsModule],
  template: ` <div class="card">
      <card-title
        classname="d-flex card-header justify-content-between align-items-center"
        title="Sessions by country"
        [menuItems]="[{ label: 'Refresh Report' }, { label: 'Export Report' }]"
      ></card-title>
      <div class="card-body pt-0">
        <div class="row">
          <div class="col-lg-8">
            <app-world-vector-map
              class="mt-3 mb-3"
              mapId="world-map-markers"
              type="world"
              [options]="worldMapConfig"
              height="300px"
            ></app-world-vector-map>
          </div>
          <div class="col-lg-4" dir="ltr">
            <div id="country-chart" class="apex-charts" data-colors="#727cf5">
              <apx-chart
                [chart]="countryChart.chart!"
                [plotOptions]="countryChart.plotOptions!"
                [colors]="countryChart.colors!"
                [dataLabels]="countryChart.dataLabels!"
                [series]="countryChart.series!"
                [xaxis]="countryChart.xaxis!"
                [grid]="countryChart.grid!"
              ></apx-chart>
            </div>
          </div>
        </div>
      </div>
      <!-- end card-body-->
    </div>
    <!-- end card-->`,
})
export class SessionByCountryComponent {
  countryChart!: Partial<ChartOptions>

  worldMapConfig = {
    series: {
      regions: [
        {
          attribute: 'fill',
          scale: {
            ScaleKR: '#e6ebff',
            ScaleCA: '#b3c3ff',
            ScaleGB: '#809bfe',
            ScaleNL: '#4d73fe',
            ScaleIT: '#1b4cfe',
            ScaleFR: '#727cf5',
            ScaleJP: '#e7fef7',
            ScaleUS: '#e7e9fd',
            ScaleCN: '#8890f7',
            ScaleIN: '#727cf5',
          },
          values: {
            KR: 'ScaleKR',
            CA: 'ScaleCA',
            GB: 'ScaleGB',
            NL: 'ScaleNL',
            IT: 'ScaleIT',
            FR: 'ScaleFR',
            JP: 'ScaleJP',
            US: 'ScaleUS',
            CN: 'ScaleCN',
            IN: 'ScaleIN',
          },
        },
      ],
    },
  }

  ngOnInit(): void {
    this.countryChart = {
      chart: {
        height: 320,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#727cf5'],
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Sessions',
          data: [90, 75, 60, 50, 45, 36, 28, 20, 15, 12],
        },
      ],
      xaxis: {
        categories: [
          'India',
          'China',
          'United States',
          'Japan',
          'France',
          'Italy',
          'Netherlands',
          'United Kingdom',
          'Canada',
          'South Korea',
        ],
        axisBorder: {
          show: false,
        },
        labels: {
          formatter: function (val) {
            return val + '%'
          },
        },
      },
    }
  }
}
