import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryHttpService } from '../country-http.service';
import { AppInterface } from '../apllication-interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  public allCountries:AppInterface;
  public regionName;
  public currency_code;
  public language_code;

  constructor(private route:ActivatedRoute, private _http:CountryHttpService, private spinner:NgxSpinnerService, private location: Location) { }

  ngOnInit() {
    this.regionName = this.route.snapshot.paramMap.get('regionName');
    this.getCountries(this.regionName);

    this.currency_code = this.route.snapshot.paramMap.get('currencyCode');
    this.getByCurrency(this.currency_code);

    this.language_code = this.route.snapshot.paramMap.get('languageCode');
    this.getByLanguage(this.language_code);

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
  }, 1500);
  }

  getCountries(Name) {
    this._http.getAllCountries(Name).subscribe(
      data => {
        this.allCountries = data;
        console.log(data);
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    )
  }

  getByCurrency(code) {
    this._http.getAllCountriesByCurrency(code).subscribe(
      data => {
        this.allCountries = data;
        console.log(data);
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    )
  }

  getByLanguage(code) {
    this._http.getAllCountriesByLanguage(code).subscribe(
      data => {
        this.allCountries = data;
        console.log(data);
      },
      error => {
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}
