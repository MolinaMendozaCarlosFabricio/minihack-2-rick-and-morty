import { Component, OnInit } from '@angular/core';
import { LocationSerialization } from '../models/location-serialization';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-table-locations',
  templateUrl: './table-locations.component.html',
  styleUrl: './table-locations.component.css'
})
export class TableLocationsComponent implements OnInit {
  locations: LocationSerialization[] = [];

  constructor(
    private locationsServices: LocationsService,
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
}
