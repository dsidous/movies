export interface Genre_names {
  genre_name: string[];
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  genre_names: Genre_names;
  original_title: string;
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface Genres {
  id: number;
  name: string;
}

export interface Production_companies {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface Production_countries {
  iso_3166_1: string;
  name: string;
}

export interface Spoken_languages {
  iso_639_1: string;
  name: string;
}

export interface Similar {
  page: number;
  results: Movie[];
}

export interface Cast_Credit {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

export interface Crew_Credit {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string;
}

export type Cast_Crew_Credit = {
  gender: number;
  id: number;
  name: string;
  profile_path: string;
  credit_id: string;
} & (
  | {
      cast_id: number;
      character: string;
      order: number;
    }
  | {
      job: string;
    }
);

export interface Credits {
  crew: Crew_Credit[];
  cast: Cast_Credit[];
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  url: string;
}

export interface ImageSpec {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: number;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Movie_images {
  backdrops: ImageSpec[];
  posters: ImageSpec[];
}

export interface Movie_detailed {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Production_companies[];
  production_countries: Production_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spoken_languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credits;
  videos: Video[];
  reviews: Review[];
  similar: Similar;
  images: Movie_images;
}
