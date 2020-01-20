import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleDotComponent } from './circle-dot.component';

describe('CircleDotComponent', () => {
  let component: CircleDotComponent;
  let fixture: ComponentFixture<CircleDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
