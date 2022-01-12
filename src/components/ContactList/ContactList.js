import React from "react";
import "./contactList.scss";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map((contact) => {
      return (
        <li className="items" key={contact.id}>
          {contact.name} : {contact.number}
          <button
            className="deleteBtn"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);
export default ContactList;
