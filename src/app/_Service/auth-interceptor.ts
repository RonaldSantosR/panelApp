import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
    HttpResponse, HttpUserEvent, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { Observable } from "rxjs";
import { BrowserStorageService } from './browserstorage.service';
import { RequesterService } from './requester.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    headers: HttpHeaders;
    browserStorageSubscription: Subscription;
    peticionNuevoToken: boolean = false;

    constructor(
        private browserStorageService: BrowserStorageService,
        private requesterService: RequesterService
    ) {
        this.headers = new HttpHeaders({
            'Authorization': 'Bearer ' + this.browserStorageService.get("token")
        });

        this.browserStorageSubscription = this.browserStorageService.tokenActualChanged.subscribe(
            () => {
                this.headers = new HttpHeaders({
                    'Authorization': 'Bearer ' + this.browserStorageService.get("token")
                });
            }
        )
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        let authReq = req;

        authReq = req.clone({ headers: this.headers });

        return next.handle(authReq).pipe(
            tap( data => {
            },
            (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 498) {
                        console.log("El Token es invalido: Error 498")
                    }
                    else if (error.status === 894) {
                        if (!this.peticionNuevoToken) {
                            this.peticionNuevoToken = true;
                            this.browserStorageService.set("token", this.browserStorageService.get("refreshtoken"));

                            return this.requesterService.post<any>('http://localhost:9100/token', null, {}).subscribe(
                                data => {
                                    if (data) {
                                        this.browserStorageService.set("token", data.token);
                                        this.browserStorageService.set("refreshtoken", data.rt);
                                        this.peticionNuevoToken = false;
                                    }
                                }
                            )
                        }
                        else {
                            console.log("EL REFRESH HA EXPIRADO");
                        }
                    }
                }
            })
        )
    }



}
