import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BackendUriProvider } from './settings';
import { PostService } from './post.service';

describe('PostService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        BackendUriProvider,
        PostService
      ]
    });
  });

  it('Debería instanciarse', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

});
