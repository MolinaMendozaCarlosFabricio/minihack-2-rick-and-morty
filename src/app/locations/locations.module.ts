import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLocationsComponent } from './view-locations/view-locations.component';
import { TableLocationsComponent } from './table-locations/table-locations.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ViewLocationsComponent,
    TableLocationsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ViewLocationsComponent
  ]
})
export class LocationsModule { }
