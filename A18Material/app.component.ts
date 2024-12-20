//ng add @angular/material
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AppComponent {
  myForm: any; // Declare the form group type

  constructor(private fb: FormBuilder) {}

  ngOnInit() { // Lifecycle hook called after constructor
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email]
    });
  }
}