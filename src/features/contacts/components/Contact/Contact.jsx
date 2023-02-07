import PropTypes from 'prop-types';
import {
  Box,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { StyledA } from './Contact.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { Create } from '@mui/icons-material';
import { stringAvatar } from 'features/contacts/services';
import { useState } from 'react';
import ModalDelete from '../ModalDelete/ModalDelete';
import ModalUpdate from '../ModalUpdate/ModalUpdate';

export default function Contact({ contact }) {
  const { id, name, number } = contact;
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => setOpenModalUpdate(true)}
          >
            <Create />
          </IconButton>
          <Box display="inline-block" width={15} />
          <IconButton
            edge="end"
            aria-label="update"
            onClick={() => setOpenModalDelete(true)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <StyledA href={`tel:${number}`}>
        <ListItemAvatar>
          <Avatar {...stringAvatar(name)} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={number} />
      </StyledA>

      <ModalDelete
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        id={id}
      />
      <ModalUpdate
        open={openModalUpdate}
        setOpen={setOpenModalUpdate}
        id={id}
        name={name}
        number={number}
      />
    </ListItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
