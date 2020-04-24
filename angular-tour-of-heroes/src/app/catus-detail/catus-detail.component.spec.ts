import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatusDetailComponent } from './catus-detail.component';

describe('CatusDetailComponent', () => {
  let component: CatusDetailComponent;
  let fixture: ComponentFixture<CatusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatusDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
