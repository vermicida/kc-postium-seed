import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { NativeWindowProvider } from './../window';
import { PostPreviewComponent } from './../post-preview/post-preview.component';
import { PostsListComponent } from './../posts-list/posts-list.component';
import { PostsViewComponent } from './posts-view.component';

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

describe('PostsViewComponent', () => {

  let component: PostsViewComponent;
  let fixture: ComponentFixture<PostsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostPreviewComponent,
        PostsListComponent,
        PostsViewComponent
      ],
      providers: [
        NativeWindowProvider,
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: Router, useClass: RouterStub }
      ]
    });
    fixture = TestBed.createComponent(PostsViewComponent);
    component = fixture.componentInstance;
  });

  it('Debería instanciarse', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
