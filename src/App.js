import React, { useState } from "react";

import ContactForm from "./components/ContactForm/Index";
import ContactList from "./components/ContactList/Index";
import { appTitle } from "./const/contactData";

import "./index.css";

function ContactBook() {
  const [editIndex, setEditIndex] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  return (
    <div className="container">
      <h1>{appTitle}</h1>
      <ContactForm
        editIndex={editIndex}
        setContacts={setContacts}
        setFormData={setFormData}
        setEditIndex={setEditIndex}
        formData={formData}
        contacts={contacts}
      />
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        setFormData={setFormData}
        setEditIndex={setEditIndex}
      />
    </div>
  );
}

export default ContactBook;
