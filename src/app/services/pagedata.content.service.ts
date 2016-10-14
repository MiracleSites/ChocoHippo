import {ContentService} from "./content.service";
import {PageData} from "../../data/PageData";
import 'rxjs/add/operator/toPromise';


/**
 *
 */
export class PageDataContentService extends ContentService{
    public data: any;

    constructor () {

        super();

    }

    /**
     *
     * @param string url
     * @returns {any}
     */
    get (url) {

        return PageData[url];

    }

    post () {

    }

    put () {

    }

    destroy () {

    }

}