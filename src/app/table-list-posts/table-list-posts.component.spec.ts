import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListPostsComponent } from './table-list-posts.component';

describe('TableListPostsComponent', () => {
  let component: TableListPostsComponent;
  let fixture: ComponentFixture<TableListPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
