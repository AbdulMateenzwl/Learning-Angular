import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  pure: false
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, length: number) {
    console.log('ShortenPipe called with value:', value, 'and length:', length);
    if (value.length > length) {
      return value.substr(0, length) + ' ...';
    }
    return value;
  }
}
