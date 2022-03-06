import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public upcomingLaunches: any;

  constructor(private HttpService: HttpService) {}

  ngOnInit(): void {
    this.HttpService.getUpcomingLaunches().subscribe((res: any) => {
      this.upcomingLaunches = res;
    });
  }
}
