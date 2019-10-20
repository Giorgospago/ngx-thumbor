import {Directive, ElementRef, Input} from "@angular/core";
import {NgxThumborService} from "./ngx-thumbor.service";

@Directive({
  selector: "img[thumb]"
})
export class ThumbDirective {

  constructor(
    el: ElementRef,
    ts: NgxThumborService
  ) {
    el.nativeElement.src = ts.thumbor.setImagePath(el.nativeElement.src).resize(50, 50).buildUrl();
  }

}
