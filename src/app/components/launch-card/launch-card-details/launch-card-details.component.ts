import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../shared/services/http.service';
import { forkJoin, map } from 'rxjs';
import { UpcomingLaunches } from '../../../../shared/interfaces/upcoming-launches';
import { CrewMembers } from '../../../../shared/interfaces/crew-members';
import { RocketDetails } from '../../../../shared/interfaces/rocket-details';
import { CountdownConfig } from 'ngx-countdown';
import moment from 'moment';

@Component({
  selector: 'app-launch-card-details',
  templateUrl: './launch-card-details.component.html',
  styleUrls: ['./launch-card-details.component.scss'],
})
export class LaunchCardDetailsComponent implements OnInit {
  public id: string | null;
  public launchDetails: UpcomingLaunches;
  public crewMembers: CrewMembers[];
  public rocket: RocketDetails;
  public countdownConfig: CountdownConfig;

  constructor(
    private route: ActivatedRoute,
    private HttpService: HttpService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUpcomingLaunch();
  }

  private getUpcomingLaunch(): void {
    this.HttpService.getUpcomingLaunches()
      .pipe(
        map((launchDetails) =>
          launchDetails.find((details: any) => details.id === this.id)
        )
      )
      .subscribe((detail) => {
        // Grab the launch deets
        this.launchDetails = detail;

        let dur = moment.duration(
          moment(this.launchDetails?.date_local).diff(moment())
        );
        this.countdownConfig = {
          leftTime: dur.asSeconds(),
          format: 'd:HH:m:s',
        };

        // We can now use the deets to pass in the correct ids for the http calls for crew and rocket deets
        this.getCrewMembers();
        this.getRocket();
      });
  }

  private getCrewMembers(): void {
    // map the crew ids - http call for each then map it to an array
    // forkJoin to give us the last result of each obsrvable call and push it into an array for us
    // forkJoin is deprecated but not if you pass in an array source luckily already got that from launchDetails as crew is an arr
    forkJoin(
      this.launchDetails.crew?.map((crew: string) =>
        this.HttpService.getCrew(crew)
      )
    )
      .pipe(map((crewArray) => crewArray.reduce((arr, r) => arr.concat(r), [])))
      .subscribe((crewArr) => {
        this.crewMembers = crewArr;
      });
  }

  private getRocket(): void {
    this.HttpService.getRocket(this.launchDetails?.rocket).subscribe(
      (rocket: RocketDetails) => (this.rocket = rocket)
    );
  }
}
