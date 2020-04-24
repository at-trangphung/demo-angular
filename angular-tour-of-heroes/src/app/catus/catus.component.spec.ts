import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatusComponent } from './catus.component';

describe('CatusComponent', () => {
  let component: CatusComponent;
  let fixture: ComponentFixture<CatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
