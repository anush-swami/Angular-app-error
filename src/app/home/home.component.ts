import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private router:Router, private spinner:NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
  }, 1500);
  }

  public regionNames:any = [
    {
      regionName: 'Africa',
      image: 'assets/Images/AFRICA.png',
      },
      {
      regionName: 'Americas',
      image: 'assets/Images/AMERICA.png',
      },
      {
      regionName: 'Asia',
      image: 'assets/Images/ASIA.png',
      },
      {
      regionName: 'Europe',
      image: 'assets/Images/EUROPE.png',
      },
      {
      regionName: 'Oceania',
      image: 'assets/Images/OCEANIA.png',
      }
  ]

}
