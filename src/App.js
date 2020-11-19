import React from 'react'
import './App.css';
import CharacterContainer from './Containers/CharacterContainer.js'


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <CharacterContainer />
      </div>
    );
  }
}

export default App;
