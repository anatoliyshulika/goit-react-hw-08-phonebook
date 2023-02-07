import {
  AppBar,
  Box,
  Container,
  FormGroup,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import Filter from 'features/filter/Filter';
import { AuthNavigation, UserMenu } from 'features/authentication';
import { selectIsLogedin } from 'app/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOutOperation } from 'features/authentication/auth.apioperations';

export default function Header() {
  const dispatch = useDispatch();
  const isLogedin = useSelector(selectIsLogedin);

  function logOut() {
    dispatch(logOutOperation());
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        overflow: 'hidden',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={isLogedin}
                onChange={logOut}
                aria-label="login switch"
              />
            }
            label={isLogedin ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              ContactBook
            </Typography>
            {isLogedin && <Filter />}
            <Box sx={{ flexGrow: 1 }} />
            {isLogedin ? <UserMenu /> : <AuthNavigation />}
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
