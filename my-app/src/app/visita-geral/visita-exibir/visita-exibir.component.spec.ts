import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaExibirComponent } from './visita-exibir.component';

describe('VisitaExibirComponent', () => {
  let component: VisitaExibirComponent;
  let fixture: ComponentFixture<VisitaExibirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaExibirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
