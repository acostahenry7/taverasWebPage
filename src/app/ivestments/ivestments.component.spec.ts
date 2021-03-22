import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvestmentsComponent } from './ivestments.component';

describe('IvestmentsComponent', () => {
  let component: IvestmentsComponent;
  let fixture: ComponentFixture<IvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvestmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
