import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customPipe'
})

export class custPipe implements  PipeTransform {
    
    transform(value: String) {
        if(!value) return null;
        else return value.slice(0, 20);
    }
}