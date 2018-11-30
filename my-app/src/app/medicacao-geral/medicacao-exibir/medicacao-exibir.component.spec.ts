import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicacaoExibirComponent } from './medicacao-exibir.component';

describe('MedicacaoExibirComponent', () => {
  let component: MedicacaoExibirComponent;
  let fixture: ComponentFixture<MedicacaoExibirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicacaoExibirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicacaoExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
