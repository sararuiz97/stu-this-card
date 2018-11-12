import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionNavbarComponent } from './collection-navbar.component';

describe('CollectionNavbarComponent', () => {
  let component: CollectionNavbarComponent;
  let fixture: ComponentFixture<CollectionNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
