import "./App.css";
import React from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { v4 as uuidv4 } from "uuid";
class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  formSubmitHandler = (data) => {
    const normalizedName = data.name.toLowerCase();

    if (
      this.state.contacts.find((contact) =>
        contact.name.toLowerCase().includes(normalizedName)
      )
    ) {
      alert(`${data.name} is already in contact`);
    } else {
      const contact = {
        id: uuidv4(),
        ...data,
      };

      this.setState((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  handleChangeInput = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChangeFilter={this.handleChangeInput}
        />
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
