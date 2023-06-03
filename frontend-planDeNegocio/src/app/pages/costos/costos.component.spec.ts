import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosComponent } from './costos.component';

describe('CostosComponent', () => {
  let component: CostosComponent;
  let fixture: ComponentFixture<CostosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
