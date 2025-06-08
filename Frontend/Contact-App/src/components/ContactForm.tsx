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
  const [errormessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (selectedContact) setForm(selectedContact);
  }, [selectedContact]);

  //This event is coming from an <input> HTML element
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "phoneNumber") {
      if (/^\d{0,10}$/.test(e.target.value)) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const checkErrorMessage = () => {
    if (form.fullName === "") {
      return "Name is mandatory";
    } else if (form.email === "") {
      return "Email is mandatory";
    } else if (form.phoneNumber === "") {
      return "Phone Number is mandatory";
    } else if (form.address === "") {
      return "Address is mandatory";
    } else {
      return "";
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const error = checkErrorMessage();
      setErrorMessage(error);
      if (error !== "") return;
      if (form.id === 0) {
        await api.post("/", form);
      } else {
        await api.put(`/${form.id}`, form);
      }
      onSave();
      setForm({
        id: 0,
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
      });
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
        required
        value={form.email}
        onChange={handleChange}
      />{" "}
      <input
        placeholder="Phone Number"
        name="phoneNumber"
        maxLength="10"
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
      <div style={{ color: "red" }}>{errormessage}</div>
    </div>
  );
};

export default ContactForm;
