import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaelleComponent } from './faelle.component';

describe('FaelleComponent', () => {
  let component: FaelleComponent;
  let fixture: ComponentFixture<FaelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
