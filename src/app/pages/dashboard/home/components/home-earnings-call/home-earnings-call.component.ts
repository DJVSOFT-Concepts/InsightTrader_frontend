import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component'
import { records } from '@core/data'

@Component({
  selector: 'app-home-earnings-call',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './home-earnings-call.component.html',
  styleUrl: './home-earnings-call.component.scss'
})
export class HomeEarningsCallComponent {
  dataList = records

  columns = [
    {
      header: 'ID',
      accessor: 'id',
    },
    { header: 'Name', accessor: 'name' },
    {
      header: '	Phone Number',
      accessor: 'phone',
    },
    {
      header: 'Age',
      accessor: 'age',
    },
    {
      header: 'Company',
      accessor: 'company',
    },
  ]

}
