import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  name = signal('');
  email = signal('');
  message = signal('');

  // Validation rules
  nameError = computed(() =>
    this.name().trim().length === 0 ? 'Name is required' : ''
  );

  emailError = computed(() => {
    const val = this.email().trim();
    if (!val) return 'Email is required';
    const isValid = /^[\w.-]+@[a-z\d.-]+\.[a-z]{2,}$/i.test(val);
    return isValid ? '' : 'Enter a valid email';
  });

  messageError = computed(() =>
    this.message().trim().length === 0 ? 'Message is required' : ''
  );

  // Overall form validity
  isFormValid = computed(() =>
    !this.nameError() && !this.emailError() && !this.messageError()
  );

  submit() {
    if (!this.isFormValid()) return;

    console.log('Form submitted:', {
      name: this.name(),
      email: this.email(),
      message: this.message(),
    });

    // Clear form
    this.name.set('');
    this.email.set('');
    this.message.set('');
  }
}
/*
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
      this.form.reset();
    }
  }
}
*/
