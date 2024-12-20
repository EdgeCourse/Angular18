/*
Inject the FormBuilder service into the component's constructor.

Use the fb.group() method to create a FormGroup instance.
The name control is created with the required and customValidator validators.

Bind to the Template:
The formGroup and formControlName directives are used to bind the form and its controls to the HTML template.

Benefits of FormBuilder:

Concise Syntax: The FormBuilder provides a more concise way to create complex forms with multiple controls.
Improved Readability: The code is more readable and maintainable.
Reduced Boilerplate: Less code is required to create and configure form controls.

*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      name: ['', [Validators.required, customValidator]]
    });
  }

  onSubmit() {
    // Handle form submission
    console.log(this.myForm.value);
  }
}