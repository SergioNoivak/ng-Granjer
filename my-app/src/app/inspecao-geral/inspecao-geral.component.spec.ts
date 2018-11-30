import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecaoGeralComponent } from './inspecao-geral.component';

describe('InspecaoGeralComponent', () => {
  let component: InspecaoGeralComponent;
  let fixture: ComponentFixture<InspecaoGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspecaoGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspecaoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
