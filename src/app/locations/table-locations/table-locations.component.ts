import { Component, OnInit } from '@angular/core';
import { LocationSerialization } from '../models/location-serialization';
import { LocationsService } from '../services/locations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-locations',
  templateUrl: './table-locations.component.html',
  styleUrl: './table-locations.component.css'
})
export class TableLocationsComponent implements OnInit {
  locations: LocationSerialization[] = [];

  constructor(
    private locationsServices: LocationsService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.getLocations();
  }

  getLocations(){
    this.locationsServices.get_all().subscribe(
      (response) => {
        console.log("Geting locations");
        this.locations = response;
      },
      (error) => {
        console.log("Error:", error);
      }
    );
  }
  
  redirect_to_view_characters(characters: string[]){
    localStorage.setItem('characters_list', JSON.stringify(characters));
    this.router.navigate(["/characters"]);
  }
}
