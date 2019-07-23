import React from 'react';
import './App.css';
import List from './../Lists/List';
import AccomplishedList from './../Lists/AccomplishedList';
import { Flex, Segment } from '@stardust-ui/react';

function App() {
  return (
    <div className="App">
      <List />
      <AccomplishedList />
    </div>
  );
}

export default App;
