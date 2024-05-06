import { useState } from 'react';

export default function TableCaption() {
  const [isSearchableHide, setIsSearchableHide] = useState<boolean>(false);

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
          <input type="text" className={`search ${isSearchableHide ? 'w-full' : 'w-0'}`} placeholder="Search..." />
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
