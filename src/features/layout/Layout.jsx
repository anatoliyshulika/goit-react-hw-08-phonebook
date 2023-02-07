import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'features/header/Header';
import Spinner from 'features/spinner/Spinner';
import { selectIsLoading } from 'app/selectors';
import { useSelector } from 'react-redux';

export default function Layout() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Header />
      {isLoading && <Spinner />}
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}
