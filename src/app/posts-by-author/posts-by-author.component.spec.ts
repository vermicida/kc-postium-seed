import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { NativeWindowProvider } from './../window';
import { PostPreviewComponent } from './../post-preview/post-preview.component';
import { PostsByAuthorComponent } from './posts-by-author.component';
import { PostsListComponent } from './../posts-list/posts-list.component';

class RouterStub { }

class ActivatedRouteStub {

  private _data$ = new Subject();

  push(value): void {
    this._data$.next(value);
  }

  get data() {
    return this._data$.asObservable();
  }
}

describe('PostsByAuthorComponent', () => {

  let component: PostsByAuthorComponent;
  let fixture: ComponentFixture<PostsByAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostPreviewComponent,
        PostsByAuthorComponent,
        PostsListComponent
      ],
      providers: [
        NativeWindowProvider,
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(PostsByAuthorComponent);
    component = fixture.componentInstance;
  });

  it('Debería instanciarse', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
