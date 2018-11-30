import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaGeralComponent } from './visita-geral.component';

describe('VisitaGeralComponent', () => {
  let component: VisitaGeralComponent;
  let fixture: ComponentFixture<VisitaGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
