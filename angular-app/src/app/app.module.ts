import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
