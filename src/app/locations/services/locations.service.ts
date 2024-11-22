import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationSerialization } from '../models/location-serialization';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private _url: string = 'https://rickandmortyapi.com/api/location'

  constructor(private _http: HttpClient) { }

  get_all(): Observable<LocationSerialization[]>{
    return this._http.get<LocationSerialization[]>(this._url);
  }
}
