import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogoryCardsComponent } from './catogory-cards.component';

describe('CatogoryCardsComponent', () => {
  let component: CatogoryCardsComponent;
  let fixture: ComponentFixture<CatogoryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogoryCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatogoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
