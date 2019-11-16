import React from 'react';

import Nebraska from '../data/Nebraska';
import '../styles/Table.css';

class Table extends React.Component {
  render() {
    const categoryFurnishings = Nebraska.filter((item) => { return item.subCategory === 'Furnishings'; });
    const totalFurnishings = categoryFurnishings.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const categoryChairs = Nebraska.filter((item) => { return item.subCategory === 'Chairs'; });
    const totalChairs = categoryChairs.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const categoryBookcases = Nebraska.filter((item) => { return item.subCategory === 'Bookcases'; });
    const totalBookcases = categoryBookcases.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const categoryTables = Nebraska.filter((item) => { return item.subCategory === 'Tables'; });
    const totalTables = categoryTables.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const totalFurniture = totalFurnishings + totalChairs + totalBookcases + totalTables;

    return (
      <div>
        <div className='flex-container-left-column mt15'>
          <div style={{backgroundColor: 'lightblue'}}>
            <div className='table-banner off-white'>
              <div className='heading-md mt15 center bold'>STATES</div>
            </div>
          </div>
        </div>

        <section>

          <div className='flex-container-center-column column-underline full-width' style={{backgroundColor: 'lightblue'}}>
            <div className='heading-sm column-title'>
              <div className='column-text'>Nebraska</div>
            </div>
          </div>

          <div className='table-data base-font-xs' style={{backgroundColor: 'lightblue'}}>
            <div className='flex-container-center-column pt15'>
              <div className='pb10'>{totalBookcases}</div>
              <div className='pb10'>{totalChairs}</div>
              <div className='pb10'>{totalFurnishings}</div>
              <div className='pb10'>{totalTables}</div>
            </div>
          </div>

          <div>
            <div className='p10 base-font-xs'>Grand Total = {totalFurniture}</div>
          </div>

        </section>

      </div>
    );
  }
}

export default Table;
