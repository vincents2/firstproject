import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HilfeArtenComponent } from './hilfe-arten.component';

describe('HilfeArtenComponent', () => {
  let component: HilfeArtenComponent;
  let fixture: ComponentFixture<HilfeArtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HilfeArtenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HilfeArtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
