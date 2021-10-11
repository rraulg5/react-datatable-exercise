import { FC } from 'react';

interface Props {
  filterText: string;
  inStockOnly: boolean;
}

export const SearchBar: FC<Props> = ({ filterText, inStockOnly }) => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={filterText}
          onChange={() => {}}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={inStockOnly}
          onChange={() => {}}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Only show products in stock
        </label>
      </div>
    </form>
  );
};
