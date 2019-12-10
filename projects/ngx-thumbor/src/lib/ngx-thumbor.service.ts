import {Inject, Injectable} from "@angular/core";
import {NgxThumborConfig} from "./interfaces/ngxthumbor.interface";
import * as ThumborUrlBuilder from "thumbor-url-builder";

@Injectable({
    providedIn: "root"
})
export class NgxThumborService {

    // tslint:disable-next-line:variable-name
    private _disable: boolean = false;

    constructor(@Inject("config") private config: NgxThumborConfig) {
        if (config.disable) {
            this._disable = true;
        }
    }

    get disable() {
        return this._disable;
    }

    public instance() {
        return new ThumborUrlBuilder(this.config.key, this.config.server);
    }

}
