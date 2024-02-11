import propTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { useState, useRef } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [number, setNumber] = useState('');

  const firstNameRef = useRef();
  const numberRef = useRef();

  const handleChange = () => {
    const inputFirstName = firstNameRef.current.value;
    const inputNumber = numberRef.current.value;

    if (inputFirstName !== firstName) {
      setFirstName(inputFirstName);
    }

    if (inputNumber !== number) {
      setNumber(inputNumber);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { id: nanoid(), firstName, number };

    onSubmit(newContact);

    resetForm();
  };

  const resetForm = () => {
    setFirstName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        ref={firstNameRef}
        value={firstName}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Phone</label>
      <input
        type="tel"
        name="number"
        ref={numberRef}
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = { onSubmit: propTypes.func };
