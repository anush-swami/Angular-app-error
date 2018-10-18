In this angular application first, there is an all-region view than when one region is clicked then all the countries of that particular region is displayed. The application is working fine except at one point, When I open the all countries view it is loading all the countries but sometimes in that particular view some countries are loaded and some not (For example, if there are 30 countries in a particular view than 8 countries are loaded and others are not loaded) I am attaching the screenshot to make more clear what error I am facing. 

In console I'm getting this message - 

ERROR TypeError: Cannot read property 'outlets' of null
    at createNewSegmentGroup (router.js:2549)
    at updateSegmentGroup (router.js:2496)
    at router.js:2508
    at forEach (router.js:701)
    at updateSegmentGroupChildren (router.js:2506)
    at createUrlTree (router.js:2333)
I searched over the internet and I found that this error is because in view all countries path I am loading the allcountriescomponent also on currency and language filter also I am calling the allcountriescomponent.... So when I open the path of allcountries view than currency and language filter becomes null.

# COUNTRY

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
