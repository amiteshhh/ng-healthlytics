import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';

var modules = [MatButtonModule, MatCheckboxModule, MatCardModule]

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }