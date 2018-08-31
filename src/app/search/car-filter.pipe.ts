import { PipeTransform, Pipe } from '@angular/core';
import { Car } from '../model/car.model';

@Pipe({
    name: 'carFilter'
})

export class CarFilterPipe implements PipeTransform {
    transform(Carlisting: Car[], searchTerm: string): Car[] {
        debugger;
        if (!Carlisting || !searchTerm) {
            return Carlisting;
        }

        return Carlisting
        ? Carlisting.filter(element => element.Model && element.Model.toLowerCase().includes(searchTerm.toString().toLowerCase())) 
        : Carlisting;
    }
}
