import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AppSettings} from "./app.settings";
import {User} from "./model/user.model";

@Injectable()
export class UserService {

    api = AppSettings.baseUrl;

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User> {
        return this.http.get<User>(`${this.api}`)
    }
}