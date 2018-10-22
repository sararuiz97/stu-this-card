import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebglDashboardComponent } from './webgl-dashboard.component';

describe('WebglDashboardComponent', () => {
  let component: WebglDashboardComponent;
  let fixture: ComponentFixture<WebglDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebglDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebglDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
