/**
 * Created by smiracle on 9/27/16.
 */
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {PageDataContentService} from "../../services/pagedata.content.service";


@Component({
    selector: 'home',
    templateUrl: 'home.html'
})

export class Home implements OnInit {

    content: any;
    title: string;
    route: any;
    sub: any;
    data: any;

    constructor (private contentService: PageDataContentService, route: ActivatedRoute) {

        this.title = '';
        this.content = {};
        this.route = route;

    }


    ngOnInit() {

        var url = '';

        this.route.data.subscribe( v => url = v.path );

        this.getContent(url);

    }


    getContent( url ) {

        this.content = this.contentService.get(url);

    }


}
