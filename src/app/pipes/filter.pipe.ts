import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm:string): any[] {
    
    if(!items){
      return [];
    }
    if(!searchTerm){
      return items;
    }

    searchTerm = searchTerm;

    return items.filter(it => {
      if( it.items.includes(searchTerm)){
        return items;
      }
    })


  }

}
