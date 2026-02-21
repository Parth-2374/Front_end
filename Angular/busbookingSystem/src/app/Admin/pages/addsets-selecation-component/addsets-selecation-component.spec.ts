import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsetsSelecationComponent } from './addsets-selecation-component';

describe('AddsetsSelecationComponent', () => {
  let component: AddsetsSelecationComponent;
  let fixture: ComponentFixture<AddsetsSelecationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddsetsSelecationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsetsSelecationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
