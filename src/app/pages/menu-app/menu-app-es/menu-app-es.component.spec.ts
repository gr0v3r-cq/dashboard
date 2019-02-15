import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAppEsComponent } from './menu-app-es.component';

describe('MenuAppEsComponent', () => {
  let component: MenuAppEsComponent;
  let fixture: ComponentFixture<MenuAppEsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAppEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAppEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
