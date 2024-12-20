import { FormControl, ValidationErrors } from '@angular/forms';

export function customValidator(control: FormControl): ValidationErrors | null {
  const value = control.value;
  if (value.length < 5) {
    return { 'tooShort': true };
  }
  return null;
}