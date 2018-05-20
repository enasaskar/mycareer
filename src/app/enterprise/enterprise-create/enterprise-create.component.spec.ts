import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseCreateComponent } from './enterprise-create.component';

describe('EnterpriseCreateComponent', () => {
  let component: EnterpriseCreateComponent;
  let fixture: ComponentFixture<EnterpriseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
