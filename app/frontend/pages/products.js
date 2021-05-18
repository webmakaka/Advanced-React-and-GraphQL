import Pagintaion from 'components/Pagination';
import Products from 'components/Products';

export default function ProductsPage() {
  return (
    <div>
      <Pagintaion page={1} />
      <Products />
      <Pagintaion page={1} />
    </div>
  );
}
