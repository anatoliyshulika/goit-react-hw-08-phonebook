import '@fontsource/public-sans';
import { Route, Routes } from 'react-router-dom';
import Layout from 'features/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshOperation } from 'features/authentication/auth.apioperations';
import { lazy, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectError } from './selectors';
import RestrictedRoutes from './RestrictedRoutes';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const error = useSelector(selectError);
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshOperation());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <RestrictedRoutes
                component={<HomePage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoutes
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoutes
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<Contacts />} redirectTo="/" />}
          />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};
