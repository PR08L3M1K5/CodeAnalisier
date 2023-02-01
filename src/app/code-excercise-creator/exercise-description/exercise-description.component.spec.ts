import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDescriptionComponent } from './exercise-description.component';

describe('ExcerciseDescriptionComponent', () => {
  let component: ExerciseDescriptionComponent;
  let fixture: ComponentFixture<ExerciseDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
