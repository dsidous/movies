import { array, object, string } from 'prop-types';

export const propTypes = {
  shows: array.isRequired,
  resultMedia: string.isRequired,
};

export const defaultProps = {};
