import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AnalyticsComponent } from './analytics/analytics.component'
import { SetupComponent } from './setup/setup.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {title: 'Home'} },
  { path: 'analytics', component: AnalyticsComponent, data: {title: 'Analytics'} },
  { path: 'setup', component: SetupComponent, data: {title: 'Setup'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }