import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from './category';
import { environment } from '../environments/environment';

@Injectable()
export class CategoryService {

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`${environment.backendUri}/categories`);
  }

  getCategory(id: number): Observable<Category> {
    return this._http.get<Category>(`${environment.backendUri}/categories/${id}`);
  }

}
