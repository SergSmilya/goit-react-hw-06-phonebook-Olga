import { useSelector } from 'react-redux';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Input from './Input/Input';
import { useState } from 'react';

export function App() {
  const contacts = useSelector(({ contacts }) => contacts);

  const [filter, setFilter] = useState('');

  function onFilterChange(e) {
    setFilter(e.target.attributes.name.ownerElement.value.toLowerCase());
  }

  function onFilter() {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <Input />

      <Filter onFilterChange={onFilterChange} />

      <Contacts contacts={onFilter()} />
    </div>
  );
}
