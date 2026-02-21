import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponet } from './about-componet';

describe('AboutComponet', () => {
  let component: AboutComponet;
  let fixture: ComponentFixture<AboutComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
