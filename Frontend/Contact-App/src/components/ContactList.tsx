import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Contact } from "../types";

interface Props {
  onEdit: (contact: Contact) => void;
}

const ContactList: React.FC<Props> = ({ onEdit }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchContacts = async () => {
    const res = await api.get("/");
    setContacts(res.data);
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/${id}`);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, [contacts]);
  console.log(contacts);
  return (
    <div>
      {contacts.map((c) => (
        <div key={c.id}>
          <p>
            {c.fullName} | {c.email}
          </p>
          <button onClick={() => onEdit(c)}>Edit</button>
          <button onClick={() => handleDelete(c.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
