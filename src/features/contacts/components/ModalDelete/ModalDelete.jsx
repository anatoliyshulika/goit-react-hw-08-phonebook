import { Modal, Typography, ModalDialog } from '@mui/joy';
import WarningRounded from '@mui/icons-material/WarningRounded';
import { Box, Divider, Button } from '@mui/material';
import { deleteContactOperation } from 'features/contacts/contacts.operations';
import { useDispatch } from 'react-redux';

export default function ModalDelete({ open, setOpen, id }) {
  const dispatch = useDispatch();

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog
        variant="outlined"
        role="alertdialog"
        aria-labelledby="alert-dialog-modal-title"
        aria-describedby="alert-dialog-modal-description"
      >
        <Typography
          id="alert-dialog-modal-title"
          component="h2"
          startDecorator={<WarningRounded />}
        >
          Confirmation
        </Typography>
        <Divider />
        <Typography
          id="alert-dialog-modal-description"
          textColor="text.tertiary"
        >
          Are you sure you want to delete a contact?
        </Typography>
        <Box
          sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              dispatch(deleteContactOperation(id));
              setOpen(false);
            }}
          >
            Delete
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
}
