import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { customValidator } from './validators'; // Import the custom validator


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;

  /*
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }
  */
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, customValidator])
    });
  }

  onSubmit() {
    // Handle form submission
    console.log(this.myForm.value);
  }
}