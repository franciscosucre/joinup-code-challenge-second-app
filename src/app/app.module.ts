import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { TruncatePipe } from './pipes/truncate.pipe';
import { MaterialModule } from './material/material.module';
import { GithubModule } from './github/github.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, TruncatePipe],
  imports: [BrowserModule, MaterialModule, GithubModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
