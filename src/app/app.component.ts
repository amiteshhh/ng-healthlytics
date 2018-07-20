import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute } from '@angular/router'

//import { filter } from 'rxjs/operators';

//The following rules have been designed by the RxJS team to help JavaScript developers refactor import paths:

//rxjs/operators: Contains all pipeable operators.
import { map, filter, scan, mergeMap } from 'rxjs/operators';

//rxjs: Contains creation methods, types, schedulers, and utilities.
import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome';
  navLinks = [{
    label: 'Home',
    path: 'home',
    icon: 'home'
  }, {
    label: 'Analyse',
    path: 'analytics',
    icon: 'trending_up'
  }, {
    label: 'Settings',
    path: 'setup',
    icon: 'settings'
  }]
  public constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.setupTitle();
  }

  private setupTitle() {
    //this.titleService.setTitle(newTitle);
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data))
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }
  }
}
