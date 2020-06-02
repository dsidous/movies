/* eslint-disable camelcase */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withSearch } from '@movies/common';

import useStyles from './styles';
import { propTypes, itemsProps } from './propTypes';
import useConfig from '../../hooks/useConfig';

const renderMenuItemChildren = ({
  index,
  option,
  highlightedIndex,
  getItemProps,
}) => {
  const {
    id,
    title,
    name,
    first_air_date,
    release_date,
    poster_path,
    profile_path,
  } = option;

  const { getImageURL } = useConfig();
  const isHighlighted = highlightedIndex === index;
  const classes = useStyles();

  const listTitle = [
    title || name,
    // eslint-disable-next-line no-nested-ternary
    release_date
      ? [release_date.slice(0, 4), 'in movies'].join(' ')
      : first_air_date
      ? [first_air_date.slice(0, 4), 'in tvs'].join(' ')
      : ' in persons',
  ].join(' ');

  const listImage = getImageURL({
    filePath: poster_path || profile_path,
    mediaType: title ? 'poster' : 'profile',
    size: 0,
  });

  return (
    <MenuItem
      key={id}
      selected={isHighlighted}
      {...getItemProps({ item: option })}
    >
      <span>
        <img src={listImage} className={classes.thumbnail} alt="#" />
      </span>
      <span>{listTitle}</span>
    </MenuItem>
  );
};

renderMenuItemChildren.propTypes = itemsProps;

const Items = ({ search, loading, ...props }) =>
  loading || Object.keys(search).length === 0
    ? null
    : search.map((option, index) =>
        renderMenuItemChildren({
          option,
          index,
          ...props,
        }),
      );

const FetchItems = withSearch()(Items);

const NavSearch = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Downshift
      onChange={({ media_type, id }) => history.push(`/${media_type}/${id}`)}
      itemToString={item => (item ? item.name || item.title : '')}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex,
      }) => (
        <div className={classes.container}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>

          <TextField
            InputProps={{
              classes: {
                root: classes.inputRoot,
                input: classes.inputInput,
              },
              ...getInputProps({ placeholder: 'Search...' }),
            }}
          />
          {isOpen ? (
            <Paper className={classes.paper} component="ul">
              <FetchItems
                query={inputValue}
                selectedItem={selectedItem}
                highlightedIndex={highlightedIndex}
                getItemProps={getItemProps}
              />
            </Paper>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};

export default NavSearch;

NavSearch.propTypes = propTypes;
