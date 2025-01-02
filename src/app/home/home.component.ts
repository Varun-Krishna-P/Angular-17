import { Component } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'inside home'
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: Housinglocation = {
    id: 999,
    name: 'house 1',
    city: 'Chennai',
    state: 'Tamil Nadu',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false
  };

}
