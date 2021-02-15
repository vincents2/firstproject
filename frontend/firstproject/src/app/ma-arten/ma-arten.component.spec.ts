import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaArtenComponent } from './ma-arten.component';

describe('MaArtenComponent', () => {
  let component: MaArtenComponent;
  let fixture: ComponentFixture<MaArtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaArtenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaArtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
