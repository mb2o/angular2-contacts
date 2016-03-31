import { Component, OnInit } from "angular2/core";
import { ContactService } from "./contact.service";
import { Contact } from "./contact";
import { Router, RouteParams } from "angular2/router";

@Component({
	template: `
        <div>
            <div class="prop">
                <label for="firstName">First Name</label> 
                <input id="firstName" #firstName>
            </div>
            <div class="prop">
                <label for="lastName">Last Name</label>
                <input id="lastName" #lastName value="{{ passedLastName }}"> 
            </div>
            <div class="prop">
                <label for="phone">Phone Number</label>
                <input id="phone" #phone>
            </div>
            <div class="prop">
                <label for="email">Email</label>
                <input id="email" #email>
            </div>
        </div>
        <button (click)="onAddContact(firstName.value, lastName.value, phone.value, email.value)">Create</button>
    `,
	providers: [ContactService],
	styleUrls: ['../assets/css/contact.css']
})
export class NewContactComponent {

	public passedLastName: string = "";

	constructor(private _contactService:ContactService,
				private _router:Router,
				private _routeParams: RouteParams) {
	}

	ngOnInit() {
		this.passedLastName = this._routeParams.get("lastName");
	}

	onAddContact(firstName, lastName, phone, email) {
		let contact:Contact = {
			firstName: firstName,
			lastName: lastName,
			phoneNumber: phone,
			emailAddress: email
		};
		this._contactService.insertContact(contact);
		this._router.navigate(["Contacts"]);
	}
}
