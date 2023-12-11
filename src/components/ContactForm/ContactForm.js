import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import {
  Form,
  Field,
  ErrorMessage,
  FormGroup,
  SubmitButton,
} from './ContactForm.styled';
import * as Yup from 'yup';
// import { addContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/selectors';
import toast from 'react-hot-toast';

// Валідація за допомогою Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={({ name, number }, actions) => {
        const isContactInList = contacts.some(
          ({ name: contactName }) =>
            contactName.toLowerCase().trim() === name.toLowerCase().trim()
        );

        if (isContactInList) {
          toast.error(`"${name}" is already in contacts`);
        } else {
          // dispatch(addContact(name, number));
        }

        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Name
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component={'span'} />
        </FormGroup>
        <FormGroup>
          Number
          <Field type="number" name="number"></Field>
          <ErrorMessage name="number" component={'span'} />
        </FormGroup>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
};
