import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as jQuery from 'jquery';
import { routerModule } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
