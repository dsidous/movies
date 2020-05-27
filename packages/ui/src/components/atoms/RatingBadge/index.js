import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(theme => ({
  badge: {
    bottom: -25,
    border: `2px solid ${theme.palette.background.paper}`,
    background: '#000',
    borderRadius: theme.shape.borderRadius,
    color: 'yellow',
    height: 30,
    padding: '0 4px',
    right: 25,
    top: 'auto',
    width: 30,

    '&::after': {
      content: '""',
      width: 22,
      height: 22,
      border: '1px solid rgba(255,255,255,.7)',
      position: 'absolute',
    },
  },
}))(Badge);

const RatingBadge = ({ value, children }) => (
  <StyledBadge badgeContent={value}>{children}</StyledBadge>
);

export default RatingBadge;
