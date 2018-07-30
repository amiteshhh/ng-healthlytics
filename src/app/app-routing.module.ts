import { NgModule, EventEmitter } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Title } from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute } from '@angular/router'

//rxjs/operators: Contains all pipeable operators.
import { map, filter, scan, mergeMap } from 'rxjs/operators';

//rxjs: Contains creation methods, types, schedulers, and utilities.
import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';


import { HomeComponent } from './home/home.component'
import { AnalyticsComponent } from './analytics/analytics.component'
import { SetupComponent } from './setup/setup.component'
import { LookupComponent } from './setup/lookup/lookup.component'


// interface routeData{
//   title: string, mainMenu?: boolean, menuName?:string, icon?:string
// }
export const routeList: Routes = [
  { path: '', redirectTo: '/setup', pathMatch: 'full' },
  // do you know how to make intellisense work for interface routeData. i.e routeList[1].data.{should populate routeData prop here}
  // { path: 'home', component: HomeComponent, data: <routeData>{title: 'Home', mainMenu: true, menuName:'Sweet Home', icon:'home'} },
  { path: 'home', component: HomeComponent, data: {title: 'Home', mainMenu: true, menuName:'Sweet Home', icon:'home'} },
  { path: 'analytics', component: AnalyticsComponent, data: {title: 'Analytics', mainMenu: true, icon: 'trending_up'} },
  { path: 'setup/:id', component: LookupComponent, data: {title: 'Setups'} },
  { path: 'setup', component: SetupComponent, data: {title: 'Setup', mainMenu: true, icon: 'settings'} }
];

export const titleUpdateStream = new Subject();

@NgModule({
  imports: [ RouterModule.forRoot(routeList) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  titleChange = new EventEmitter();
  public constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {
    this.setupTitle()
   }
  setupTitle() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data))
      .subscribe((event) => {this.titleService.setTitle(event['title']); titleUpdateStream.next(event['title'])});
  }
 }