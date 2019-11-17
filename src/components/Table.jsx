import React from 'react';

import americanStates from '../data/americanStates';
import '../styles/Table.css';

class Table extends React.Component {
  render() {
    const categoryFurnishings = americanStates['Nebraska'].filter((item) => { return item.subCategory === 'Furnishings'; });
    const totalFurnishings = categoryFurnishings.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const categoryChairs = americanStates['Nebraska'].filter((item) => { return item.subCategory === 'Chairs'; });
    const totalChairs = categoryChairs.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const categoryBookcases = americanStates['Nebraska'].filter((item) => { return item.subCategory === 'Bookcases'; });
    const totalBookcases = categoryBookcases.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const categoryTables = americanStates['Nebraska'].filter((item) => { return item.subCategory === 'Tables'; });
    const totalTables = categoryTables.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const totalFurniture = totalFurnishings + totalChairs + totalBookcases + totalTables;

    let stateColumn = Object.keys(americanStates).map(key => (
      <section key={key}>
        <div className='flex-container-center-column column-underline full-width off-white theme-dark-blue-background' style={{height: '49px'}}>
         <div className='heading-sm column-title mt20'>
           {key}
         </div>
        </div>
        <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
         <div className='flex-container-center-column pt15'>
           <div className='pb10'>{totalBookcases}</div>
           <div className='pb10'>{totalChairs}</div>
           <div className='pb10'>{totalFurnishings}</div>
           <div className='pb10'>{totalTables}</div>
         </div>
        </div>
        <div className='flex-container-left-row'>
         <div className='theme-medium-gray-background column-container-outline'>
           <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
             <div className='column-subtotal-text full-width center bold'>{totalFurniture}</div>
           </div>
         </div>
        </div>
      </section>
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
          {stateColumn}
        </div>
      </div>
    );
  }
}

export default Table;
