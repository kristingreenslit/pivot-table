import React from 'react';

import americanStates from '../data/americanStates';
import '../styles/Furniture.css';

class Furniture extends React.Component {

  _getColumns() {
    let stateObjs = [];

    for (const key in americanStates) {
       let stateGroup = americanStates[key];

       let tempObj = {
         totalFurnishings: 0,
         totalChairs: 0,
         totalTables: 0,
         totalBookcases: 0,
         subtotal: 0
       };

       let categoryFurnishings = stateGroup.filter((item) => { return item.subCategory === 'Furnishings'; });
       let sumFurnishings = categoryFurnishings.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalFurnishings = sumFurnishings;

       let categoryChairs = stateGroup.filter((item) => { return item.subCategory === 'Chairs'; });
       let sumChairs = categoryChairs.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalChairs = sumChairs;

       let categoryBookcases = stateGroup.filter((item) => { return item.subCategory === 'Bookcases'; });
       let sumBookcases = categoryBookcases.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalBookcases = sumBookcases;

       let categoryTables = stateGroup.filter((item) => { return item.subCategory === 'Tables'; });
       let sumTables = categoryTables.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalTables = sumTables;

       tempObj.subtotal = sumFurnishings + sumChairs + sumBookcases + sumTables;

       stateObjs.push(tempObj);
    }

    const stateColumn = stateObjs.map(obj =>
      <div key={obj.totalFurnishings}>
        <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
         <div className='flex-container-center-column pt15'>
           <div className='pb10'>{obj.totalBookcases}</div>
           <div className='pb10'>{obj.totalChairs}</div>
           <div className='pb10'>{obj.totalFurnishings}</div>
           <div className='pb10'>{obj.totalTables}</div>
         </div>
        </div>
        <div className='flex-container-left-row'>
         <div className='theme-medium-gray-background column-container-outline'>
           <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
             <div className='column-subtotal-text full-width center bold'>{obj.subtotal}</div>
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
        <div className='flex-container-center-column column-underline full-width off-white theme-dark-blue-background'>
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
          {this._getColumns()}
        </div>
      </div>
    );
  }
}

export default Furniture;
