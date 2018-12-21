import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MatProgressSpinnerModule,
  MatPaginatorModule
} from '@angular/material';

const modules = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatPaginatorModule
];

@NgModule({
  imports: [CommonModule].concat(modules),
  exports: modules,
  declarations: []
})
export class MaterialModule {}
