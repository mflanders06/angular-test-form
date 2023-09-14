import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  HomeServiceService,
  CurrentWeather,
  WeatherImport,
} from 'src/app/services/home-service.service';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss'],
})
export class HomeInfoComponent implements OnInit {
  weatherSubscription = Subscription;

  todayWeather: CurrentWeather = {
    is_day: true,
    temperature: 0,
    time: '',
    weathercode: 0,
    winddirection: 0,
    windspeed: 0,
  };

  weatherJson: WeatherImport = {
    current_weather: this.todayWeather,
    elevation: 0,
    generationtime_ms: 0,
    latitude: 0,
    longitude: 0,
    timezone: '',
    timezone_abbreviation: '',
    utc_offset_seconds: 0,
  };

  constructor(private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.pullWeatherData();
  }

  // ngOnDestroy(): void {
  //   if (this.weatherSubscription) {
  //     this.weatherSubscription.unsubscribe();
  //   }
  // }

  pullWeatherData() {
    // this.weatherSubscription =
    this.homeService.getData().subscribe((weatherData: WeatherImport) => {
      this.weatherJson = weatherData;
      console.log(this.weatherJson.current_weather);
    });
  }
}
