import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { CategoryService } from './category.service';
import { CategoryResolveService } from './category-resolve.service';

describe('PostDetailsResolveService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClient
      ],
      providers: [
        CategoryService,
        CategoryResolveService
      ]
    });
  });

  it('Debería instanciarse', inject([CategoryResolveService], (service: CategoryResolveService) => {
    expect(service).toBeTruthy();
  }));

});
