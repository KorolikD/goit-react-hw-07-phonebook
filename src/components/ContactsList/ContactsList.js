import { useDispatch, useSelector } from 'react-redux';
import {
  FilterButton,
  ListContacts,
  ListItem,
  Text,
  BoldText,
} from './ContactsList.styled';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ListContacts>
      {visibleContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <Text>
            <BoldText>{name}</BoldText>: {phone}
          </Text>
          <FilterButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </FilterButton>
        </ListItem>
      ))}
    </ListContacts>
  );
};
