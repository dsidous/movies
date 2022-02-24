import { Episode } from '@typesRoots/tv';
export interface Crew {
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  profile_path: string;
}

export interface Cast {
  name: string;
  credit_id: string;
  character: string;
  profile_path: string;
  order: number;
}

export interface Tv_Episode {
  id: number;
  name: string;
  episode_number: number;
  season_number: number;
  air_date: string;
  overview: string;
  guest_stars: Cast[];
  crew: Crew[];
  production_code: string;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Tv_Season {
  _id: string;
  name: string;
  air_date: string;
  episodes: Episode[];
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
}
