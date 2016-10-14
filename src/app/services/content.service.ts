

export abstract class ContentService {
    public data: any;

    constructor () {

    }

    abstract get (url, opts)

    abstract post (url, opts)

    abstract put (url, opts)

    abstract destroy (url, opts)

}