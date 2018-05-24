import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseViewAllComponent } from './enterprise-view-all.component';

describe('EnterpriseViewAllComponent', () => {
  let component: EnterpriseViewAllComponent;
  let fixture: ComponentFixture<EnterpriseViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
