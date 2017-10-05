import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  public constructor(
    private _sanitizer: DomSanitizer
  ) {

  }

  public transform(url: string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }

}
