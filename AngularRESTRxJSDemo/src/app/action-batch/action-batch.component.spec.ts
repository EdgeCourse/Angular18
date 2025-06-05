import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBatchComponent } from './action-batch.component';

describe('ActionBatchComponent', () => {
  let component: ActionBatchComponent;
  let fixture: ComponentFixture<ActionBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionBatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
