/**
 * Created by smiracle on 9/27/16.
 */
import {Component, OnInit} from '@angular/core';
import {ContentService} from "../../services/content.service";
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'home',
    templateUrl: 'home.html'
})

export class Home implements OnInit {

    errorMessage: string;
    content: any;
    title: string;
    route: any;
    sub: any;
    data: any;
    mode = 'Observable';

    constructor (private contentService: ContentService, route: ActivatedRoute) {

        this.title = '';
        this.content = {};
        this.route = route;

        this.data = {
            dataUrl: ''
        }

    }


    ngOnInit() {

        var url = '';

        this.route.data.subscribe( v => url = v.contentUrl );

        this.getContent(url);

    }


    updateService(service) {


    }


    getContent( data ) {

        this.contentService.getContent(data).then( content => this.content = content);

    }


}
