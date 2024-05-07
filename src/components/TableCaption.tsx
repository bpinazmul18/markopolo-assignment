import { useState } from 'react';
import { setQueryParams } from '../store/dashboardSlice.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/configureStore.ts';

export default function TableCaption() {
  const [isSearchableHide, setIsSearchableHide] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="caption">
      <h3>Campaign performance</h3>

      <div className="searching">
        <div className="search-wrapper">
          <img
            onClick={() => setIsSearchableHide((prevState) => !prevState)}
            src="./images/magnifying-glass-thin.svg"
            alt="Search icon"
          />
          <input
            type="text"
            className={`search ${isSearchableHide ? 'w-full' : 'w-0'}`}
            placeholder="Search..."
            onChange={(event) => {
              dispatch(setQueryParams(event.currentTarget.value));
            }}
          />
        </div>

        <label htmlFor="sorting">
          Channels:
          <select id="sorting" name="sorting">
            <option value="all">All</option>
          </select>
        </label>
      </div>
    </div>
  );
}
