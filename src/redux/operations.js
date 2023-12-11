const { default: axios } = require('axios');
const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = require('./contactsSlice');

axios.defaults.baseURL = 'https://6577723a197926adf62e51f2.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    const response = await axios.get('contacts');

    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError());
  }
};

export const addContact = () => async dispatch => {
  try {
    const response = await axios.post('/contacts');
  } catch (error) {}
};

export const deleteContact = id => async dispatch => {
  const response = axios.delete(`/contacts/${id}`);
};
