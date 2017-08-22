import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './post.service';
import { PostsResolveService } from './posts-resolve.service';

describe('PostsResolveService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        PostService,
        PostsResolveService
      ]
    });
  });

  it('Debería instanciarse', inject([PostsResolveService], (service: PostsResolveService) => {
    expect(service).toBeTruthy();
  }));

});
