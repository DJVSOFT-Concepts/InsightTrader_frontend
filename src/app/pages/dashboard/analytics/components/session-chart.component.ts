// import { Component } from '@angular/core'
// import { interval } from 'rxjs'
// import { ChartType, NgApexchartsModule } from 'ng-apexcharts'
// import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
// import { ChartOptions } from '@core/model/apexchart.model'
// import { DatasetController } from 'chart.js'
// import { StockService } from '@/app/services/stock-data.service'

// @Component({
//   selector: 'session',
//   standalone: true,
//   imports: [NgApexchartsModule, NgbAlertModule],
//   template: `
//     <div class="card card-h-100">
//       <div class="card-body">
//         <ul class="nav float-end d-none d-lg-flex">
//           <li class="nav-item">
//             <a class="nav-link text-muted" href="javascript:void(0)">Today</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-muted" href="javascript:void(0)">7d</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link active" href="javascript:void(0)">15d</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-muted" href="javascript:void(0)">1m</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-muted" href="javascript:void(0)">1y</a>
//           </li>
//         </ul>
//         <h4 class="header-title mb-3">Sessions Overview</h4>

//         <div dir="ltr">
//           <div
//             id="sessions-overview"
//             class="apex-charts mt-3"
//             data-colors="#0acf97"
//           >
//             <apx-chart
//               [chart]="sessionsoverviewChart.chart!"
//               [dataLabels]="sessionsoverviewChart.dataLabels!"
//               [stroke]="sessionsoverviewChart.stroke!"
//               [series]="sessionsoverviewChart.series!"
//               [legend]="sessionsoverviewChart.legend!"
//               [colors]="sessionsoverviewChart.colors!"
//               [xaxis]="sessionsoverviewChart.xaxis!"
//               [yaxis]="sessionsoverviewChart.yaxis!"
//               [fill]="sessionsoverviewChart.fill!"
//             ></apx-chart>
//           </div>
//         </div>
//       </div>
//       <!-- end card-body-->
//     </div>
//     <!-- end card-->
//   `,
//   styles: ``,
// })
// export class SessionComponent {
//   constructor(private stockDataService:StockService) {}
//   getStockData(dateRange: string[], symbol:string) : number[] {
//     const data:number[] = [];

//     // this.stockDataService.getStockData(symbol).subscribe({
//     //   next: (data: any) => {
        
//     //     console.log(data);
//     //   } ,
//     //   error: (err: any) => {
//     //     console.error("Error fetching stock data:", err);
//     //   } ,
//     });



//     //return data;
//   }
//   stateData = [
//     {
//       label: 'Active Users',
//       amount: 121,
//       icon: 'uil-users-alt',
//       arricon: 'mdi-arrow-up-bold',
//       percentage: '5.27',
//       badgecolor: 'success',
//       sinceText: 'Since last month',
//     },
//     {
//       label: 'Views per minute',
//       amount: 560,
//       icon: 'uil-window-restore',
//       arricon: 'mdi-arrow-down-bold',
//       percentage: '1.08',
//       badgecolor: 'danger',
//       sinceText: 'Since previous week',
//     },
//   ]

//   ngOnInit(): void {
//     interval(2000).subscribe(() => {
//       for (var i = 0; i < this.stateData.length; i++) {
//         // Get a random number
//         const amount: number = this.stateData[i].amount
//         var number = Math.floor(Math.random() * amount + 200)
//         this.stateData[i].amount = parseFloat(number.toFixed(0))
//       }
//     })

//   }

//   getDates(interval:string): string[] {
//     let dates: string[] = [];
//     let startDate: Date = new Date();
//     let endDate: Date = new Date();
//     let date = new Date();

//     endDate.setDate(date.getDate());

//     switch(interval) {
//       case "7d":
//         startDate.setDate(date.getDate() - 6);
//         break;
//       case "1M":
//         startDate.setDate(date.getMonth() - 1);
//         break;
//       case "6M":
//         startDate.setDate(date.getMonth() - 6);
//         break;
//       case "1Y":
//         startDate.setDate(date.getFullYear() - 1);
//         break;
//       case "5Y":
//         startDate.setDate(date.getFullYear() - 5);
//         break;
//     }

//     return this.generateEqualDateRange(startDate, endDate);
//   }

//   generateEqualDateRange(
//     startDate: string | Date,
//     endDate: string | Date
//   ): string[] {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
  
//     if (start > end) {
//       throw new Error("Start date must be before or equal to the end date.");
//     }
  
//     const totalDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
//     const interval = totalDays / 6; // Divide range into 6 equal intervals (7 dates total)
  
//     const dates: string[] = [];
//     for (let i = 0; i <= 6; i++) {
//       const currentDate = new Date(start.getTime() + i * interval * 24 * 60 * 60 * 1000);
//       dates.push(this.formatDate(currentDate, "yyyy-MM-dd"));
//     }
  
//     return dates;
//   }
  
//   // Helper function to format a date
//   formatDate(date: Date, format: string): string {
//     const yyyy = date.getFullYear();
//     const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
//     const dd = String(date.getDate()).padStart(2, "0");
  
//     switch (format) {
//       case "yyyy-MM-dd":
//         return `${yyyy}-${mm}-${dd}`;
//       case "MM/dd/yyyy":
//         return `${mm}/${dd}/${yyyy}`;
//       case "dd-MM-yyyy":
//         return `${dd}-${mm}-${yyyy}`;
//       default:
//         throw new Error("Unsupported date format.");
//     }
//   }

//   getDaysInMonth(month: number, year: number) {
//     var date = new Date(year, month, 1)
//     var days = []
//     var idx = 0
//     while (date.getMonth() === month && idx < 15) {
//       var d = new Date(date)
//       days.push(
//         d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' })
//       )
//       date.setDate(date.getDate() + 1)
//       idx += 1
//     }
//     return days
//   }


//   // Example Usage
//   start = "2023-12-01";
//   end = "2024-12-15";
//   symbol = "IBM"
//   dateRange = this.generateEqualDateRange(this.start, this.end);
//   stockData = this.getStockData(this.dateRange, this.symbol);
//   //console.log(dateRange);
//   // Output: ["2024-12-01", "2024-12-03", "2024-12-05", "2024-12-08", "2024-12-10", "2024-12-12", "2024-12-15"]
  


//   labels = this.getDaysInMonth(
//     new Date().getMonth() + 1,
//     new Date().getFullYear()
//   )
//   sessionsoverviewChart: Partial<ChartOptions> = {
//     chart: {
//       height: 309,
//       type: 'area' as ChartType,
//       toolbar: {
//         show: true,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: 'smooth' as 'smooth',
//       width: 4,
//     },
//     series: [
//       {
//         name: 'Sessions',
//         data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
//       },
//     ],
//     legend: {
//       show: false,
//     },
//     colors: ['#0acf97'],
//     xaxis: {
//       type: 'string' as 'category',
//       categories: this.dateRange,
//       tooltip: {
//         enabled: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//     },
//     yaxis: {
//       labels: {
//         formatter: function (val) {
//           return val + 'k'
//         },
//         offsetX: -15,
//       },
//     },
//     fill: {
//       type: 'gradient',
//       gradient: {
//         type: 'vertical',
//         shadeIntensity: 1,
//         inverseColors: false,
//         opacityFrom: 0.45,
//         opacityTo: 0.05,
//         stops: [45, 100],
//       },
//     },
//   }
// }
