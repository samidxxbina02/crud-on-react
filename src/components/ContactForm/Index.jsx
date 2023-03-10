import React from "react";

import Button from "../Button/Index";
import Input from "../Input/Index";

import { inputsFormData } from "../../const/contactData";

const ContactForm = ({
  editIndex,
  setContacts,
  setFormData,
  setEditIndex,
  formData,
  contacts,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddContact = () => {
    const newContact = { ...formData };
    setContacts([...contacts, newContact]);
    setFormData({ name: "", surname: "", phone: "", email: "" });
  };

  const handleEditContact = () => {
    const editedContact = { ...formData };
    setContacts([
      ...contacts.slice(0, editIndex),
      editedContact,
      ...contacts.slice(editIndex + 1),
    ]);
    setFormData({ name: "", surname: "", phone: "", email: "" });
    setEditIndex(null);
  };

  return (
    <form>
      {inputsFormData.map((inputForm, idx) => {
        const { type, id, name, htmlFor, title } = inputForm;
        return (
          <React.Fragment>
            <Input
              key={idx}
              type={type}
              id={id}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              htmlFor={htmlFor}
              title={title}
            />
            <br />
          </React.Fragment>
        );
      })}
      {editIndex !== null ? (
        <Button
          title="Edit Contact"
          className="btn_edit"
          type="button"
          onClick={handleEditContact}
        />
      ) : (
        <Button
          className="btn_add"
          type="button"
          onClick={handleAddContact}
          title="Add Contact"
          disabled={Object.values(formData).some((value) => !value.trim())}
        />
      )}
    </form>
  );
};

export default ContactForm;
