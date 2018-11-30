import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaGeralComponent } from './conta-geral.component';

describe('ContaGeralComponent', () => {
  let component: ContaGeralComponent;
  let fixture: ComponentFixture<ContaGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
