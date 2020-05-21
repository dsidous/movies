import { node, string, bool, func } from 'prop-types';

export const propTypes = {
  children: node.isRequired,
  width: string.isRequired,
  mobileOpen: bool.isRequired,
  handleDrawerToggle: func.isRequired,
};

export const defaultProps = {};
