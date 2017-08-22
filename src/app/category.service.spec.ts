import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { CategoryService } from './category.service';

describe('CategoryService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClient
      ],
      providers: [
        CategoryService
      ]
    });
  });

  it('Debería instanciarse', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));

});
