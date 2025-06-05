import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollingDashboardComponent } from './polling-dashboard.component';

describe('PollingDashboardComponent', () => {
  let component: PollingDashboardComponent;
  let fixture: ComponentFixture<PollingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollingDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
