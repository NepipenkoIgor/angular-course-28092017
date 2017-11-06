import {
  ChangeDetectorRef, Component, Input,
 // NgZone
} from '@angular/core';
import { Profile } from '../../cd.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
  @Input()
  public profile: Profile;


  public constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    // private _ngZone: NgZone
  ) {
    setTimeout(() => this._changeDetectorRef.detach(), 4000);
    setTimeout(() => this._changeDetectorRef.reattach(), 5000);

    // this._ngZone.runOutsideAngular()
  }
}
