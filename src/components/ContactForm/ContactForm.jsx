import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

import { addContact } from '../../redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectorItems } from '../../redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(selectorItems);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const includeName = contacts.find(user => user.name === name);
    if (includeName) {
      alert(`${name} is already in contacs`);
      return;
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );
    setName('');
    setNumber('');
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label className={css.item}>
        Name
        <input
          type="text"
          className={css.input}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.item}>
        Number
        <input
          type="tel"
          name="number"
          className={css.input}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.button}>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
