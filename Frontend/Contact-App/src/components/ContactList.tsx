import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Contact } from "../types";

interface Props {
  onEdit: (contact: Contact) => void;
  refresh: () => void;
}

const ContactList: React.FC<Props> = ({ onEdit, refresh }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchContacts = async () => {
    const res = await api.get("/");
    setContacts(res.data);
    setFilteredContacts(res.data);
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/${id}`);
    fetchContacts();
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value === "") {
      // if search input is empty, show full list
      setFilteredContacts(contacts);
    } else {
      // filter the contacts based on search term (case insensitive)
      const filtered = contacts.filter((contact) =>
        contact.fullName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [refresh]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          marginBottom: "1rem",
          marginTop: "1rem",
          padding: "0.5rem",
          width: "60%",
          borderRadius: "8px",
        }}
      />{" "}
      <div>
        {filteredContacts?.map((c) => (
          <div
            key={c.id}
            style={{
              marginBottom: "1rem",
              // borderBottom: "1px solid #ccc",
            }}
          >
            <p style={{ fontSize: "1rem", margin: 0 }}>
              {c.fullName} | {c.email}
            </p>
            <div>
              <button onClick={() => onEdit(c)}>Edit</button>{" "}
              <button onClick={() => handleDelete(c.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
