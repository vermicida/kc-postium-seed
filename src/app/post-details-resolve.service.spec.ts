import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './post.service';
import { PostDetailsResolveService } from './post-details-resolve.service';

describe('PostDetailsResolveService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        PostService,
        PostDetailsResolveService
      ]
    });
  });

  it('Debería instanciarse', inject([PostDetailsResolveService], (service: PostDetailsResolveService) => {
    expect(service).toBeTruthy();
  }));

});
