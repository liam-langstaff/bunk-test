import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import {CountdownModule} from "ngx-countdown";
import { LaunchCardDetailsComponent } from './components/launch-card/launch-card-details/launch-card-details.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchCardComponent,
    LaunchCardDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    CountdownModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
