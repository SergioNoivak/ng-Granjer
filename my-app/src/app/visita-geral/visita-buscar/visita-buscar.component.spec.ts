import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaBuscarComponent } from './visita-buscar.component';

describe('VisitaBuscarComponent', () => {
  let component: VisitaBuscarComponent;
  let fixture: ComponentFixture<VisitaBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
