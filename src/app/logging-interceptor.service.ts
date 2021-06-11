import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class LoggingInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Out Going Request!');
        console.log(req.url);
        return next.handle(req).pipe(
            tap(event => {
                console.log('incomming Response');
                console.log(event);
                if (event.type === HttpEventType.Response) {
                    console.log('Response Arrived, body data: ');
                    console.log(event.body);
                }
            })
        );
    }
}