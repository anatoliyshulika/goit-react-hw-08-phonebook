import { List } from './ContactList.styled';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from 'app/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsOperation } from 'features/contacts/contacts.operations';
import { useEffect } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsOperation());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts?.map(contact => (
        <Contact contact={contact} key={contact.id}></Contact>
      ))}
    </List>
  );
}
