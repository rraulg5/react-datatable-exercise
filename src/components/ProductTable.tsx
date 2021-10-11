import { FC, ReactElement } from 'react';
import { Product } from '../interfaces/Product';
import { ProductCategory } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

interface Props {
  products: Product[];
}

export const ProductTable: FC<Props> = ({ products }) => {
  const rows: ReactElement<FC>[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
