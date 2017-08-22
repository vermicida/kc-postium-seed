import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Category } from './category';
import { CategoryService } from './category.service';

@Injectable()
export class CategoryResolveService implements Resolve<Category> {

  constructor(private _categoryService: CategoryService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Category> {
    return this._categoryService.getCategory(+route.params['categoryId']);
  }

}
