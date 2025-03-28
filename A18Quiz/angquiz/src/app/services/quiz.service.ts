import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = [
    {
      question: 'What is a key benefit of Angular signals introduced in Angular 18?',
      options: [
        'They replace components with directives',
        'They simplify RxJS operators',
        'They enable fine-grained reactivity without zone.js',
        'They allow lazy loading of services'
      ],
      answer: 'They enable fine-grained reactivity without zone.js'
    },    

    {
      question: 'What is Angular?',
      options: ['A front-end framework', 'A backend language', 'A database', 'A design system'],
      answer: ''
    },
    {
      question: 'What does the `@Component` decorator do in Angular?',
      options: [
        'Defines an Angular service',
        'Specifies metadata for a component',
        'Bootstraps the entire Angular app',
        'Handles routing logic'
      ],
      answer: ''
    },
    
    {
      question: 'What does the Angular CLI command `ng g c` do?',
      options: ['Generates a class', 'Generates a component', 'Generates a controller', 'Generates a constant'],
      answer: ''
    },
    {
      question: 'What is the purpose of the `ngSwitch` directive in Angular?',
      options: [
        'Loops over a list of items',
        'Binds values to input fields',
        'Conditionally displays one element from many based on a matching value',
        'Defines a navigation route'
      ],
      answer: ''
    },
    {
      question: 'Which directive is used to loop over a list in Angular templates?',
      options: ['*ngIf', '*ngSwitch', '*ngRepeat', '*ngFor'],
      answer: ''
    },
    {
      question: 'What is a service in Angular used for?',
      options: ['UI rendering', 'Routing control', 'Business logic and data sharing', 'CSS styling'],
      answer: ''
    },
    {
      question: 'What lifecycle hook is called after the component’s view has been fully initialized?',
      options: ['ngOnInit', 'ngAfterViewInit', 'ngDoCheck', 'ngDestroy'],
      answer: ''
    },
    {
      question: 'Which file typically declares global styles in an Angular project?',
      options: ['main.ts', 'styles.scss', 'app.component.ts', 'index.html'],
      answer: ''
    },
    {
      question: 'What does `[()]` mean in Angular?',
      options: ['One-way binding', 'Event binding', 'Two-way binding', 'Interpolation'],
      answer: ''
    },
    {
      question: 'Which command starts a development server?',
      options: ['ng new', 'ng generate', 'ng build', 'ng serve'],
      answer: ''
    },
   
    {
      question: 'Which of the following is used for dependency injection in Angular?',
      options: [
        'NgZone',
        '@Injectable()',
        'NgFor',
        '@NgModule()'
      ],
      answer: ''
    },
    {
      question: 'What is the purpose of a constructor in an Angular component?',
      options: [
        'To define routes',
        'To set up dependency injection',
        'To handle events',
        'To register pipes'
      ],
      answer: ''
    },
    {
      question: 'What is the correct syntax for event binding in Angular?',
      options: [
        '(click)="myFunction()"',
        '[click]="myFunction()"',
        'click="myFunction()"',
        '{{ click="myFunction()" }}'
      ],
      answer: ''
    },
    {
      question: 'How do you share data from a parent component to a child component?',
      options: [
        '@Output()',
        '@Injectable()',
        '@Input()',
        'EventEmitter'
      ],
      answer: ''
    },
    {
      question: 'Which directive conditionally includes a template in the DOM?',
      options: [
        '*ngFor',
        '*ngIf',
        '*ngSwitch',
        '@ViewChild'
      ],
      answer: ''
    },
   
   { 
    question: 'What is the primary purpose of Angular’s RouterModule?',
    options: [
      'To make HTTP requests',
      'To enable lazy loading of components',
      'To manage navigation and URL routing',
      'To define NgModules'
    ],
    answer: ''
  },



    {
      question: 'What command builds the Angular project for production?',
      options: [
        'ng serve',
        'ng run',
        'ng build --prod',
        'ng create'
      ],
      answer: ''
    },
    {
      question: 'What does `ngOnDestroy()` lifecycle hook do?',
      options: [
        'Initializes services',
        'Runs after component input changes',
        'Cleans up just before the component is removed',
        'Re-renders the component'
      ],
      answer: ''
    },


    
    {
      question: 'How do you generate a new service using Angular CLI?',
      options: [
        'ng make service service-name',
        'ng g s service-name',
        'ng service create service-name',
        'ng init service service-name'
      ],
      answer: ''
    }, 
    
  ];

  private score = 0;

  getQuestions() {
    return this.questions;
  }

  getScore() {
    return this.score;
  }

  setScore(score: number) {
    this.score = score;
  }
}
