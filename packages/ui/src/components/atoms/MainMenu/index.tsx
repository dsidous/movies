import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import useStyles from './styles';

const MainMenu = () => {
  const classes = useStyles();
  return (
    <MenuList className={classes.root}>
      <MenuItem>
        <Link to="/movies" className={classes.item}>
          <Typography variant="button">MOVIES</Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/tvs" className={classes.item}>
          <Typography variant="button">TVS</Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/person" className={classes.item}>
          <Typography variant="button">PEOPLE</Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/watchlist" className={classes.item}>
          <Typography variant="button">
            WATCHLIST&nbsp;
            <span className="fa fa-bookmark" />
          </Typography>
        </Link>
      </MenuItem>
    </MenuList>
  );
};

export default MainMenu;
