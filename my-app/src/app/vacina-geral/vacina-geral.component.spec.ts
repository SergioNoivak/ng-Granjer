import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaGeralComponent } from './vacina-geral.component';

describe('VacinaGeralComponent', () => {
  let component: VacinaGeralComponent;
  let fixture: ComponentFixture<VacinaGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacinaGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
