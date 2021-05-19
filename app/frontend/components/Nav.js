import NavStyles from 'components/styles/NavStyles';
import { useUser } from 'components/User';
import Link from 'next/link';

export default function Nav() {
  const user = useUser();
  console.log(user);

  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
        </>
      )}

      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
