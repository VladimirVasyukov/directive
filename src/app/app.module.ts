import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TuiInputModule } from '@taiga-ui/kit';

import { AppComponent } from './app.component';
import { TextSearchDirecrive } from './directives/textSearch.directive';

@NgModule({
  declarations: [AppComponent, TextSearchDirecrive],
  imports: [BrowserModule, FormsModule, TuiInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
