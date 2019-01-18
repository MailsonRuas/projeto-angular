import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {
  transform(value: any, args?: any): any {
  	return value.toString().replace(/^([\d]{2})([\d]{3})([\d]{3})/gm,"$1.$2-$3");
  }
}
