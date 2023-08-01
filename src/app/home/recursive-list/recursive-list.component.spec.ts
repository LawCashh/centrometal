import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveListComponent } from './recursive-list.component';

describe('RecursiveListComponent', () => {
  let component: RecursiveListComponent;
  let fixture: ComponentFixture<RecursiveListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursiveListComponent]
    });
    fixture = TestBed.createComponent(RecursiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
