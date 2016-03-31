import { Component, OnInit } from "angular2/core";
import { Router, RouteParams } from "angular2/router";

import { ContactService } from "./contact.service";
import { Contact } from "./contact";

@Component({
	template: `
        <form #myform="ngForm" (ngSubmit)="onSubmit()">
            <div class="prop">
                <label for="firstName">First Name</label> 
                <input id="firstName" required #firstName="ngForm"
                	   ngControl="firstName" [(ngModel)]="newContact.firstName">
               	<span *ngIf="!firstName.valid">Invalid</span>
            </div>
            <div class="prop">
                <label for="lastName">Last Name</label>
                <input id="lastName" required
                	   ngControl="lastName" [(ngModel)]="newContact.lastName"> 
            </div>
            <div class="prop">
                <label for="phone">Phone Number</label>
                <input id="phone" required
                	   ngControl="phone" [(ngModel)]="newContact.phoneNumber">
            </div>
            <div class="prop">
                <label for="email">Email</label>
                <input id="email" required
                	   ngControl="email" [(ngModel)]="newContact.emailAddress">
            </div>
        	<button type="submit" [disabled]="!myform.form.valid">Create Contact</button>
        </form>
    `,
	providers: [ContactService],
	styleUrls: ['../assets/css/contact.css']
})
export class NewContactComponent {
	newContact:Contact;

	constructor(private _contactService:ContactService,
				private _router:Router,
				private _routeParams:RouteParams) {
	}

	ngOnInit() {
		this.newContact = {
			firstName: "",
			lastName: this._routeParams.get("lastName"),
			phoneNumber: "",
			emailAddress: ""
		};
	}

	onSubmit() {
		this._contactService.insertContact(this.newContact);
		this._router.navigate(["Contacts"]);
	}
}
