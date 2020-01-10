import {NgModule} from '@angular/core';
import {
  MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule,MatTableModule, MatListModule, MatCardModule,MatDialogModule, MatInputModule,MatSelectModule, MatSortModule, MatTooltipModule, MatPaginatorModule
} from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule, 
    MatNativeDateModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule, 
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule, 
    MatNativeDateModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule, 
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule],
})
export class CustomMaterialModule { }
