import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLocationsComponent } from './locations/view-locations/view-locations.component';
import { CardCharacterComponent } from './characters/card-character/card-character.component';

const routes: Routes = [
  {path: '', component: ViewLocationsComponent},
  {path: 'characters', component: CardCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
