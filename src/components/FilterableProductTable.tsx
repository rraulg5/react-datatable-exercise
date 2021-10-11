import { FC, useState } from 'react';
import { Product } from '../interfaces/Product';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

interface Props {
  products: Product[];
}

export const FilterableProductTable: FC<Props> = ({ products }) => {
  const [state, setState] = useState({ filterText: '', inStockOnly: false });

  return (
    <>
      <SearchBar
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
      />
      <ProductTable
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
        products={products}
      />
    </>
  );
};
