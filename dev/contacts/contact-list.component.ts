import { Component, OnInit } from 'angular2/core';

import { ContactComponent } from "./contact.component";
import { ContactService } from "./contact.service";
import { Contact } from "./contact";

@Component({
	template: `
        <h2>My Contacts</h2>
        <ul>
            <li *ngFor="#contact of contacts"
                (click)="onSelect(contact)"
                [class.clicked]="selectedContact === contact">
                {{contact.firstName}} {{contact.lastName | uppercase}}
            </li>
        </ul>
        <contact *ngIf="selectedContact !== null" 
                 [contact]="selectedContact"></contact>
    `,
	directives: [ContactComponent],
	providers: [ContactService],
	styleUrls: ['../assets/css/contact-list.css']
})
export class ContactListComponent {

	public contacts:Contact[];
	public selectedContact:Contact = null;

	constructor(private _contactService:ContactService) {
	}

	ngOnInit() {
		this.getContacts();
	}

	onSelect(contact) {
		this.selectedContact = contact;
	}

	getContacts() {
		this._contactService
			.getContacts()
			.then((contacts:Contact[]) => this.contacts = contacts);
	}
}
