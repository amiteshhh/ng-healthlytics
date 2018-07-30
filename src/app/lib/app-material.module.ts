import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule, MatIconModule, MatListModule} from '@angular/material';
//import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

var modules = [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule, MatIconModule, MatListModule]

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }