import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTestsComponent } from './exercise-tests.component';

describe('ExerciseTestsComponent', () => {
  let component: ExerciseTestsComponent;
  let fixture: ComponentFixture<ExerciseTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
