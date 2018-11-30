import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecaoExibirComponent } from './inspecao-exibir.component';

describe('InspecaoExibirComponent', () => {
  let component: InspecaoExibirComponent;
  let fixture: ComponentFixture<InspecaoExibirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspecaoExibirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspecaoExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
