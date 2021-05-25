import SignIn from 'components/SignIn';
import { useUser } from 'components/User';

export default function ({ children }) {
  const me = useUser();
  if (!me) return <SignIn />;
  return children;
}
