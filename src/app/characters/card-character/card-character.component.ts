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
  }
}
