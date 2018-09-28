import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";

@Component({
    selector: 'my-app',
    directives: [CoursesComponent],
    template: '<h1>Hello First Angular 2 App</h1><courses></courses>'

})
export class AppComponent { }