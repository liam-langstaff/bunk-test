export interface UpcomingLaunches {
  date_unix: number;
  date_local: Date;
  date_utc: Date;
  flight_number: number;
  name: string;
  links: LaunchLinks;
  id: string;
  crew: string[];
  rocket: string;
}

export interface LaunchLinks {
  patch: {
    small: string;
    large: string;
  };
}
