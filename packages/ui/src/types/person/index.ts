export interface Person_Movie_Cast_Credit {
  character: string;
  credit_id: string;
  id: number;
  release_date: string;
  vote_count: number;
  video: boolean;
  adult: boolean;
  vote_average: number;
  title: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  media_type: string;
}

export interface Person_Movie_Crew_Credit {
  id: number;
  department: string;
  original_language: string;
  original_title: string;
  job: string;
  overview: string;
  vote_count: number;
  video: boolean;
  poster_path: string;
  backdrop_path: string;
  title: string;
  popularity: number;
  genre_ids: number[];
  vote_average: number;
  adult: boolean;
  release_date: string;
  credit_id: string;
  media_export_type: string;
}

export interface Person_Movie_Credits {
  cast: Person_Movie_Cast_Credit[];
  crew: Person_Movie_Crew_Credit[];
}

export interface Person_Tv_Cast_Credit {
  id: number;
  backdrop_path: string;
  character: string;
  credit_id: string;
  original_name: string;
  genre_ids: number[];
  name: string;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
  episode_count: number;
  original_language: string;
  first_air_date: string;
  overview: string;
  origin_country: string[];
  media_type: string;
}

export interface Person_Tv_Crew_Credit {
  id: number;
  backdrop_path: string;
  credit_id: string;
  department: string;
  original_language: string;
  episode_count: number;
  job: string;
  overview: string;
  origin_country: string[];
  original_name: string;
  genre_ids: number[];
  name: string;
  first_air_date: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  media_type: string;
}

export interface Person_Tv_Credits {
  cast: Person_Tv_Cast_Credit[];
  crew: Person_Tv_Crew_Credit[];
}

type Person_Cast_Credit = Person_Movie_Cast_Credit & Person_Tv_Cast_Credit;
type Person_Crew_Credit = Person_Movie_Crew_Credit & Person_Tv_Crew_Credit;

export interface Person_Credits {
  cast: Person_Cast_Credit[];
  crew: Person_Crew_Credit[];
}

export interface Profile_Image {
  aspect_ratio: number;
  file_path: string;
  height: number;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Person {
  id: number;
  name: string;
  birthday: string;
  known_for_department: string;
  deathday: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string;
  adult: boolean;
  imdb_id: string;
  homepage: string;
  combined_credits: Person_Credits;
  movie_credits: Person_Movie_Credits;
  tv_credits: Person_Tv_Credits;
  images: Profile_Image[];
}
