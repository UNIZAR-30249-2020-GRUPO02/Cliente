import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEspacioComponent } from './info-espacio.component';

describe('InfoEspacioComponent', () => {
  let component: InfoEspacioComponent;
  let fixture: ComponentFixture<InfoEspacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEspacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
