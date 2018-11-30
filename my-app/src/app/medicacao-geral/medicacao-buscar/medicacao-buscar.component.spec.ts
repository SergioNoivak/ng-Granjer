import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicacaoBuscarComponent } from './medicacao-buscar.component';

describe('MedicacaoBuscarComponent', () => {
  let component: MedicacaoBuscarComponent;
  let fixture: ComponentFixture<MedicacaoBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicacaoBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicacaoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
