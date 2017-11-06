import {
  Component,
  OnInit
} from '@angular/core';

/* tslint:disable */
export class Profile {
  public constructor(
    public firstName: string,
    public lastName: string
  ) {

  }

  public lastChanged(): Date {
    return new Date();
  }
}


@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.sass']
})
export class CdComponent implements OnInit {


  public profile1: Profile;
  public profile2: Profile;


  public ngOnInit(): void {
    this.profile1 = new Profile('Igor', 'Nepipenko');
    this.profile2 = new Profile('Vova', 'Loban');

    setTimeout(() => {
      this.profile1.firstName = 'Vlad';
    }, 3000);
    setTimeout(() => {
      this.profile2 =
        new Profile('Igor', 'Nepipenko');
    }, 7000);
  }

}

/* tslint:enable */