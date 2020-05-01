import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionEspaciosComponent } from './seleccion-espacios.component';

describe('SeleccionEspaciosComponent', () => {
  let component: SeleccionEspaciosComponent;
  let fixture: ComponentFixture<SeleccionEspaciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionEspaciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
