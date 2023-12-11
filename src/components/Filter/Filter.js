import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, Label } from './Filter.styled';
import { updateFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  return (
    <Label>
      Find contact by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </Label>
  );
};
