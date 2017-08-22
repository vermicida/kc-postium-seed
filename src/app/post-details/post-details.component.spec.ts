import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

import { CategoryBoxComponent } from '../category-box/category-box.component';
import { NativeWindowProvider } from '../window';
import { Post } from '../post';
import { PostFormComponent } from '../post-form/post-form.component';
import { PostDetailsComponent } from './post-details.component';
import { PostService } from '../post.service';
import { User } from '../user';

class RouterStub { }

class ActivatedRouteStub {
  data: Observable<any> = Observable.empty();
}

describe('PostDetailsComponent', () => {

  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        CategoryBoxComponent,
        PostFormComponent,
        PostDetailsComponent
      ],
      providers: [
        NativeWindowProvider,
        PostService,
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: Router, useClass: RouterStub }
      ]
    });
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
  });

  it('Debería instanciarse', () => {
    component.post = {};
    component.post.author = {};
    component.post.likes = [];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
