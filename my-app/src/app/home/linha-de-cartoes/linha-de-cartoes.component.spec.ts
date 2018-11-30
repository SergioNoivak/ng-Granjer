import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaDeCartoesComponent } from './linha-de-cartoes.component';

describe('LinhaDeCartoesComponent', () => {
  let component: LinhaDeCartoesComponent;
  let fixture: ComponentFixture<LinhaDeCartoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhaDeCartoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhaDeCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
