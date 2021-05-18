import { useQuery } from '@apollo/client';
import DisplayError from 'components/ErrorMessage';
import PaginationStyles from 'components/styles/PaginationStyles';
import { perPage } from 'config';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagintaion({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);

  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits {page} of ___</title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}{' '}
      </p>
      <p>{count} Items Total</p>

      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PaginationStyles>
  );
}
