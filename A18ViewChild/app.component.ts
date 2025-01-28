//alternative to input/output or rxjs BehaviorSubject
/*
template: This contains the HTML template for the component:
<input #myInput type="text">: Creates an input field with the template reference variable #myInput.
<button (click)="focusInput()">Focus Input</button>: Creates a button that, when clicked, calls the focusInput() method.


@ViewChild('myInput') myInput!: ElementRef;:
This line uses the @ViewChild decorator to access the input element with the template reference variable #myInput.
myInput: This variable will hold a reference to the ElementRef of the input element.
!: This is the non-null assertion operator, which assumes that the myInput element will be available after the component is initialized.


focusInput(): This method is called when the button is clicked.
if (this.myInput): This optional check ensures that the input element has been initialized before attempting to focus on it.
this.myInput.nativeElement.focus();: This line focuses the input element by calling the focus() method on the nativeElement of the ElementRef.


*/



import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  template: `
    <input #myInput type="text" />
    <button (click)="focusInput()">Focus Input</button>
  `
})
export class AppComponent {
  @ViewChild('myInput') myInput!: ElementRef;

  focusInput() {
    if (this.myInput) {
      this.myInput.nativeElement.focus();
    }
  }
}