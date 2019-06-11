import {Injectable} from '@angular/core';
import {Todo} from '../interface';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private data: Todo[] = [
    {id: 999, description: 'For ', category: 1, content: 'test1'},
    {id: 998, description: 'test', category: 2, content: 'test2'},
    {id: 997, description: 'purpose ', category: 3, content: 'test3'},
  ];

  constructor() {
  }

  getTodos(): Todo[] {
    return this.data;
  }

  delete(ids: number[]): Todo[] {
    this.data = this.data.filter(item => ids.indexOf(item.id) === -1);
    return this.data;
  }
}
