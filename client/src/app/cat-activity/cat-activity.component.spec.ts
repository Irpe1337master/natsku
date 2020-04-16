import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatActivityComponent } from './cat-activity.component';

describe('CatActivityComponent', () => {
  let component: CatActivityComponent;
  let fixture: ComponentFixture<CatActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
