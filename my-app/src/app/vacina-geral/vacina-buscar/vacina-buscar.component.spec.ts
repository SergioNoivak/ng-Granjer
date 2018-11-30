import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaBuscarComponent } from './vacina-buscar.component';

describe('VacinaBuscarComponent', () => {
  let component: VacinaBuscarComponent;
  let fixture: ComponentFixture<VacinaBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacinaBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
