
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  template: `
    <input type="text" [formControl]="nameControl">
    <div *ngIf="nameControl.invalid && nameControl.touched">
      <span *ngIf="nameControl.errors?.['required']">Name is required</span>
      <span *ngIf="nameControl.errors?.['tooShort']">Name must be at least 5 characters long.</span>
    </div>
  `,
  standalone:true,
  imports:[FormControl]
})
export class NameInputComponent implements OnInit {
  @Input() nameControl!: FormControl;

  ngOnInit() {}
}