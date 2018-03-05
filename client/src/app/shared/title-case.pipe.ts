import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToTitleCase'
})
export class ConvertToTitleCasePipe implements PipeTransform {
    transform(value: string) {
        return value.split(' ')
             .map(word => {
                word = word.toLowerCase();
                if(word === '' || word === 'of' || word === 'the'){
                    return word;
                } else {
                    return word.charAt(0).toUpperCase() + word.substr(1)
                }
             })
             .join(' ');           
    }
}