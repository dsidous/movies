import { Movie_detailed, Movie } from '../movie';
import { Tv, Tv_detailed } from '../tv';

export type Show = Movie_detailed & Tv_detailed;

export type Similar_Show =
  | {
      type: 'movie';
      page: number;
      results: Movie[];
    }
  | {
      type: 'tv';
      page: number;
      results: Tv[];
    };
