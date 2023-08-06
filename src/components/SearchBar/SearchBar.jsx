import { useState } from 'react';
import { Loader } from 'components/Loader/Loader';


export const SearchBar = props => {
  const [searchValue, setSearchValue] = useState('');
  // const [showLoader, setShowLoader] = useState(false);

  const handleOnChange = event => {
        setSearchValue(event.currentTarget.value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (searchValue !== ''){
      props.handleOnSubmit(searchValue.trim());
      setSearchValue('');
    } 
  };

  return (
    <div className='form-wrap'>
      <form className="form" onSubmit={handleOnSubmit}>
        <label>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            required
            placeholder="Search movie"
            onChange={handleOnChange}
            value={searchValue}
          />
        </label>
          {props.showLoader ? <Loader/> : <button className="details-btn" type="submit">
            Search
          </button>}
      </form>
    </div>
  );
};
