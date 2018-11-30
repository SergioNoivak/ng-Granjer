import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirContaComponent } from './exibir-conta.component';

describe('ExibirContaComponent', () => {
  let component: ExibirContaComponent;
  let fixture: ComponentFixture<ExibirContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
