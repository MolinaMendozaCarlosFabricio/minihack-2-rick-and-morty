import { characterService } from './../service';
import { Component } from '@angular/core';
import { character } from '../characterModel';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {
  characters: character[] = [];

  constructor(private characterService: characterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe({
      next: (data) => (this.characters = data),
      error: (err) => console.error('Error fetching characters:', err),
    });
    this.getCharacters();
  }

  getCharacters(){
    const list_characters_link = localStorage.getItem("characters_list");
    if(list_characters_link){
      for(let i: number = 0; i < list_characters_link.length; i++){
        this.characterService.getCharacterByUrl(list_characters_link[i]).subscribe(
          (response) => {
            this.characters.push(response);
          },
          (error) => console.log("Error:", error)
        );
      }
    }
  }
}
