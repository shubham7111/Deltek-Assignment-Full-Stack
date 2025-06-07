import React, { useState, useEffect } from "react";
import { Contact } from "../types";
import { api } from "../api";

interface Props {
  selectedContact: Contact | null;
  onSave: () => void;
}

const ContactForm: React.FC<Props> = ({ selectedContact, onSave }) => {
  const [form, setForm] = useState<Contact>({
    id: 0,
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    if (selectedContact) setForm(selectedContact);
  }, [selectedContact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      if (form.id === 0) {
        await api.post("/", form);
      } else {
        await api.put(`/${form.id}`, form);
      }
      onSave();
      setForm({ id: 0, fullName: "", email: "", phoneNumber: "", address: "" });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input
        placeholder="Full Name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />{" "}
      <input
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />{" "}
      <input
        placeholder="Phone Number"
        name="phoneNumber"
        value={form.phoneNumber}
        onChange={handleChange}
      />{" "}
      <input
        placeholder="Address"
        name="address"
        value={form.address}
        onChange={handleChange}
      />{" "}
      <button onClick={handleSubmit}>
        {form.id === 0 ? "Add Contact" : "Update Contact"}
      </button>
    </div>
  );
};

export default ContactForm;
