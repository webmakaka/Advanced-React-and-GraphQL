import ItemStyles from 'components/styles/ItemStyles';
import PriceTag from 'components/styles/PriceTag';
import Title from 'components/styles/Title';
import formatMoney from 'lib/formatMoney';
import Link from 'next/link';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
    </ItemStyles>
  );
}
