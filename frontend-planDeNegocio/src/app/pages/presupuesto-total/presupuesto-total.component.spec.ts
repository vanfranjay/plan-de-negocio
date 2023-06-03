import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoTotalComponent } from './presupuesto-total.component';

describe('PresupuestoTotalComponent', () => {
  let component: PresupuestoTotalComponent;
  let fixture: ComponentFixture<PresupuestoTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
