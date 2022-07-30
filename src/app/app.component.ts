import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PropertyElement } from './app.model';
import { AppService } from './service/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quickreply';

  ELEMENT_DATA: PropertyElement[] = [];

  total: number = 0;
  page: number = 1;
  limit: number = 10;

  pageOptions = {
    page: 1,
    limit: 10,
  }

  displayedColumns: string[] = [
    'position',
    'name',
    'description',
    'size',
    'action',
  ];

  dataSource = new MatTableDataSource<PropertyElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private appService: AppService, private _snackBar: MatSnackBar) {
    this.getProperties();
  }

  deleteProperty(id: string) {
    this.appService.deleteProperty(id).subscribe((res: any) => {
      this._snackBar.open(res.message, 'X');
      this.getProperties();
    });
  }

  addProperty(item: any) {
    this.getProperties();
  }

  async getProperties() {
    const data = this.appService.getProperties(this.pageOptions).subscribe((res: any) => {
      this.ELEMENT_DATA = res.result;
      this.dataSource = new MatTableDataSource<PropertyElement>(res.result);
      this.total = res.total;
      this.page = res.page;
      this.limit = res.limit;

      // this.dataSource.paginator = this.paginator;
    });
  }

  changePage(event: any) {
    if (this.total === 0) {
      return;
    }

    console.log(event)
    this.pageOptions = {
      page: event.pageIndex + 1,
      limit: event.pageSize
    }
    this.getProperties();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
