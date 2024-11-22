import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCharacterComponent } from './card-character/card-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  ,exports:[
    CardCharacterComponent
  ]
})
export class CharactersModule { }
