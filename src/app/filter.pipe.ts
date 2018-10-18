import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(AllCountries: any, term: any): any {
    //check if term is undefined
    if(term === undefined) return AllCountries;
    //return updated AllCountries array
    return AllCountries.filter(function(country){
      return country.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
