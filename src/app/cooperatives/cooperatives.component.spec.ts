import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativesComponent } from './cooperatives.component';

describe('CooperativesComponent', () => {
  let component: CooperativesComponent;
  let fixture: ComponentFixture<CooperativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
