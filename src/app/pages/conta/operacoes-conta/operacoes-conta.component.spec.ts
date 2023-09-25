import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesContaComponent } from './operacoes-conta.component';

describe('OperacoesContaComponent', () => {
  let component: OperacoesContaComponent;
  let fixture: ComponentFixture<OperacoesContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperacoesContaComponent]
    });
    fixture = TestBed.createComponent(OperacoesContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
