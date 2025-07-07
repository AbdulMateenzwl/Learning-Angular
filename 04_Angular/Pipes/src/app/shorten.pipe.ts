import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
// Simple Pipe
// export class ShortenPipe implements PipeTransform {
//   transform(value: any) {
//     if (value.length > 10) {
//       return value.substr(0, 10) + ' ...';
//     }
//     return value;
//   }
// }
// Pssing args to the pipe
export class ShortenPipe implements PipeTransform {
  transform(value: any, length: number) {
    if (value.length > 10) {
      return value.substr(0, 10) + ' ...';
    }
    return value;
  }
}
