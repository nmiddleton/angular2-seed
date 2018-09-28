import {Component} from 'angular2/core'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title: string = 'The Title of courses page';
    courses: string [] = ["Course1","Course2","Course3"];

}