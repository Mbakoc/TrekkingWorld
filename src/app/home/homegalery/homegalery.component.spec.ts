import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegaleryComponent } from './homegalery.component';

describe('HomegaleryComponent', () => {
  let component: HomegaleryComponent;
  let fixture: ComponentFixture<HomegaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomegaleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomegaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
