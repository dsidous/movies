import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 900,
    margin: [[0, 0, theme.spacing(4)]],
    textTransform: 'uppercase',
  },
}));

const SectionHeader = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.root}>
      {children}
    </Typography>
  );
};

export default SectionHeader;
