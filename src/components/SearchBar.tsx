import { FC } from 'react';

interface Props {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onInStockChange: (inStockOnly: boolean) => void;
}

export const SearchBar: FC<Props> = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}) => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => {
            onFilterTextChange(e.target.value);
          }}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={inStockOnly}
          onChange={(e) => {
            onInStockChange(e.target.checked);
          }}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Only show products in stock
        </label>
      </div>
    </form>
  );
};
