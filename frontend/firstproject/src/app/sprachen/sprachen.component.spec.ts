import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprachenComponent } from './sprachen.component';

describe('SprachenComponent', () => {
  let component: SprachenComponent;
  let fixture: ComponentFixture<SprachenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprachenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprachenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
