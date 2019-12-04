import {Inject, Injectable} from '@angular/core';
import {NgxThumborConfig} from "./interfaces/ngxthumbor.interface";
import * as ThumborUrlBuilder from "thumbor-url-builder";

@Injectable({
    providedIn: 'root'
})
export class NgxThumborService {

    // tslint:disable-next-line:variable-name
    private _thumbor: ThumborUrlBuilder;

    constructor(@Inject('config') private config: NgxThumborConfig) {
        this._thumbor = new ThumborUrlBuilder(config.key, config.server);
    }

    get thumbor() {
        return this._thumbor;
    }

}
