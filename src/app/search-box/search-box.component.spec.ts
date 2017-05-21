import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {

  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule
      ],
      declarations: [
        SearchBoxComponent
      ]
    })
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
  });

  it('Debería instanciarse', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
