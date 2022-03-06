import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import moment from 'moment';
import { UpcomingLaunches } from '../../../shared/interfaces/upcoming-launches';
import { CountdownConfig } from 'ngx-countdown';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchCardComponent implements OnInit {
  @Input() public launchInfo: UpcomingLaunches;
  public countdownConfig: CountdownConfig;
  constructor() {}

  ngOnInit(): void {
    let dur = moment.duration(
      moment(this.launchInfo.date_local).diff(moment())
    );
    this.countdownConfig = {
      leftTime: dur.asSeconds(),
      format: 'd:HH:m:s',
    };
  }
}
