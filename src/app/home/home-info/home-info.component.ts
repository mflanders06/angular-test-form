import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss'],
})
export class HomeInfoComponent implements OnInit {
  weatherJson = {};

  constructor(private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.homeService.getData().subscribe((weatherData) => {});
  }
}
