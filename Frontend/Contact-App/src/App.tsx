import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { Contact } from "./types";
import "./App.css";

function App() {
  const [selected, setSelected] = useState<Contact | null>(null);
  const [refresh, setRefresh] = useState(false);
  return (
    <div>
      <ContactForm
        selectedContact={selected}
        onSave={() => setRefresh(!refresh)}
      />
      <ContactList onEdit={setSelected} refresh={refresh} />
    </div>
  );
}

export default App;
