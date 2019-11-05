import {Directive, ElementRef, Input} from "@angular/core";
import {NgxThumborService} from "./ngx-thumbor.service";

@Directive({
    selector: "img[thumb]"
})
export class ThumbDirective {

    @Input() autoJPG: boolean;
    @Input() backgroundColor: string;
    @Input() blur: number;
    @Input() brightness: number; // -100 to 100
    @Input() contrast: number; // -100 to 100
    @Input() equalize: boolean;
    @Input() extractFocal: boolean;
    @Input() fill: string;
    @Input() format: "webp" | "jpeg" | "gif" | "png";
    @Input() grayScale: boolean;
    @Input() maxBytes: number;
    @Input() noUpscale: boolean;
    @Input() noise: number; // 0 to 100
    @Input() proportion: number; // 0 to 1
    @Input() quality: number; // 0 to 100
    @Input() rgb: { r: number, g: number, b: number }; // -100 to 100
    @Input() rotate: number; // 0 to 359
    @Input() sharpen: {amount?: number, radius?: number, luminanceOnly?: boolean};
    @Input() stretch: boolean;
    @Input() stripEXIF: boolean;
    @Input() stripICC: boolean;
    @Input() upscale: boolean;

    @Input() width: number = 200;
    @Input() height: number = 200;
    @Input() options: any = {};

    constructor(
        el: ElementRef,
        ts: NgxThumborService
    ) {
        el.nativeElement.src = ts.thumbor.setImagePath(el.nativeElement.src).resize(50, 50).buildUrl();
    }

}
