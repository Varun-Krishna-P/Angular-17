import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'inside home';
  housingLocationList!: Housinglocation[];
  // housingLocationList: HousingLocation[] = [];
  // housingService: HousingService = inject(HousingService);
  constructor(private _housingService: HousingService) {
    this.housingLocationList = this._housingService.getAllHousingLocations();
  }

}
