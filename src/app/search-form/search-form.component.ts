import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  toggle = false;

  toggleAdvancedSearch() {
    this.toggle = !this.toggle;
  }

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = fb.group({'nameCtrl': ''});
  }
}