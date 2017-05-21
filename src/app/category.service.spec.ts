import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BackendUriProvider } from './settings';
import { CategoryService } from './category.service';

describe('CategoryService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        BackendUriProvider,
        CategoryService
      ]
    });
  });

  it('Debería instanciarse', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));

});
