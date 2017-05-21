import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { BackendUri } from './settings';
import { Category } from './category';

@Injectable()
export class CategoryService {

  constructor(
    private _http: Http,
    @Inject(BackendUri) private _backendUri) { }

  getCategories(): Observable<Category[]> {
    return this._http
      .get(`${this._backendUri}/categories`)
      .map((response: Response): Category[] => Category.fromJsonToList(response.json()));
  }

  getCategory(id: number): Observable<Category> {
    return this._http
      .get(`${this._backendUri}/categories/${id}`)
      .map((response: Response): Category => Category.fromJson(response.json()));
  }

  createCategory(category: Category): Observable<Category> {
    return this._http
      .post(`${this._backendUri}/categories`, category)
      .map((response: Response): Category => Category.fromJson(response.json));
  }

}
