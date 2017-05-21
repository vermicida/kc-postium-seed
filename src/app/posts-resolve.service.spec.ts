import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BackendUriProvider } from './settings';
import { PostService } from './post.service';
import { PostsResolveService } from './posts-resolve.service';

describe('PostsResolveService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        BackendUriProvider,
        PostService,
        PostsResolveService
      ]
    });
  });

  it('Debería instanciarse', inject([PostsResolveService], (service: PostsResolveService) => {
    expect(service).toBeTruthy();
  }));

});
