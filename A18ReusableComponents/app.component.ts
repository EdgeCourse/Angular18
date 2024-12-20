import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidator } from './validators';
import { NameInputComponent } from './name-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NameInputComponent]
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const nameControl = new FormControl('', [Validators.required, customValidator]);

    this.myForm = this.fb.group({
      name: nameControl,
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