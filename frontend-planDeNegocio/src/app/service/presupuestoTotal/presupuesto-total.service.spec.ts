import { TestBed } from '@angular/core/testing';

import { PresupuestoTotalService } from './presupuesto-total.service';

describe('PresupuestoTotalService', () => {
  let service: PresupuestoTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresupuestoTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
