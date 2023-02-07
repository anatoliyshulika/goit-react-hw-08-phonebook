import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'features/header/Header';
import Spinner from 'features/spinner/Spinner';
import { selectIsLoading, selectisFetchingContact } from 'app/selectors';
import { useSelector } from 'react-redux';

export default function Layout() {
  const isLoading = useSelector(selectIsLoading);
  const isFetchingContact = useSelector(selectisFetchingContact);

  return (
    <>
      <Header />
      {isFetchingContact && <Spinner />}
      {isLoading && <Spinner />}
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}
