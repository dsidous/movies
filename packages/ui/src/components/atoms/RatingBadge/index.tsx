import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

interface Props {
  value: number;
  children: React.ReactNode;
}

const StyledBadge = withStyles((theme) => ({
  badge: {
    bottom: theme.spacing(-3),
    border: `2px solid ${theme.palette.background.paper}`,
    background: '#000',
    borderRadius: theme.shape.borderRadius,
    color: 'yellow',
    height: theme.spacing(4),
    padding: theme.spacing(0, 0.5),
    right: theme.spacing(3),
    top: 'auto',
    width: theme.spacing(4),

    '&::after': {
      content: '""',
      width: theme.spacing(3),
      height: theme.spacing(3),
      border: '1px solid rgba(255,255,255,.7)',
      position: 'absolute',
    },
  },
}))(Badge);

const RatingBadge: React.FC<Props> = ({ value, children }) => (
  <StyledBadge badgeContent={value}>{children}</StyledBadge>
);

export default RatingBadge;
