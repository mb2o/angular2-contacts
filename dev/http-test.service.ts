import { Injectable } from "angular2/core";
import { Http, Headers } from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpTestService {

	constructor(private _http:Http) {
	}

	getCurrentTime() {
		return this._http
			.get('http://jsonplaceholder.typicode.com/posts/1')
			.map(res => res.json());
	}

	postJSON() {
		var post = JSON.stringify({
			title: 'foobar',
			body: 'lorem ipsum dolor sit amet',
			userId: 1
		});
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		return this._http
			.post('http://jsonplaceholder.typicode.com/posts', post, {headers: headers})
			.map(res => res.json());
	}
}
