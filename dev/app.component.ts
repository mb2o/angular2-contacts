import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";
import { Component } from 'angular2/core';

import { ContactListComponent } from './contacts/contact-list.component';
import { NewContactComponent } from "./contacts/new-contact.component";
import { HttpTestComponent } from "./http-test.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a> | 
                <a [routerLink]="['NewContact']">New Contact</a>
            </nav>
        </header>
        
        <div class="main">
            <router-outlet></router-outlet>
            <br>
            <br>
            
            <input type="checkbox" name="http"
                   (change)="showHttpSection = !showHttpSection">Show HTTP Info<br>
            <http-test *ngIf="showHttpSection"></http-test>
            
            <input type="checkbox" name="pipes" 
                   (change)="showPipesSection = !showPipesSection">Show Pipes Info<br>
            <div *ngIf="showPipesSection" class="pipes">
                <h3>Date Pipe</h3>
                <div>{{ date | date:'fullDate' }}</div>
                <h3>Number Pipe</h3>
                <div>{{ 4.567 | number:'1.2-2' }}</div>
                <h3>Currency Pipe</h3>
                <div>{{ 15.99 | currency:'EUR':true }}</div>
                <h3>Stateful Pipe</h3>
                <div>{{ randomData | async }}</div>
            </div>
        </div>
    `,
    directives: [ContactListComponent, HttpTestComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
    {path: '/newcontact', name: 'NewContact', component: NewContactComponent}
])
export class AppComponent {
    date = new Date();
    randomData = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Random data!'), 1000);
    });
    showPipesSection: boolean = false;
    showHttpSection: boolean = false;
}
