import {NgModule} from '@angular/core';
import {
  MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule,MatTableModule, MatListModule, MatCardModule,MatDialogModule, MatInputModule,MatSelectModule
} from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule,MatTableModule, MatListModule, MatCardModule,MatDialogModule, MatInputModule,MatSelectModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,MatTableModule, MatCardModule,MatDialogModule, MatInputModule, MatSelectModule],
})
export class CustomMaterialModule { }
