import React from 'react';

export const SearchBar = () => {
  return (
    <form>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Only show products in stock
        </label>
      </div>
    </form>
  );
};
