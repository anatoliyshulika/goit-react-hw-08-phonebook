import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogedin } from './selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLogedin = useSelector(selectIsLogedin);

  return !isLogedin ? <Navigate to={redirectTo} /> : Component;
}
