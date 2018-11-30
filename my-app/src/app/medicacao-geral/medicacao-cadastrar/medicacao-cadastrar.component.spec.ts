import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicacaoCadastrarComponent } from './medicacao-cadastrar.component';

describe('MedicacaoCadastrarComponent', () => {
  let component: MedicacaoCadastrarComponent;
  let fixture: ComponentFixture<MedicacaoCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicacaoCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicacaoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
