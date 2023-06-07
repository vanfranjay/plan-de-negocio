import { TestBed } from '@angular/core/testing';

import { Pregunta1Service } from './pregunta1.service';

describe('Pregunta1Service', () => {
  let service: Pregunta1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pregunta1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
