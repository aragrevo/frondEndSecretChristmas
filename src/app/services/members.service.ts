import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ResponseFamily, Member } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  URL = 'https://secretfriendchristmas.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getFamily() {
    return this.http.get<ResponseFamily>(this.URL);
  }

  updateMember(member: Member) {
    const id = member._id;
    return new Promise(resolve => {
      this.http.post(`${this.URL}/${id}`, member)
        .subscribe(resp => {
          // tslint:disable-next-line: no-string-literal
          if (!resp['ok']) {
            resolve(false);
            return;
          }

          resolve(true);
        });
    });
  }
}
