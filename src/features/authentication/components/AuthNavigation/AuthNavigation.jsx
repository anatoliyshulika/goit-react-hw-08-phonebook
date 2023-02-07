import { Button } from '@mui/material';
import { StyledLink } from './AuthNavigation.styled';

export default function AuthNavigation() {
  return (
    <>
      <StyledLink to="/login">
        <Button color="inherit" sx={{ marginRight: 2 }}>
          Login
        </Button>
      </StyledLink>
      <StyledLink to="/register">
        <Button color="inherit">Register</Button>
      </StyledLink>
    </>
  );
}
