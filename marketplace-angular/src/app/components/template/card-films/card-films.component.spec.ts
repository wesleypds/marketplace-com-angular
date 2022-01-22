import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmsComponent } from './card-films.component';

describe('CardFilmsComponent', () => {
  let component: CardFilmsComponent;
  let fixture: ComponentFixture<CardFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
