import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ResultComponent } from './result-list/result-list.component';

@NgModule({
  declarations: [
    AppComponent, SearchFormComponent, ResultComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
