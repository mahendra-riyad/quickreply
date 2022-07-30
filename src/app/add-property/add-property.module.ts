import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import { AddPropertyComponent } from './add-property.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [AddPropertyComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    { 
    provide: MatDialogRef,
    useValue: []
     }, 
    { 
    provide: MAT_DIALOG_DATA, 
    useValue: [] 
    }
    ],
})
export class AddPropertyModule {}
