import { Container } from '@mui/material';
import ContactForm from 'features/contacts/components/ContactForm/ContactForm';
import ContactList from 'features/contacts/components/ContactList/ContactList';

export default function Contacts() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        overflow: 'hidden',
      }}
    >
      <ContactForm />
      <ContactList />
    </Container>
  );
}
