import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class RequesterService{
    headers: HttpHeaders;

    constructor(
        private httpClient : HttpClient
    ){}

    request(url: string, method: string, body: {}, options: {}): Observable<HttpEvent<any>> {
        return this.httpClient.request(new HttpRequest(method, url, body, options)).pipe(
            tap(data=>data)
        );
     }    


    get<T>(url: string, options: {}): Observable<T> {
        return this.httpClient.get<T>(url, options).pipe(
            tap(data => data)
        );
    }

    post<T>(url: string, body: any, options: {}): Observable<T> {
        return this.httpClient.post<T>(url, body, options).pipe(
            tap(data => data)
        );
    }

}