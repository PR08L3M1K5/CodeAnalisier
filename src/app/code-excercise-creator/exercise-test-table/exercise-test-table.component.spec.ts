import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTestTableComponent } from './exercise-test-table.component';

describe('ExerciseTestTableComponent', () => {
  let component: ExerciseTestTableComponent;
  let fixture: ComponentFixture<ExerciseTestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseTestTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseTestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
