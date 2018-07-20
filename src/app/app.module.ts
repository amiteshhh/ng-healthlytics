import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './lib/app-material.module';
import { SetupComponent } from './setup/setup.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    AnalyticsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
