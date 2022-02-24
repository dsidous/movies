import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import MyPager from '../../atoms/Pager';
import FilterGenres from '../../atoms/FilterGenres';
import useStyles from './styles';
import { Genres } from '@typesRoots/movie';

interface Props {
  query: string;
  media: string;
  queryUpdate: Dispatch<SetStateAction<string>>;
  genres: Genres[];
  children: React.ReactNode;
}

interface InitState {
  params: URLSearchParams;
  release_year: string[];
}

interface ObjectToQueryStr {
  [x: string]: string | number;
  page: number;
  sort_by: string;
  with_genres: string;
  'vote_average.gte': string | number;
}

const objectToQueryStr = (paramsObj: ObjectToQueryStr) =>
  Object.keys(paramsObj)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(paramsObj[key])}`
    )
    .join('&');

const initState = ({ params, release_year }: InitState) => ({
  page: +(params.get('page') || 1),
  [release_year[0]]: params.get(release_year[0]) || new Date().getFullYear(),
  sort_by: params.get('sort_by') || 'popularity.desc',
  with_genres: params.get('with_genres') || '',
  'vote_average.gte': params.get('vote_average.gte') || 0,
});

const Filter: React.FC<Props> = ({
  query,
  media,
  genres,
  children,
  queryUpdate,
}) => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  const params = new URLSearchParams(query);

  const release_year =
    media === 'tvs'
      ? ['first_air_date_year', 'first_air_date']
      : ['primary_release_year', 'primary_release_date'];

  const [state, setState] = useState(initState({ params, release_year }));

  useEffect(() => {
    const runQuery = () => {
      const strquery = objectToQueryStr(state);
      queryUpdate(strquery);
    };

    runQuery();
  }, [state, queryUpdate]);

  const sumYear = year - 1900;
  const yearOptions = Array(sumYear)
    .fill(0)
    .map((_, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <MenuItem key={i} value={year - i}>
        {year - i}
      </MenuItem>
    ));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const option = e.target.name;
    setState({ ...state, [option]: val, page: 1 });
  };

  const handleGenresChange = (g: string) =>
    setState({ ...state, with_genres: g, page: 1 });

  const handlePageSelect = (page: number) => {
    if (page > 0) {
      setState({ ...state, page });
    }
  };

  const { sort_by, with_genres, page } = state;
  return (
    <div className={classes.root}>
      <form>
        <FormControl variant='outlined'>
          <InputLabel htmlFor='shortby'>Sort By</InputLabel>
          <Select
            id='shortby'
            placeholder='select'
            onChange={handleChange}
            value={sort_by}
            name='sort_by'
            input={<OutlinedInput labelWidth={53} id='shortby' />}
          >
            <MenuItem value='popularity.desc'>Popularity Descending</MenuItem>
            <MenuItem value='popularity.asc'>Popularity Ascending</MenuItem>
            <MenuItem value='vote_average.desc'>Rating Descending</MenuItem>
            <MenuItem value='vote_average.asc'>Rating Ascending</MenuItem>
            <MenuItem value={`${release_year[1]}.desc`}>
              Release Date Descending
            </MenuItem>
            <MenuItem value={`${release_year[1]}.asc`}>
              Release Date Ascending
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='outlined'>
          <InputLabel>Year</InputLabel>
          <Select
            placeholder='select'
            onChange={handleChange}
            // eslint-disable-next-line react/destructuring-assignment
            value={state[release_year[0]]}
            name={release_year[0]}
            input={<OutlinedInput labelWidth={35} id='year' />}
          >
            <MenuItem value='null'>None</MenuItem>
            {yearOptions}
          </Select>
        </FormControl>
        <FormControl variant='outlined'>
          <FilterGenres genres={genres} onChange={handleGenresChange} />
        </FormControl>
        <FormControl variant='outlined'>
          <InputLabel>Average vote</InputLabel>
          <Select
            name='vote_average.gte'
            placeholder='select'
            onChange={handleChange}
            // eslint-disable-next-line react/destructuring-assignment
            value={state['vote_average.gte']}
            input={<OutlinedInput labelWidth={93} id='vote' />}
            fullWidth
          >
            <MenuItem value='0'>Greater than...</MenuItem>
            <MenuItem value='9'>9</MenuItem>
            <MenuItem value='8'>8</MenuItem>
            <MenuItem value='7'>7</MenuItem>
            <MenuItem value='6'>6</MenuItem>
            <MenuItem value='5'>5</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='1'>1</MenuItem>
          </Select>
        </FormControl>
      </form>
      <MyPager page={page} handlePageSelect={handlePageSelect} />
      {children}

      <MyPager page={page} handlePageSelect={handlePageSelect} />
    </div>
  );
};

export default Filter;
