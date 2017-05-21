import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BackendUriProvider } from './settings';
import { PostService } from './post.service';
import { PostDetailsResolveService } from './post-details-resolve.service';

describe('PostDetailsResolveService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        BackendUriProvider,
        PostService,
        PostDetailsResolveService
      ]
    });
  });

  it('Debería instanciarse', inject([PostDetailsResolveService], (service: PostDetailsResolveService) => {
    expect(service).toBeTruthy();
  }));

});
