import Pagintaion from 'components/Pagination';
import Products from 'components/Products';
import { useRouter } from 'next/dist/client/router';

export default function ProductsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);

  return (
    <div>
      <Pagintaion page={page || 1} />
      <Products page={page || 1} />
      <Pagintaion page={page || 1} />
    </div>
  );
}
