import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecaoBuscarComponent } from './inspecao-buscar.component';

describe('InspecaoBuscarComponent', () => {
  let component: InspecaoBuscarComponent;
  let fixture: ComponentFixture<InspecaoBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspecaoBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspecaoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
