import {Injectable} from '@angular/core';
import {Todo} from '../interface';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private data: Todo[] = [
    {id: 999, description: 'For ', category: 0, content: 'test1'},
    {id: 998, description: 'test', category: 1, content: 'test2'},
    {id: 997, description: 'purpose ', category: 2, content: 'test3'},
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

  getTodo(id: number): Todo {
    return this.data.find(item => item.id === id);
  }
}
