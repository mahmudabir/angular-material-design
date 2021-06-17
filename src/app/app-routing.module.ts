import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {SliderComponent} from "./slider/slider.component";

const routes: Routes = [
  { path: 'slider', component: SliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
