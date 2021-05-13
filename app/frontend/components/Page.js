import Header from 'components/Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}
