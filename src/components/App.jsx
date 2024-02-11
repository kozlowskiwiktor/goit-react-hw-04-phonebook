import { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      setContacts(parsedContacts);
    }
  }, []);

  const addContactToPhoneBook = newContact => {
    const isExists = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExists) {
      return alert(`${isExists.name} is already in contacts.`);
    }
    const updatedContacts = [...contacts, newContact];

    setContacts(updatedContacts);

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const getContacts = (contacts, filter) => {
    const normalizeName = filter.toLowerCase();

    console.log(normalizeName);

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeName)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
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
