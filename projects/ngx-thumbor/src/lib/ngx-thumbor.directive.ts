import {Directive, ElementRef, Input, OnInit} from "@angular/core";
import {NgxThumborService} from "./ngx-thumbor.service";

@Directive({
    selector: "[thumbor]"
})
export class ThumbDirective implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @Input('thumbor') set setSrc(src: string) {
        this.src = src;
        this.buildUrl();
    }

    @Input() autoJPG: boolean;
    @Input() backgroundColor: string;
    @Input() blur: number;
    @Input() brightness: number; // -100 to 100
    @Input() contrast: number; // -100 to 100
    @Input() equalize: boolean;
    @Input() extractFocal: boolean;
    @Input() fill: string;
    @Input() format: 'webp' | 'jpeg' | 'gif' | 'png';
    @Input() grayScale: boolean;
    @Input() maxBytes: number;
    @Input() noUpscale: boolean;
    @Input() noise: number; // 0 to 100
    @Input() proportion: number; // 0 to 1
    @Input() quality: number; // 0 to 100
    @Input() rgb: { r: number, g: number, b: number }; // -100 to 100
    @Input() rotate: number; // 0 to 359
    @Input() sharpen: { amount: number, radius: number, luminanceOnly: boolean };
    @Input() stretch: boolean;
    @Input() stripEXIF: boolean;
    @Input() stripICC: boolean;
    @Input() upscale: boolean;

    @Input() resize: { width: number, height: number };

    public src: string;

    // @Input() options: keyof typeof ThumbDirective;

    constructor(
        private el: ElementRef,
        private ts: NgxThumborService
    ) {
    }

    ngOnInit(): void {
        this.buildUrl();
    }

    buildUrl(): void {
        if (this.resize) {
            this.ts.thumbor.resize(this.resize.width, this.resize.height);
        }
        if (this.autoJPG) {
            this.ts.thumbor.filter(`autojpg()`);
        }
        if (this.backgroundColor) {
            this.ts.thumbor.filter(`background_color(${this.backgroundColor})`);
        }
        if (this.blur) {
            if (this.blur > 150) {
                this.blur = 150;
            }
            this.ts.thumbor.filter(`blur(${this.blur})`);
        }
        if (this.brightness) {
            if (this.brightness > 100) {
                this.brightness = 100;
            }
            if (this.brightness < -100) {
                this.brightness = -100;
            }
            this.ts.thumbor.filter(`brightness(${this.brightness})`);
        }
        if (this.contrast) {
            if (this.contrast > 100) {
                this.contrast = 100;
            }
            if (this.contrast < -100) {
                this.contrast = -100;
            }
            this.ts.thumbor.filter(`contrast(${this.contrast})`);
        }
        if (this.equalize) {
            this.ts.thumbor.filter(`equalize()`);
        }
        if (this.extractFocal) {
            this.ts.thumbor.filter(`extract_focal()`);
        }
        if (this.fill) {
            this.ts.thumbor.filter(`fill(${this.fill})`);
        }
        if (this.format) {
            this.ts.thumbor.filter(`format(${this.format})`);
        }
        if (this.grayScale) {
            this.ts.thumbor.filter(`grayscale()`);
        }
        if (this.maxBytes) {
            this.ts.thumbor.filter(`max_bytes(${this.maxBytes})`);
        }
        if (this.noUpscale) {
            this.ts.thumbor.filter(`no_upscale()`);
        }
        if (this.noise) {
            this.ts.thumbor.filter(`noise(${this.noise})`);
        }
        if (this.proportion) {
            if (this.proportion > 1) {
                this.proportion = 1;
            }
            if (this.proportion < 0) {
                this.proportion = 0;
            }
            this.ts.thumbor.filter(`proportion(${this.proportion})`);
        }
        if (this.quality) {
            if (this.quality > 100) {
                this.quality = 100;
            }
            if (this.quality < 0) {
                this.quality = 0;
            }
            this.ts.thumbor.filter(`quality(${this.quality})`);
        }
        if (this.rgb) {
            if (this.rgb.r > 100) {
                this.rgb.r = 100;
            }
            if (this.rgb.r < -100) {
                this.rgb.r = -100;
            }
            if (this.rgb.b > 100) {
                this.rgb.b = 100;
            }
            if (this.rgb.b < -100) {
                this.rgb.b = -100;
            }
            if (this.rgb.g > 100) {
                this.rgb.g = 100;
            }
            if (this.rgb.g < -100) {
                this.rgb.g = -100;
            }
            this.ts.thumbor.filter(`rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`);
        }
        if (this.rotate) {
            if (this.rotate > 359) {
                this.rotate = 359;
            }
            if (this.rotate < 0) {
                this.rotate = 0;
            }
            this.ts.thumbor.filter(`rotate(${this.rotate})`);
        }
        if (this.sharpen) {
            if (this.sharpen.amount > 10) {
                this.sharpen.amount = 10;
            }
            if (this.sharpen.amount < 0) {
                this.sharpen.amount = 0;
            }
            if (this.sharpen.radius > 2) {
                this.sharpen.radius = 2;
            }
            if (this.sharpen.radius < 0) {
                this.sharpen.radius = 0;
            }
            this.ts.thumbor.filter(`sharpen(${this.sharpen.amount},${this.sharpen.radius},${this.sharpen.luminanceOnly})`);
        }
        if (this.stretch) {
            this.ts.thumbor.filter(`stretch()`);
        }
        if (this.stripEXIF) {
            this.ts.thumbor.filter(`strip_exif()`);
        }
        if (this.stripICC) {
            this.ts.thumbor.filter(`strip_icc()`);
        }
        if (this.upscale) {
            this.ts.thumbor.filter(`upscale()`);
        }

        if (this.ts.disable) {
            this.el.nativeElement.src = this.src;
        } else {
            this.ts.thumbor.setImagePath(this.src);
            this.el.nativeElement.src = this.ts.thumbor.buildUrl();
        }
    }
}
