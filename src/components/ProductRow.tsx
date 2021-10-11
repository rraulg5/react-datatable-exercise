import React, { FC } from 'react';
import { Product } from '../interfaces/Product';

interface Props {
  product: Product;
}

export const ProductRow: FC<Props> = ({ product }) => {
  return (
    <tr className={product.stocked ? '' : 'table-danger'}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};
