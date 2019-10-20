import {Inject, Injectable} from '@angular/core';
import {NgxThumborConfig} from "./interfaces/ngxthumbor.interface";
import * as Thumbor from "thumbor";

@Injectable({
  providedIn: 'root'
})
export class NgxThumborService {

  private _thumbor: Thumbor;

  constructor(@Inject('config') private config: NgxThumborConfig) {
    this._thumbor = new Thumbor(config.key, config.server);
  }

  get thumbor() {
    return this._thumbor;
  }

}
