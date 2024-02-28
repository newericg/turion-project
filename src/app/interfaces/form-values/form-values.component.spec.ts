import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValuesComponent } from './form-values.component';

describe('FormValuesComponent', () => {
  let component: FormValuesComponent;
  let fixture: ComponentFixture<FormValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
