import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAndsetValue } from './get-andset-value';

describe('GetAndsetValue', () => {
  let component: GetAndsetValue;
  let fixture: ComponentFixture<GetAndsetValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAndsetValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAndsetValue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
