import { object, string, bool, number } from 'prop-types';

export const propTypes = {
  filePath: string,
  name: string,
  size: number,
  mediaType: string.isRequired,
};

export const defaultProps = {};
