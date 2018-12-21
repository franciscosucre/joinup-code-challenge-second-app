import { Component } from '@angular/core';
import Repository from '../github/services/github-api/models/Repository';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { GithubApiProvider } from '../github/services/github-api';
import SearchRepositoriesResponse from '../github/services/github-api/interfaces/SearchRepositoriesResponse';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  PageEvent
} from '@angular/material';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent = new PageEvent();
  repositories: Partial<Repository>[] = [];
  title = 'Bienvenidos';
  loading = false;
  submitedSearchTerm: string;
  form = new FormGroup({
    searchTerm: new FormControl('', Validators.required)
  });
  debounceTime: 100000;
  paginationDebounce: any;

  constructor(
    private githubApiProvider: GithubApiProvider,
    private dialog: MatDialog
  ) {
    this.pageEvent.length = 0;
    this.pageEvent.pageSize = 10;
  }

  searchRepositories() {
    this.loading = true;
    this.githubApiProvider
      .searchRepositories(
        this.submitedSearchTerm,
        this.pageEvent.pageSize,
        this.pageEvent.pageIndex
      )
      .subscribe(this.successHandler.bind(this), this.errorHandler.bind(this));
  }

  onSubmit() {
    this.submitedSearchTerm = this.form.get('searchTerm').value;
    this.searchRepositories();
  }

  onClear() {
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  onPage($event: PageEvent) {
    this.pageEvent = $event;
    this.searchRepositories();
  }

  successHandler(res: SearchRepositoriesResponse) {
    this.pageEvent.length = res.total_count;
    this.repositories = res.items;
    this.loading = false;
  }

  errorHandler(err: Error) {
    this.loading = false;
    this.dialog.open(DialogModalComponent, {
      width: '250px',
      data: { title: 'An error has ocurred', message: err.message }
    });
  }
}
