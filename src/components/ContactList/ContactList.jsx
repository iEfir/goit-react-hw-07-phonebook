import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';
import { selectorfilteredContacts } from '../../redux/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectorfilteredContacts);
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filterContacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          <p>
            {name}:{phone}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(id)}
            value="delete"
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
