import { NgModule } from "@angular/core";
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatTabsModule,
    MatToolbarModule
  ]
})

export class MaterialModule{}
