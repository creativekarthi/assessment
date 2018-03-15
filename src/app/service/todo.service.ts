import { TodoUser } from '../models/todo-user';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class TodoService {

  apiUrl = environment.api.getTodo.url;

  constructor(private _http: HttpClient) { }

  _getTodoList(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  _createTodoList(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data);
  }

  _deleteTodoList(id: number): Observable<any> {
    return this._http.delete(this.apiUrl + '/'+ id);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}
