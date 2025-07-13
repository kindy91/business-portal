import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'totalPages', standalone: true })
export class TotalPagesPipe implements PipeTransform {
  transform(total: number, pageSize: number): number {
    return Math.ceil(total / pageSize);
  }
}
