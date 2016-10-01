import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Content }        from '../objects/content';
@Injectable()

export class ContentService {
    public url: string;  // URL to web API
    public model: any;

    constructor (private http: Http) {

        this.url = '';

    }

    setUrl(url) {

        console.log(url);
        this.url = url;

    }

    setModel (newModel) {

        this.model = newModel;

    }

    public getContent (url):  Promise<Content[]> {
        return this.http.get(url)
            .toPromise().then(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
       // return Observable.throw(errMsg);
    }

}