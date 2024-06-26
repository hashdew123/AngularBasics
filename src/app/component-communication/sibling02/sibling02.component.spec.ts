import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibling02Component } from './sibling02.component';

describe('Sibling02Component', () => {
  let component: Sibling02Component;
  let fixture: ComponentFixture<Sibling02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sibling02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sibling02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
