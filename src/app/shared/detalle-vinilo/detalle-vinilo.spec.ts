import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVinilo } from './detalle-vinilo';

describe('DetalleVinilo', () => {
  let component: DetalleVinilo;
  let fixture: ComponentFixture<DetalleVinilo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVinilo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVinilo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
