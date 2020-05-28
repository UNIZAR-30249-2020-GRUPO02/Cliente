import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModHorarioComponent } from './mod-horario.component';

describe('ModHorarioComponent', () => {
  let component: ModHorarioComponent;
  let fixture: ComponentFixture<ModHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
