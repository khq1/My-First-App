import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButComponent } from './radio-but.component';

describe('RadioButComponent', () => {
  let component: RadioButComponent;
  let fixture: ComponentFixture<RadioButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
