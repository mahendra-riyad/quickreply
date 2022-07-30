import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AppService } from '../service/app.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent implements OnInit {
  durationInSeconds = 5;
  constructor(
    public dialogRef: MatDialogRef<AddPropertyComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private appService: AppService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  propertyForm: any = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(256)]],
    size: [1, [Validators.required, Validators.min(1)]],
  });

  onSubmit() {

    if (this.propertyForm.invalid) {
      this.propertyForm.markAllAsTouched();
      return;
    }

    this.appService.addProperty(this.propertyForm.value).subscribe((res: any) => {
      this._snackBar.open(res.message, "X");
      this.dialogRef.close(true)
    })
  }
}
