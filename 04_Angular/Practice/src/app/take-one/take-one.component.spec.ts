import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOneComponent } from './take-one.component';

describe('TakeOneComponent', () => {
  let component: TakeOneComponent;
  let fixture: ComponentFixture<TakeOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeOneComponent]
    });
    fixture = TestBed.createComponent(TakeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
