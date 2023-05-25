import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementarioComponent } from './complementario.component';

describe('ComplementarioComponent', () => {
  let component: ComplementarioComponent;
  let fixture: ComponentFixture<ComplementarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplementarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplementarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
