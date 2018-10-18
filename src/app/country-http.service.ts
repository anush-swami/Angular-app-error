import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryHttpService {

  public baseUrl = 'https://restcountries.eu/rest/v2/';

  constructor(public _http: HttpClient) { }

  public getAllCountries(regionName): any{
    let myResponse = this._http.get(this.baseUrl + 'region' +'/' + regionName)
    return myResponse; 
  }

  public getSingleCountryDetails(countryName): any{
    let myResponse = this._http.get(this.baseUrl + 'name' +'/' + countryName)
    return myResponse;
  }

  public getAllCountriesByCurrency(currencyCode): any{
    let myResponse = this._http.get(this.baseUrl + 'currency' +'/' + currencyCode)
    return myResponse;
  }

  public getAllCountriesByLanguage(languageCode): any{
    let myResponse = this._http.get(this.baseUrl + 'lang' +'/' + languageCode)
    return myResponse;
  }
}
