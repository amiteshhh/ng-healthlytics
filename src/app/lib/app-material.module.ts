import {MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule, MatIconModule} from '@angular/material';
//import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

var modules = [MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule, MatIconModule]

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }