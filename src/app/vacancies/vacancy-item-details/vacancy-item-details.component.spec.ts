import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyItemDetailsComponent } from './vacancy-item-details.component';

describe('VacancyItemDetailsComponent', () => {
  let component: VacancyItemDetailsComponent;
  let fixture: ComponentFixture<VacancyItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
