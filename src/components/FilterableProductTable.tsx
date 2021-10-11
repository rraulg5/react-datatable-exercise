import { FC } from 'react';
import { Product } from '../interfaces/Product';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

interface Props {
  products: Product[];
}

export const FilterableProductTable: FC<Props> = ({ products }) => {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
};
