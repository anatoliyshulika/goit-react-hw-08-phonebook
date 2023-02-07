import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { Box, Button, TextField } from '@mui/material';
import { InputWrapper } from './ContactForm.styled';
import { addContactOperation } from 'features/contacts/contacts.operations';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const contact = {
        name: values.name,
        number: values.number,
      };
      dispatch(addContactOperation(contact));
      actions.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <InputWrapper>
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
          <Box width={10} />
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
        </InputWrapper>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </form>
    </div>
  );
}
