import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponet } from './register-componet';

describe('RegisterComponet', () => {
  let component: RegisterComponet;
  let fixture: ComponentFixture<RegisterComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
