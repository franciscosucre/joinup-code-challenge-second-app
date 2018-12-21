import { Component } from '@angular/core';
import Repository from '../github/services/github-api/models/Repository';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  repositories: Partial<Repository>[] = [];
  title = 'Bienvenidos';
  form = new FormGroup({
    searchTerm: new FormControl('', Validators.required)
  });
  constructor() {
    this.repositories = this.searchRepositories();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onClear() {
    this.form.reset();
    this.form.markAsPristine();
  }

  searchRepositories(): Partial<Repository>[] {
    return [
      {
        id: 1,
        full_name: 'Logré algo muy interesante',
        description: 'Lorem ipsum'
      },
      {
        id: 2,
        full_name: 'Logré otra cosa muy interesante',
        description:
          'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      },
      {
        id: 3,
        full_name: 'Logré algo aún mas interesante',
        description:
          'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      }
    ];
  }
}
