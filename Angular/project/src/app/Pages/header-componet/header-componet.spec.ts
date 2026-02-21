import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponet } from './header-componet';

describe('HeaderComponet', () => {
  let component: HeaderComponet;
  let fixture: ComponentFixture<HeaderComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
