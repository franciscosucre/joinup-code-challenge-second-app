import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TruncatePipe } from './pipes/truncate.pipe';
import { MaterialModule } from './material/material.module';
import { GithubModule } from './github/github.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe,
    DialogModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    GithubModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [DialogModalComponent]
})
export class AppModule {}
