import { Component, Input } from '@angular/core';
import { Profile } from '../cd.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass']
})
export class DefaultComponent {

  @Input()
  public profile: Profile;
}
