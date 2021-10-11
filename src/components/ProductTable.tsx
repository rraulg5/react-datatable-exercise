import { FC, ReactElement } from 'react';
import { Product } from '../interfaces/Product';
import { ProductCategory } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

interface Props {
  filterText: string;
  inStockOnly: boolean;

  products: Product[];
}

export const ProductTable: FC<Props> = ({
  filterText,
  inStockOnly,
  products,
}) => {
  const rows: ReactElement<FC>[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(filterText.trim().toLowerCase()) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
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
