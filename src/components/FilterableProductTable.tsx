import { FC, useState } from 'react';
import { Product } from '../interfaces/Product';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

interface Props {
  products: Product[];
}

export const FilterableProductTable: FC<Props> = ({ products }) => {
  const [state, setState] = useState({ filterText: '', inStockOnly: false });

  const handleFilterTextChange = (filterText: string) => {
    setState({ ...state, filterText });
  };

  const handleInStockChange = (inStockOnly: boolean) => {
    setState({ ...state, inStockOnly });
  };

  return (
    <>
      <SearchBar
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
        products={products}
      />
    </>
  );
};
