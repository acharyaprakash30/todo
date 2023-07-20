// Filter.js

import React from 'react';

const Filter = ({ filterType, setFilterType }) => {
  return (
    <div>
      <button
        onClick={() => setFilterType('all')}
        className={filterType === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => setFilterType('completed')}
        className={filterType === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
      <button
        onClick={() => setFilterType('incomplete')}
        className={filterType === 'incomplete' ? 'active' : ''}
      >
        Incomplete
      </button>
    </div>
  );
};

export default Filter;
