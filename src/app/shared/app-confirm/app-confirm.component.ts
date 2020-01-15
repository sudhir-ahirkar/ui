import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-confirm',
  template: `
      <h3 matDialogTitle>{{ data.title }}</h3>

      <div mat-dialog-content>
        <p>{{ data.message }}</p>
      </div>

      <div class="dialog-form-field">
        <mat-form-field appearance="outline" *ngIf="data.showTextField">
          <mat-label>{{ data.placeholderTextField }} </mat-label>
          <input matInput #inputReason [(ngModel)]="inputReasonTxt" required>
        </mat-form-field>

        <mat-form-field appearance="outline" *ngIf="data.showSelectField">
          <mat-label>{{ data.placeholderSelectField }} </mat-label>
          <mat-select #selectReason [(ngModel)]="selectReasonOption" required>
            <mat-option *ngFor="let option of data.optionsSelectField" [value]="option.id">
              {{option.reason}}
            </mat-option>
          </mat-select>
        </mat-form-field>

      </div>

      <div mat-dialog-actions style="display:flex; margin: 24px 0 12px 0;">
        <button *ngIf="data.isRequired" type="button" color="primary" mat-stroked-button (click)="dialogRef.close(false)">Cancel</button>
        <span style="flex: 1 1 auto;"></span>
        <button *ngIf="data.showSelectField" [disabled]="!selectReasonOption"
        type="button" mat-stroked-button color="accent" (click)="dialogRef.close(selectReasonOption)">OK</button>
        <button *ngIf="data.showTextField" [disabled]="!inputReasonTxt"
        type="button" mat-stroked-button color="accent" (click)="dialogRef.close(inputReasonTxt)">OK</button>
        <button *ngIf="!data.showTextField && !data.showSelectField"
        type="button" mat-stroked-button color="accent" (click)="dialogRef.close(true)">OK</button>
        &nbsp;
      </div>
    `,
    styles: [
      `
      h3 {color: #e91e63; font-size: 1.6em; font-weight: 100;}
      .dialog-form-field {display:flex; flex-direction: column; width: 100%; margin-top: 24px;}
      `
    ]
})

export class AppConfirmComponent {

  inputReasonTxt:any;
  selectReasonOption:any;

  constructor (
    public dialogRef: MatDialogRef<AppConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
