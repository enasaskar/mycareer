import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanylogoitemComponent } from './companylogoitem.component';

describe('CompanylogoitemComponent', () => {
  let component: CompanylogoitemComponent;
  let fixture: ComponentFixture<CompanylogoitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanylogoitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanylogoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
