import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAppEnComponent } from './menu-app-en.component';

describe('MenuAppEnComponent', () => {
  let component: MenuAppEnComponent;
  let fixture: ComponentFixture<MenuAppEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAppEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAppEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
