import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecaoCadastrarComponent } from './inspecao-cadastrar.component';

describe('InspecaoCadastrarComponent', () => {
  let component: InspecaoCadastrarComponent;
  let fixture: ComponentFixture<InspecaoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspecaoCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspecaoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
