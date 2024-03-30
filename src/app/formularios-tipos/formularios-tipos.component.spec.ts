import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosTiposComponent } from './formularios-tipos.component';

describe('FormulariosTiposComponent', () => {
  let component: FormulariosTiposComponent;
  let fixture: ComponentFixture<FormulariosTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulariosTiposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulariosTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
