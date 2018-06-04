import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesitemComponent } from './servicesitem.component';

describe('ServicesitemComponent', () => {
  let component: ServicesitemComponent;
  let fixture: ComponentFixture<ServicesitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
