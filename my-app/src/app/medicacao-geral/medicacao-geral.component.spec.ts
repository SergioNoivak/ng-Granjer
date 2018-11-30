import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicacaoGeralComponent } from './medicacao-geral.component';

describe('MedicacaoGeralComponent', () => {
  let component: MedicacaoGeralComponent;
  let fixture: ComponentFixture<MedicacaoGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicacaoGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicacaoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
