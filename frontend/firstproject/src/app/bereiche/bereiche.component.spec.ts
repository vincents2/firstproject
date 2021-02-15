import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BereicheComponent } from './bereiche.component';

describe('BereicheComponent', () => {
  let component: BereicheComponent;
  let fixture: ComponentFixture<BereicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BereicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BereicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
