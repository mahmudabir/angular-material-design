import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {SliderComponent} from "./slider/slider.component";
import {AddressFormComponent} from "./address-form/address-form.component";
import {TableComponent} from "./table/table.component";

const routes: Routes = [
  { path: 'slider', component: SliderComponent },
  { path: 'address-form', component: AddressFormComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
