import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitaComponent } from './add-visita.component';

describe('AddVisitaComponent', () => {
  let component: AddVisitaComponent;
  let fixture: ComponentFixture<AddVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
