import { Component } from "angular2/core";
import { HttpTestService } from "./http-test.service";

@Component({
	selector: "http-test",
	template: `
		<button (click)="onTestGet()">GET Request</button>
		<p>Output: {{ getData }}</p>
		<button (click)="onTestPost()">POST Request</button>
		<p>Output: {{ postData }}</p>
	`,
	providers: [HttpTestService]
})
export class HttpTestComponent {
	getData:string;
	postData:string;

	constructor(private _httpService:HttpTestService) {
	}

	onTestGet() {
		this._httpService.getCurrentTime()
			.subscribe(
				data => this.getData = JSON.stringify(data),
				error => console.error(error),
				() => console.log("Finished")
			);
	}

	onTestPost() {
		this._httpService.postJSON()
			.subscribe(
				data => this.postData = JSON.stringify(data),
				error => console.error(error),
				() => console.log("Finished")
			);
	}
}