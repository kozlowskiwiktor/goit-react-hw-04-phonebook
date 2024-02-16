import propTypes from 'prop-types';
import css from 'container.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.container}>
      {contacts.map(contact => {
        return (
          <p key={contact.id}>
            {contact.firstName} {contact.number}
            <button type="submit" onClick={() => onDeleteContact(contact.id)}>
              delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDeleteContact: propTypes.func,
};
