import React from 'react';
import './App.css';

import Table from './components/Table';
import TableNav from './components/TableNav';
import Tray from './components/Tray';

class App extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <TableNav />
        <div className='flex-container-left-row'>
          <Tray />
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
