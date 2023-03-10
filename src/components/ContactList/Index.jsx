import React from "react";

import Button from "../Button/Index";

const ContactList = ({ contacts, setContacts, setFormData, setEditIndex }) => {
  const handleDeleteContact = (index) => {
    setContacts([...contacts.slice(0, index), ...contacts.slice(index + 1)]);
  };

  const handleEditButtonClick = (index) => {
    const contactToEdit = contacts[index];
    setFormData(contactToEdit);
    setEditIndex(index);
  };

  return (
    <ul className="ul_wrapper">
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name} {contact.surname} - {contact.phone} - {contact.email}{" "}
          <Button
            className="editing_btn"
            type="button"
            onClick={() => handleEditButtonClick(index)}
            title="Edit"
          />
          <Button
            className="btn_delete"
            type="button"
            onClick={() => handleDeleteContact(index)}
            title="Delete"
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
