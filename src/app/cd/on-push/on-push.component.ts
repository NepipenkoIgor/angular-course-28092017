import {
  ChangeDetectionStrategy,
  // ChangeDetectorRef,
  Component, Input
} from '@angular/core';
import { Profile } from '../cd.component';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {

  @Input()
  public profile: Profile;
  //
  // public constructor(
  //   private _changeDetectorRef: ChangeDetectorRef
  // ) {
  //   setTimeout(() => this._changeDetectorRef.detach(), 4000);
  // }

}
