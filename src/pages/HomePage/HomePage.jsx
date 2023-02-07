import { Box, Typography, Container } from '@mui/material';
import bgImg from './bgimg.jpeg';

export default function HomePage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        overflow: 'hidden',
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: 'hidden', position: 'relative' }}>
        <Typography
          variant="h5"
          component="p"
          color="#2d73ae"
          textAlign="center"
          fontWeight="700"
          fontSize="29px"
        >
          YOUR SURROUNDINGS, YOUR LIFE. MANAGE YOUR CONTACTS, MANAGE YOUR LIFE!
        </Typography>
        <Box
          sx={{
            width: '1152px',
            height: '648px',
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: '#f2f4f7',
              height: 60,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography>
              &copy; 2023 ContactBook. Created by Anatolii Shulika
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
