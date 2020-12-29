import {
  Credits,
  Video,
  Review,
  Movie_images,
  Genres,
  Genre_names,
  Production_companies,
} from '../movie';

export interface Created_By {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface Tv {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  genre_names: Genre_names;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

export interface Similar_tv {
  page: number;
  results: Tv[];
}

export interface Tv_detailed {
  backdrop_path: string;
  created_by: Created_By[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genres[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode[];
  name: string;
  next_episode_to_air: string;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies[];
  seasons: Season[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
  credits: Credits;
  videos: Video[];
  reviews: Review[];
  similar: Similar_tv;
  images: Movie_images;
}
