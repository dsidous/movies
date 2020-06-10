import { array, object, func } from 'prop-types';

export const propTypes = {
  show: object.isRequired,
  dcolor: array.isRequired,
  handleShowClick: func.isRequired,
};

export const defaultProps = {};
