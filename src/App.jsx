import React from 'react';
import './App.css';

import Table from './Table';
import TableNav from './TableNav';
import Tray from './Tray';

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
