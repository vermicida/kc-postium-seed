import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderBarComponent,
        SearchBoxComponent
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería instanciarse', () => {
    expect(component).toBeTruthy();
  });

  it('Debería existir una directiva RouterOutlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

});
