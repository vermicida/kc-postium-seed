import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderBarComponent } from './header-bar.component';
import { SearchBoxComponent } from './../search-box/search-box.component';

describe('HeaderBarComponent', () => {

  let component: HeaderBarComponent;
  let fixture: ComponentFixture<HeaderBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [
        HeaderBarComponent,
        SearchBoxComponent
      ]
    });
    fixture = TestBed.createComponent(HeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería instanciarse', () => {
    expect(component).toBeTruthy();
  });

  xit('Debería existir un enlace a /new-story', () => {
    let des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let idx = des.findIndex(de => de.properties.href === '/new-story');
    expect(idx).toBeGreaterThan(-1);
  });

  it('Debería existir un componente SearchBoxComponent', () => {
    let de = fixture.debugElement.query(By.directive(SearchBoxComponent));
    expect(de).not.toBeNull();
  });

});
