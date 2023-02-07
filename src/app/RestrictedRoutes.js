import { useSelector } from 'react-redux';
import { selectIsLogedin } from './selectors';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoutes({
  component: Component,
  redirectTo = '/',
}) {
  const isLogedin = useSelector(selectIsLogedin);
  return isLogedin ? <Navigate to={redirectTo} /> : Component;
}
