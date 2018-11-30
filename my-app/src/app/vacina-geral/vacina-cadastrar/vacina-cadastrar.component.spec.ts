import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaCadastrarComponent } from './vacina-cadastrar.component';

describe('VacinaCadastrarComponent', () => {
  let component: VacinaCadastrarComponent;
  let fixture: ComponentFixture<VacinaCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacinaCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
