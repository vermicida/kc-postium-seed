import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { BackendUriProvider } from './../settings';
import { NewStoryComponent } from './new-story.component';
import { PostFormComponent } from './../post-form/post-form.component';
import { PostService } from './../post.service';

class RouterStub { }

describe('NewStoryComponent', () => {

  let component: NewStoryComponent;
  let fixture: ComponentFixture<NewStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule
      ],
      declarations: [
        NewStoryComponent,
        PostFormComponent
      ],
      providers: [
        BackendUriProvider,
        PostService,
        { provide: Router, useClass: RouterStub }
      ]
    });
    fixture = TestBed.createComponent(NewStoryComponent);
    component = fixture.componentInstance;
  });

  it('Debería instanciarse', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
