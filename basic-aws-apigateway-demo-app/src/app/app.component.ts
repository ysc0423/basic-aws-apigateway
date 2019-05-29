import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'basic-aws-apigateway-demo-app';
  message$: Observable<string>;
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:53249/api/v1/ActiveDirectory'; // change to your own url
  }

  ngOnInit() {
    // const headers = new HttpHeaders().set(
    //   'Authorization',
    //   'bearer xxxx' // provide a valid token
    // );

    const headers = new HttpHeaders().set('withCredential', 'true');

    this.message$ = this.http
      .post<Response>(this.url, { headers })
      .pipe(map(data => data.username));
  }
}

class Response {
  userIdentifier: string;
  username: string;
  displayName: string;
}
