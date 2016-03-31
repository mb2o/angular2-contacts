import { Component } from 'angular2/core';

@Component({
	selector: 'contact',
	template: `     
        <div>
            <div class="prop">
                <label for="firstName">First Name:</label> 
                <input [(ngModel)]="contact.firstName" id="firstName">
            </div>
            <div class="prop">
                <label for="lastName">Last Name:</label>
                <input [(ngModel)]="contact.lastName" id="lastName"> 
            </div>
            <div class="prop">
                <label for="phone">Phone Number:</label>
                <input [(ngModel)]="contact.phoneNumber" id="phone">
            </div>
            <div class="prop">
                <label for="email">Email:</label>
                <input [(ngModel)]="contact.emailAddress" id="email">
            </div>
        </div>
    `,
	inputs: ["contact"],
	styleUrls: ['../assets/css/contact.css']
})
export class ContactComponent {
	public contact = {};
}
