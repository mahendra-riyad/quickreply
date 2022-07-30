import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddPropertyComponent } from '../add-property/add-property.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'quickreply';

  constructor(public dialog: MatDialog) { 
    // this.openDialog();
  }

  @Output() newPropertyEvent = new EventEmitter<string>();


  openDialog(): void {
    this.dialog.open(AddPropertyComponent, {
      width: "400px",
      panelClass: "cstm_add_property_popup",
    }).afterClosed().subscribe(res => {
      if (res) {
        this.newPropertyEvent.emit();
      }
    })
  }

  ngOnInit(): void {
  }

}
