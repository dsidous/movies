/** @jsxFrag React.Fragment */
import React, { useState, useEffect } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { Genres } from '../../../types/movie';

type SelectValue = string;

type Option = {
  label: string;
  value: string;
};

interface Props {
  genres: Genres[];
  onChange: (arg0: SelectValue) => void;
}

interface Selected {
  options: Option[] | null;
  selectValue: SelectValue;
}

const FilterGenres: React.FC<Props> = ({ genres, onChange }) => {
  const [selectedGenres, setSelectedGenres] = useState<Selected>({
    options: null,
    selectValue: '',
  });

  useEffect(() => {
    const options = genres.map(genre => ({
      label: genre.name,
      value: String(genre.id),
    }));
    setSelectedGenres(s => ({ ...s, options }));
  }, [genres]);

  const handleChange = (event: React.ChangeEvent<HTMLButtonElement>) => {
    setSelectedGenres({
      ...selectedGenres,
      selectValue: event.target.value,
    });
  };

  const handleClose = () => {
    onChange(selectedGenres.selectValue);
  };

  return (
    <>
      <InputLabel htmlFor="genres">Genres</InputLabel>
      <Select
        multiple
        value={selectedGenres.selectValue}
        onChange={handleChange}
        onClose={handleClose}
        input={<OutlinedInput id="genres" labelWidth={50} />}
        renderValue={(selected: []) => {
          if (selected.length === 0) {
            return <span>Select genres...</span>;
          }

          const list = selected
            .filter(select => select !== '')
            .map(
              select =>
                selectedGenres.options?.find(
                  (option: Option) => option.value === select,
                )?.label,
            );

          return list.join(', ');
        }}
      >
        <MenuItem value="" disabled>
          Select genres...
        </MenuItem>
        {selectedGenres.options?.map(option => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default FilterGenres;
