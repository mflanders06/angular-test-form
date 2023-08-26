import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunsetsComponent } from './components/sunsets/sunsets.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, SunsetsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
