import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogoryBtnsComponent } from './catogory-btns.component';

describe('CatogoryBtnsComponent', () => {
  let component: CatogoryBtnsComponent;
  let fixture: ComponentFixture<CatogoryBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogoryBtnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatogoryBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
