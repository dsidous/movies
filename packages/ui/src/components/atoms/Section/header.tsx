import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const SectionHeader: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.root}>
      {children}
    </Typography>
  );
};

export default SectionHeader;
