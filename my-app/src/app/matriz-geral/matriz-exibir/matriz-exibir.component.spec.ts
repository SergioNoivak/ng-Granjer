import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizExibirComponent } from './matriz-exibir.component';

describe('MatrizExibirComponent', () => {
  let component: MatrizExibirComponent;
  let fixture: ComponentFixture<MatrizExibirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrizExibirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
