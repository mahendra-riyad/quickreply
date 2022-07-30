import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PropertyElement } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quickreply';

  
ELEMENT_DATA: PropertyElement[] = [
  {  name: 'test 1', description: "Lorem ipsum", size: 10 },
  {  name: 'test 2', description: "Lorem ipsum", size: 10 },
  {  name: 'test 3', description: "Lorem ipsum", size: 10 },
  {  name: 'test 4', description: "Lorem ipsum", size: 10 },
  {  name: 'test 5', description: "Lorem ipsum", size: 10 },
  {  name: 'test 6', description: "Lorem ipsum", size: 10},
  {  name: 'test 7', description: "Lorem ipsum", size: 10 },
  {  name: 'test 8', description: "Lorem ipsum", size: 10 },
  {  name: 'test 9', description: "Lorem ipsum", size: 10 },
  {  name: 'test 10', description: "Lorem ipsum", size: 10 },
  {  name: 'test 11', description: "Lorem ipsum", size: 10 },
  {  name: 'test 12', description: "Lorem ipsum", size: 10 },
  {  name: 'test 13', description: "Lorem ipsum", size: 10 },
  {  name: 'test 14', description: "Lorem ipsum", size: 10 },
  {  name: 'test 15', description: "Lorem ipsum", size: 10 },
  {  name: 'test 16', description: "Lorem ipsum", size: 10 },
  {  name: 'test 17', description: "Lorem ipsum", size: 10 },
  {  name: 'test 18', description: "Lorem ipsum", size: 10 },
  {  name: 'test 19', description: "Lorem ipsum", size: 10 },
  {  name: 'test 20', description: "Lorem ipsum", size: 10 },
];
  

  displayedColumns: string[] = ['position', 'name', 'description', 'size', 'action'];

  dataSource = new MatTableDataSource<PropertyElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() {}

  deleteProperty(position: number) {
    this.ELEMENT_DATA.splice(position, 1);
    this.dataSource = new MatTableDataSource<PropertyElement>(
      this.ELEMENT_DATA
    );
    this.dataSource.paginator = this.paginator;
  }

  addProperty(item: any) {
    this.ELEMENT_DATA.unshift(item);
    this.dataSource = new MatTableDataSource<PropertyElement>(
      this.ELEMENT_DATA
    );
    this.dataSource.paginator = this.paginator;
  }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
