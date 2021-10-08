import './App.css';
import { FilterableProductTable } from './components/FilterableProductTable';
import { PRODUCTS } from './utils/productsAPIMock';

const App = () => {
  const products = PRODUCTS;
  return (
    <>
      <FilterableProductTable products={products} />
    </>
  );
};

export default App;
