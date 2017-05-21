import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PostFormComponent } from './post-form.component';

describe('PostFormComponent', () => {

  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        PostFormComponent
      ]
    });
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
  });

  it('Debería instanciarse', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
