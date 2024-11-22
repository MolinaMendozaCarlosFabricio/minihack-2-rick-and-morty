import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { character } from './characterModel'; // Importa la interfaz correctamente

@Injectable({
  providedIn: 'root',
})
export class characterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los personajes
  getAllCharacters(): Observable<character[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.results.map((character: any) => this.mapCharacterWithImage(character)))
    );
  }

  // Método para obtener un personaje por ID
  getCharacterById(id: number): Observable<character> {
    return this.http.get<character>(`${this.apiUrl}/${id}`).pipe(
      map((character) => this.mapCharacterWithImage(character))
    );
  }

  // Método que mapea la respuesta de la API a la estructura del modelo
  private mapCharacterWithImage(character: any): character {
    return {
      ...character,
      imageUrl: character.image,  // Asignar la URL de la imagen al campo imageUrl
    };
  }

  getCharacterByUrl(url: string): Observable<character>{
    return this.http.get<character>(url);
  }
}
