import { FC } from 'react';

interface Props {
  category: string;
}

export const ProductCategory: FC<Props> = ({ category }) => {
  return (
    <tr className="table-active">
      <th colSpan={2}>{category}</th>
    </tr>
  );
};
