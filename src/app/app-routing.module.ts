import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SunsetsComponent } from './components/sunsets/sunsets.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: SunsetsComponent,
    path: 'sunsets',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
