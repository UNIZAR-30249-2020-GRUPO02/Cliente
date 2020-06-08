import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaDialogoComponent } from './ventana-dialogo.component';

describe('VentanaDialogoComponent', () => {
  let component: VentanaDialogoComponent;
  let fixture: ComponentFixture<VentanaDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanaDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
