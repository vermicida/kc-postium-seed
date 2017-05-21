import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BackendUriProvider } from './settings';
import { CategoryService } from './category.service';
import { CategoryResolveService } from './category-resolve.service';

describe('PostDetailsResolveService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        BackendUriProvider,
        CategoryService,
        CategoryResolveService
      ]
    });
  });

  it('Debería instanciarse', inject([CategoryResolveService], (service: CategoryResolveService) => {
    expect(service).toBeTruthy();
  }));

});
