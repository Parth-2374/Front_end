import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundComponet } from './notfound-componet';

describe('NotfoundComponet', () => {
  let component: NotfoundComponet;
  let fixture: ComponentFixture<NotfoundComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
