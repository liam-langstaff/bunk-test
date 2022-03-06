export interface RocketDetails {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: { meters: number; feet: number };
  engines: {
    engine_loss_max: number;
    isp: { sea_level: number; vacuum: number };
    layout: string;
    number: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: { kN: number; lbf: number };
    thrust_to_weight: number;
    thrust_vacuum: { kN: number; lbf: number };
    type: string;
    version: string;
  };
  first_flight: string;
  first_stage: {
    burn_time_sec: number;
    engines: number;
    fuel_amount_tons: number;
    reusable: true;
    thrust_sea_level: { kN: number; lbf: number };
    thrust_vacuum: { kN: number; lbf: number };
  };
  flickr_images: string[];
  height: { meters: number; feet: number };
  id: string;
  landing_legs: { number: number; material: string };
  mass: { kg: number; lb: number };
  name: string;
  stages: number;
  success_rate_pct: number;
  type: string;
  wikipedia: string;
}
