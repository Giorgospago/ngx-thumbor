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
    @Input() sharpen: {amount: number, radius: number, luminanceOnly: boolean};
    @Input() stretch: boolean;
    @Input() stripEXIF: boolean;
    @Input() stripICC: boolean;
    @Input() upscale: boolean;

    @Input() resize: {width: number, height: number};
    @Input() options: keyof typeof ThumbDirective;

    constructor(
        el: ElementRef,
        ts: NgxThumborService
    ) {
        ts.thumbor.setImagePath(el.nativeElement.src);

        if (this.resize) { ts.thumbor.resize(this.resize.width, this.resize.height); }
        if (this.autoJPG) { ts.thumbor.filter(`autojpg()`); }
        if (this.backgroundColor) { ts.thumbor.filter(`background_color(${this.backgroundColor})`); }
        if (this.blur) {
            if (this.blur > 150) { this.blur = 150; }
            ts.thumbor.filter(`blur(${this.blur})`);
        }
        if (this.brightness) {
            if (this.brightness > 100) { this.brightness = 100; }
            if (this.brightness < -100) { this.brightness = -100; }
            ts.thumbor.filter(`brightness(${this.brightness})`);
        }
        if (this.contrast) {
            if (this.contrast > 100) { this.contrast = 100; }
            if (this.contrast < -100) { this.contrast = -100; }
            ts.thumbor.filter(`contrast(${this.contrast})`);
        }
        if (this.equalize) { ts.thumbor.filter(`equalize()`); }
        if (this.extractFocal) { ts.thumbor.filter(`extract_focal()`); }
        if (this.fill) { ts.thumbor.filter(`fill(${this.fill})`); }
        if (this.format) { ts.thumbor.filter(`format(${this.format})`); }
        if (this.grayScale) { ts.thumbor.filter(`grayscale()`); }
        if (this.maxBytes) { ts.thumbor.filter(`max_bytes(${this.maxBytes})`); }
        if (this.noUpscale) { ts.thumbor.filter(`no_upscale()`); }
        if (this.noise) { ts.thumbor.filter(`noise(${this.noise})`); }
        if (this.proportion) {
            if (this.proportion > 1) { this.proportion = 1; }
            if (this.proportion < 0) { this.proportion = 0; }
            ts.thumbor.filter(`proportion(${this.proportion})`);
        }
        if (this.quality) {
            if (this.quality > 100) { this.quality = 100; }
            if (this.quality < 0) { this.quality = 0; }
            ts.thumbor.filter(`quality(${this.quality})`);
        }
        if (this.rgb) {
            if (this.rgb.r > 100) { this.rgb.r = 100; }
            if (this.rgb.r < -100) { this.rgb.r = -100; }
            if (this.rgb.b > 100) { this.rgb.b = 100; }
            if (this.rgb.b < -100) { this.rgb.b = -100; }
            if (this.rgb.g > 100) { this.rgb.g = 100; }
            if (this.rgb.g < -100) { this.rgb.g = -100; }
            ts.thumbor.filter(`rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`);
        }
        if (this.rotate) {
            if (this.rotate > 359) { this.rotate = 359; }
            if (this.rotate < 0) { this.rotate = 0; }
            ts.thumbor.filter(`rotate(${this.rotate})`);
        }
        if (this.sharpen) {
            if (this.sharpen.amount > 10) { this.sharpen.amount = 10; }
            if (this.sharpen.amount < 0) { this.sharpen.amount = 0; }
            if (this.sharpen.radius > 2) { this.sharpen.radius = 2; }
            if (this.sharpen.radius < 0) { this.sharpen.radius = 0; }
            ts.thumbor.filter(`sharpen(${this.sharpen.amount},${this.sharpen.radius},${this.sharpen.luminanceOnly})`);
        }
        if (this.stretch) { ts.thumbor.filter(`stretch()`); }
        if (this.stripEXIF) { ts.thumbor.filter(`strip_exif()`); }
        if (this.stripICC) { ts.thumbor.filter(`strip_icc()`); }
        if (this.upscale) { ts.thumbor.filter(`upscale()`); }

        el.nativeElement.src = ts.thumbor.buildUrl();
    }

}
