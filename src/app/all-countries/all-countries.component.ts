import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryHttpService} from '../country-http.service';
import {AppInterface} from '../apllication-interface';
import {NgxSpinnerService} from 'ngx-spinner';
import {Location} from '@angular/common';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  public allCountries: AppInterface;
  public regionName;
  public currency_code;
  public language_code;
  term: string;

  constructor(private route: ActivatedRoute, private countryHttpService: CountryHttpService, private spinner: NgxSpinnerService,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param.regionName) {
        this.regionName = param.regionName;
        this.getCountries(this.regionName);
      }
      if (param.currencyCode) {
        this.currency_code = param.currencyCode;
        this.getByCurrency(this.currency_code);
      }
      if (param.languageCode) {
        this.language_code = param.languageCode;
        this.getByLanguage(this.language_code);
      }
    });
    // this.regionName = this.route.snapshot.paramMap.get('regionName');
    // this.getCountries(this.regionName);
    //
    // this.currency_code = this.route.snapshot.paramMap.get('currencyCode');
    // this.getByCurrency(this.currency_code);
    //
    // this.language_code = this.route.snapshot.paramMap.get('languageCode');
    // this.getByLanguage(this.language_code);

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
  }

  getCountries(Name) {
    this.countryHttpService.getAllCountries(Name).subscribe(
      data => {
        this.allCountries = data;
        console.log(data);
      },
      error => {
        console.log('Some Error Occured');
        console.log(error.errorMessage);
      }
    );
  }

  getByCurrency(code) {
    this.countryHttpService.getAllCountriesByCurrency(code).subscribe(
      data => {
        this.allCountries = data;
        console.log(data);
      },
      error => {
        console.log('Some Error Occured');
        console.log(error.errorMessage);
      }
    );
  }

  getByLanguage(code) {
    this.countryHttpService.getAllCountriesByLanguage(code).subscribe(
      data => {
        this.allCountries = data;
        console.log(data);
      },
      error => {
        console.log('Some Error Occured');
        console.log(error.errorMessage);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
