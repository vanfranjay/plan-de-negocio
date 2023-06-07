import { TestBed } from '@angular/core/testing';

import { ComplementarioService } from './complementario.service';

describe('ComplementarioService', () => {
  let service: ComplementarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplementarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
