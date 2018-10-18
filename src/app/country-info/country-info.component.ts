import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryHttpService} from '../country-http.service';
import {AppInterface} from '../apllication-interface';
import {NgxSpinnerService} from 'ngx-spinner';
import {Location} from '@angular/common';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {

  public currentCountry: AppInterface;
  public countryName;

  constructor(private route: ActivatedRoute, private _http: CountryHttpService, private spinner: NgxSpinnerService,
              private location: Location) {
  }

  ngOnInit() {
    this.countryName = this.route.snapshot.paramMap.get('country.name');
    this.getSingleCountry(this.countryName);

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
  }

  getSingleCountry(Name) {
    this._http.getSingleCountryDetails(Name).subscribe(
      data => {
        this.currentCountry = data;
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
