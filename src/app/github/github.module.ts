import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubApiProvider } from './services/github-api';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [GithubApiProvider]
})
export class GithubModule {}
