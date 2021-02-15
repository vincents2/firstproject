import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertragArtenComponent } from './vertrag-arten.component';

describe('VertragArtenComponent', () => {
  let component: VertragArtenComponent;
  let fixture: ComponentFixture<VertragArtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertragArtenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertragArtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
