import {
  Component, Inject, Optional
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  providers: [
    {
      provide: 'baseUrl',
      useValue: 'localhost:7777'
    },
  ]
})
export class HeaderComponent {

  public constructor(
    @Optional() @Inject('baseUrlTest') private _baseUrlTest: string[],
  ) {
    // tslint:disable-next-line
    console.log(this._baseUrlTest)
  }
}
