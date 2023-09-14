import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(
      'https://api.open-meteo.com/v1/forecast?latitude=40.41&longitude=111.88&temperature_unit=fahrenheit&current_weather=true'
    );
    // Lat = 40.410283648176744, Lon = -111.88816705409161
  }
}

export interface WeatherImport {
  current_weather: CurrentWeather;
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export interface CurrentWeather {
  is_day: boolean;
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}
