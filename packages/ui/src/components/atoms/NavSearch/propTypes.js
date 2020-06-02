import { object, string } from 'prop-types';

export const propTypes = {};

export const itemsProps = {
  index: string.isRequired,
  option: object.isRequired,
  highlightedIndex: string.isRequired,
  getItemProps: object.isRequired,
};
