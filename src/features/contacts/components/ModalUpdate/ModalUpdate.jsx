import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { useDispatch } from 'react-redux';
import { updateContactOperation } from 'features/contacts/contacts.operations';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
});

export default function ModalUpdate({ open, setOpen, id, name, number }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: name,
      number: number,
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const contact = {
        name: values.name,
        number: values.number,
      };
      dispatch(updateContactOperation({ contactId: id, contact }));
      actions.resetForm();
    },
  });

  return (
    <Dialog
      fullWidth={true}
      maxWidth="lg"
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin="dense"
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          margin="dense"
          fullWidth
          id="number"
          name="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          onClick={() => setOpen(false)}
        >
          Save changes
        </Button>
      </form>
    </Dialog>
  );
}
