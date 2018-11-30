import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizGeralComponent } from './matriz-geral.component';

describe('MatrizGeralComponent', () => {
  let component: MatrizGeralComponent;
  let fixture: ComponentFixture<MatrizGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrizGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
