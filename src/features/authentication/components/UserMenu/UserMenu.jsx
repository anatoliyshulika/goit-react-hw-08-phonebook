import { Box, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/selectors';

export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          {user.name}
        </Typography>
      </Box>
      <AccountCircle />
    </>
  );
}
