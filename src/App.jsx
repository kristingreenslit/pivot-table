import React from 'react';
import './App.css';

import TableColumn from './components/TableColumn';
import TableNav from './components/TableNav';
import TableTray from './components/TableTray';

class App extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <TableNav />
        <div className='flex-container-left-row'>
          <TableTray />
          <TableColumn />
        </div>
      </div>
    );
  }
}

export default App;
