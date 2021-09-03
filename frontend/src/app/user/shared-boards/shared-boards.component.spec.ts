import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBoardsComponent } from './shared-boards.component';

describe('SharedBoardsComponent', () => {
  let component: SharedBoardsComponent;
  let fixture: ComponentFixture<SharedBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
