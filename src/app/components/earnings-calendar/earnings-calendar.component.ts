import { Component, OnInit } from '@angular/core';
import { StockService } from '@/app/services/stock-data.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { EarningsData } from './earnings-data';

@Component({
  selector: 'app-earnings-calendar',
  templateUrl: './earnings-calendar.component.html',
  styleUrls: ['./earnings-calendar.component.scss'],
  imports: [
    NgIf, 
    CommonModule,
    TableComponent,
  ],
  standalone:true,
})



export class EarningsCalendarComponent implements OnInit {
  earningsData: object[] = [];
  loading = true;
  error: string | null = null;
  dataList = [];


  columns = [
    {
      header: 'Currency',
      accessor: 'currency',
    },
    { header: 'Estimate', accessor: 'estimate' },
    {
      header: '	Name',
      accessor: 'name',
    },
    {
      header: 'Fiscal Date',
      accessor: 'fiscalDateEnding',
    },
    {
      header: 'Report Date',
      accessor: 'reportDate',
    },
    {
      header: 'Symbol',
      accessor: 'symbol',
    },  
  ]



  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.fetchEarningsData();
  }

  async fetchEarningsData(): Promise<void> {
    try {
      this.earningsData = await this.stockService.fetchEarningsCalendar();
      this.earningsData = this.earningsData.filter(earningData => (earningData as EarningsData).estimate > 0 );
      this.loading = false;
    } catch (error) {
      this.error = 'Failed to fetch earnings calendar data.';
      this.loading = false;
    }
  }
}
