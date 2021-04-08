import React, { useState } from 'react';

const Search = ({ callback = Function.prototype }) => {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    callback(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          id='search'
          placeholder='Search...'
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          onClick={handleSubmit}
          className='btn'
          style={{ position: 'absolute', top: 0, right: 0 }}>
          <i className='material-icons left'>manage_search</i>Search
        </button>
      </div>
    </div>
  );
};

export default Search;
