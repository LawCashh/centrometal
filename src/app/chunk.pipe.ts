import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

  transform(arrJson: any[], chunkSize: number): any[] {
    const newArr = [];
    for (let i = 0; i < arrJson.length; i += chunkSize) {
      newArr.push(arrJson.slice(i, i + chunkSize));
    }
    return newArr;
  }

}
