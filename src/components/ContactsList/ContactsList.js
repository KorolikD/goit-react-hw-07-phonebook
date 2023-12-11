import { useDispatch, useSelector } from 'react-redux';
import {
  FilterButton,
  ListContacts,
  ListItem,
  Text,
  BoldText,
} from './ContactsList.styled';
// import { deleteContact } from '../../redux/contactsSlice';
import { selectContacts, selectFilter } from '../../redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleFilteredContacts = contacts => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = visibleFilteredContacts(contacts);

  return (
    <ListContacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Text>
            <BoldText>{name}</BoldText>: {number}
          </Text>
          <FilterButton
            type="button"
            // onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </FilterButton>
        </ListItem>
      ))}
    </ListContacts>
  );
};
