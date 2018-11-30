import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizCadastrarComponent } from './matriz-cadastrar.component';

describe('MatrizCadastrarComponent', () => {
  let component: MatrizCadastrarComponent;
  let fixture: ComponentFixture<MatrizCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrizCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
