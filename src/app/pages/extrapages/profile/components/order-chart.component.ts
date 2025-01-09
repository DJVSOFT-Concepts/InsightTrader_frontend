import { Component, ElementRef, ViewChild } from '@angular/core'
// import { ChartArea, ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js/auto'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

@Component({
  selector: 'app-order-chart',
  standalone: true,
  imports: [BaseChartDirective],
  template: `
    <div class="card">
      <div class="card-body">
        <h4 class="header-title mb-3">Orders & Revenue</h4>
        <div dir="ltr">
          <div #chartContainer style="height: 260px">
            <canvas #chartCanvas></canvas>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class OrderChartComponent {
  @ViewChild('chartCanvas')
  private chartCanvasRef!: ElementRef<HTMLCanvasElement>

  private chart?: Chart

  constructor() {}

  ngAfterViewInit() {
    this.initChart()
  }

  private initChart(): void {
    const ctx = this.chartCanvasRef.nativeElement.getContext('2d')
    if (!ctx) return

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Orders',
            backgroundColor: this.createGradient(ctx, {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              width: 0,
              height: 0,
            }),
            borderColor: this.createGradient(ctx, {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              width: 0,
              height: 0,
            }),
            hoverBackgroundColor: this.createGradient(ctx, {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              width: 0,
              height: 0,
            }),
            hoverBorderColor: this.createGradient(ctx, {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              width: 0,
              height: 0,
            }),
            categoryPercentage: 0.5,
            barPercentage: 0.7,
            data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
          },
          {
            label: 'Revenue',
            backgroundColor: '#e3eaef',
            borderColor: '#e3eaef',
            hoverBackgroundColor: '#e3eaef',
            hoverBorderColor: '#e3eaef',
            categoryPercentage: 0.5,
            barPercentage: 0.7,
            data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
              color: 'rgba(0,0,0,0.05)',
            },
            stacked: false,
            ticks: {
              stepSize: 20,
            },
          },
          x: {
            stacked: false,
            grid: {
              color: 'rgba(0,0,0,0.05)',
            },
          },
        },
      },
    })
  }

  private createGradient(
    ctx: CanvasRenderingContext2D,
    area: {
      left: number
      top: number
      right: number
      bottom: number
      width: number
      height: number
    }
  ): CanvasGradient {
    const gradientStroke = ctx.createLinearGradient(0, 500, 0, 150)
    gradientStroke.addColorStop(0, '#fa5c7c')
    gradientStroke.addColorStop(1, '#727cf5')
    return gradientStroke
  }
}
