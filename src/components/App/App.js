import { GlobalStyles } from 'styles';
import { Title, TitleH2 } from './App.styled';
import { ContactForm, Filter, ContactsList, Loader } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Title>Phonebook</Title>
      <ContactForm />

      <TitleH2>Contacts</TitleH2>
      <Filter />

      {(isLoading && <Loader />) || (contacts.length > 0 && <ContactsList />)}

      {error && <p style={{ textAlign: 'center' }}>{error}</p>}

      <GlobalStyles />
    </>
  );
};
