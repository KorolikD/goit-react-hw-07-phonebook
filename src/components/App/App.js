import { GlobalStyles } from 'styles';

import { Title, TitleH2 } from './App.styled';
import { ContactForm, Filter, ContactsList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { selectContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectContacts);

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

      {isLoading && <p>...Завантаження</p>}

      {items.length > 0 && <ContactsList />}

      <GlobalStyles />
    </>
  );
};
