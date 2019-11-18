import React from 'react';
import './App.css';

import Furniture from './components/Furniture';
import TableNav from './components/TableNav';
import Tray from './components/Tray';

class App extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <TableNav />
        <div className='flex-container-left-row'>
          <Tray />
          <Furniture />
        </div>
      </div>
    );
  }
}

export default App;
