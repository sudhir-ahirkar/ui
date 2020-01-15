import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { AppConfirmComponent } from './app-confirm.component';

interface IConfirmData {
  title?: string;
  message?: string;
  showTextField?: boolean;
  placeholderTextField?: string;
  showSelectField?: boolean;
  placeholderSelectField?: string;
  optionsSelectField?: any;
  isRequired?: Boolean;
}

@Injectable()
export class AppConfirmService {

  constructor(private readonly dialog: MatDialog) {
   
   }

  public confirm(data: IConfirmData = {}): Observable<boolean> {
    data.title = data.title || '';
    data.message = data.message || '';
    data.isRequired = data.isRequired !== undefined ? 
    data.isRequired : true ;
    data.placeholderTextField = data.placeholderTextField || 'Add more details:';
    data.placeholderSelectField = data.placeholderSelectField || 'Select an option';
    let dialogRef: MatDialogRef<AppConfirmComponent>;
    dialogRef = this.dialog.open(AppConfirmComponent, {
      width: '480px',
      disableClose: true,
      
      data: {
        title: data.title,
        message: data.message,
        showTextField: data.showTextField,
        placeholderTextField: data.placeholderTextField,
        showSelectField: data.showSelectField,
        placeholderSelectField: data.placeholderSelectField,
        optionsSelectField: data.optionsSelectField,
        isRequired: data.isRequired
      }
    });
    return dialogRef.afterClosed();
  }
}
