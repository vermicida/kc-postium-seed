import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';

describe('UserService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        UserService
      ]
    });
  });

  it('Debería instanciarse', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

});
