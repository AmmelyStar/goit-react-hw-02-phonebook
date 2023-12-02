import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <div>
        <h3>Find contacts by name</h3>

        <input
          name="filter"
          value={filter}
          type="text"
          onChange={onChangeFilter}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;