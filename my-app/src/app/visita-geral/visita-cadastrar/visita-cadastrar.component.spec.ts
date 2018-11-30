import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaCadastrarComponent } from './visita-cadastrar.component';

describe('VisitaCadastrarComponent', () => {
  let component: VisitaCadastrarComponent;
  let fixture: ComponentFixture<VisitaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
