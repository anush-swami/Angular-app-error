import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryInfoComponent } from './country-info/country-info.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'allcountries/:regionName', component: AllCountriesComponent},
    { path: 'allcountries/currency/:currencyCode', pathMatch: 'full' ,component: AllCountriesComponent },
    { path: 'allcountries/language/:languageCode', pathMatch: 'full' ,component: AllCountriesComponent },
    { path: 'country-view/:country.name', component: CountryInfoComponent}
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
 
export class AppRoutingModule { }