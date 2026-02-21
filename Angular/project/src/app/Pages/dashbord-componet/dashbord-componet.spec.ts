import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordComponet } from './dashbord-componet';

describe('DashbordComponet', () => {
  let component: DashbordComponet;
  let fixture: ComponentFixture<DashbordComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
