import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
export class App extends Component {
  state = { ...INITIAL_STATE };
  loginInputId = nanoid();
  addContact = value => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, value],
    }));
  };
  setFilterName = e => {
    this.setState(prevState => ({
      filter: e.target.value,
      //перед фильтрацией нужно кидать все контакты
      contacts: prevState.contacts.filter(contact =>
        contact.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    }));
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <section>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter
            setFilterName={this.setFilterName}
            value={this.state.filter}
          />
          <ContactList contacts={this.state.contacts} />
        </section>
      </>
    );
  }
}
