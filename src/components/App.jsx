import { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import getContactsLocalStorage from './localStorage';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(getContactsLocalStorage());

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactToPhoneBook = newContact => {
    const isExists = contacts.find(
      contact =>
        contact.firstName.toLowerCase() === newContact.firstName.toLowerCase()
    );
    if (isExists) {
      return alert(`${isExists.firstName} is already in contacts.`);
    }
    const updatedContacts = [...contacts, newContact];

    setContacts(updatedContacts);
  };

  const getContacts = (contacts, filter) => {
    const normalizeName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.firstName.toLowerCase().includes(normalizeName)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <ContactForm onSubmit={addContactToPhoneBook} />
      <Filter value={filter} onChangeFilter={changeFilter} />
      {contacts.length ? (
        <ContactList
          contacts={getContacts(contacts, filter)}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>No contact</p>
      )}
    </div>
  );
};
