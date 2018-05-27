import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyAddEditComponent } from './vacancy-add-edit.component';

describe('VacancyAddEditComponent', () => {
  let component: VacancyAddEditComponent;
  let fixture: ComponentFixture<VacancyAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
