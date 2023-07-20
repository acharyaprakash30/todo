// Search.js

import React from 'react';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <input
        type="text"
        className="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search todos..."
      />
    </div>
  );
};

export default Search;
