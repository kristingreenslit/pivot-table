import React from 'react';

import americanStates from '../data/americanStates';
import '../styles/Table.css';

class Table extends React.Component {

  getColumns() {
    let tempArr = [];

    for (var key in americanStates) {
       var arr = americanStates[key];

       let letsSeeTempObj = {
         totalFurnishings: 0,
         totalChairs: 0,
         totalTables: 0,
         totalBookcases: 0,
         subtotal: 0
       }

       let letsSee = arr.filter((item) => { return item.subCategory === 'Furnishings'; });
       let letsSee2 = letsSee.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       letsSeeTempObj.totalFurnishings = letsSee2;

       let letsSeeChairs = arr.filter((item) => { return item.subCategory === 'Chairs'; });
       let letsSee2Chairs = letsSeeChairs.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       letsSeeTempObj.totalChairs = letsSee2Chairs;

       let letsSeeBookcases = arr.filter((item) => { return item.subCategory === 'Bookcases'; });
       let letsSee2Bookcases = letsSeeBookcases.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       letsSeeTempObj.totalBookcases = letsSee2Bookcases;

       let letsSeeTables = arr.filter((item) => { return item.subCategory === 'Tables'; });
       let letsSee2Tables = letsSeeTables.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       letsSeeTempObj.totalTables = letsSee2Tables;

       letsSeeTempObj.subtotal = letsSee2 + letsSee2Chairs +letsSee2Bookcases + letsSee2Tables;

       tempArr.push(letsSeeTempObj);
    }

    const stateColumn = tempArr.map(station =>
      <div key={station.totalFurnishings}>
        <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
         <div className='flex-container-center-column pt15'>
           <div className='pb10'>{station.totalBookcases}</div>
           <div className='pb10'>{station.totalChairs}</div>
           <div className='pb10'>{station.totalFurnishings}</div>
           <div className='pb10'>{station.totalTables}</div>
         </div>
        </div>
        <div className='flex-container-left-row'>
         <div className='theme-medium-gray-background column-container-outline'>
           <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
             <div className='column-subtotal-text full-width center bold'>{station.subtotal}</div>
           </div>
         </div>
        </div>
      </div>
    );

    return stateColumn;
  }

  render() {
    let stateTitle = Object.keys(americanStates).map(key => (
      <div key={key}>
        <div className='flex-container-center-column column-underline full-width off-white theme-dark-blue-background' style={{height: '49px', width: '170px'}}>
         <div className='heading-sm column-title mt20'>
           {key}
         </div>
        </div>
      </div>
    ));

    return (
      <div>
        <div className='flex-container-left-column mt15'>
          <div className='theme-dark-blue-background'>
            <div className='table-banner off-white pl15 pr15'>
              <div className='heading-md mt15 center bold'>STATES</div>
            </div>
          </div>
        </div>
        <div className='flex-container-left-row'>
          {stateTitle}
        </div>
        <div className='flex-container-left-row'>
          {this.getColumns()}
        </div>
      </div>
    );
  }
}

export default Table;
