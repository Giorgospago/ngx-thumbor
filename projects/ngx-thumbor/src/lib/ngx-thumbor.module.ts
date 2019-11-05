import {NgModule, ModuleWithProviders} from '@angular/core';
import {ThumbDirective} from './ngx-thumbor.directive';
import {NgxThumborConfig} from "./interfaces/ngxthumbor.interface";

@NgModule({
    declarations: [ThumbDirective],
    imports: [],
    exports: [ThumbDirective]
})
export class NgxThumborModule {
    static forRoot(config: NgxThumborConfig): ModuleWithProviders {
        return {
            ngModule: NgxThumborModule,
            providers: [NgxThumborModule, {provide: 'config', useValue: config}]
        };
    }
}
