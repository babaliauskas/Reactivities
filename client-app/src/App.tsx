import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Header as='h2'>
      <Icon name='users' />
      <Header.Content>Reactivities</Header.Content>
    </Header>
  );
}

export default App;
