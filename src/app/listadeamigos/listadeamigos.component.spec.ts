import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeamigosComponent } from './listadeamigos.component';

describe('ListadeamigosComponent', () => {
  let component: ListadeamigosComponent;
  let fixture: ComponentFixture<ListadeamigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadeamigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadeamigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
