import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSourceCodeComponent } from './exercise-source-code.component';

describe('ExerciseSourceCodeComponent', () => {
  let component: ExerciseSourceCodeComponent;
  let fixture: ComponentFixture<ExerciseSourceCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseSourceCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseSourceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
