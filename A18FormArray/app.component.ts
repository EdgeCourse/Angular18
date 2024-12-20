import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { customValidator } from './validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, customValidator]],
      hobbies: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  addHobby() {
    (this.myForm.get('hobbies') as FormArray).push(this.fb.control(''));
  }

  onSubmit() {
    // Handle form submission
    console.log(this.myForm.value);
  }
}