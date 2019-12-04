import {Inject, Injectable} from '@angular/core';
import {NgxThumborConfig} from "./interfaces/ngxthumbor.interface";
import * as ThumborUrlBuilder from "thumbor-url-builder";

@Injectable({
    providedIn: 'root'
})
export class NgxThumborService {

    // tslint:disable-next-line:variable-name
    private _thumbor: ThumborUrlBuilder;
    // tslint:disable-next-line:variable-name
    private _disable: boolean = false;

    constructor(@Inject('config') private config: NgxThumborConfig) {
        this._thumbor = new ThumborUrlBuilder(config.key, config.server);
        if (config.disable) {
            this._disable = true;
        }
    }

    get thumbor() {
        return this._thumbor;
    }

    get disable() {
        return this._disable;
    }

}
