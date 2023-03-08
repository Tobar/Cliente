import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabecero2Component } from './cabecero2.component';

describe('Cabecero2Component', () => {
  let component: Cabecero2Component;
  let fixture: ComponentFixture<Cabecero2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cabecero2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabecero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
