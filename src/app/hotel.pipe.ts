import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelPipe'
})
export class HotelPipe implements PipeTransform {

  transform(nom: string, nb:number): string {
  
   return nom +" " +nb +"★";
 }

}
