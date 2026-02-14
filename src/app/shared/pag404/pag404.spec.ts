import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag404 } from './pag404';

describe('Pag404', () => {
  let component: Pag404;
  let fixture: ComponentFixture<Pag404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pag404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pag404);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
