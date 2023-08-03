import { useState } from 'react';

export const SearchBar = props => {
   const [searchValue, setSearchValue] = useState('');

  const handleOnChange = event => {
    console.log(event.currentTarget.value);
    setSearchValue(event.currentTarget.value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
      props.handleOnSubmit(searchValue.trim());
      setSearchValue('');
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <label>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={handleOnChange}
          value={searchValue}
        />
        <button className="details-btn" type="submit">
          Search
        </button>
      </label>
    </form>
  );
};
