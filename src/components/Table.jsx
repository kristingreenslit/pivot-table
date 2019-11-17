import React from 'react';

import americanStates from '../data/americanStates';
import '../styles/Table.css';

class Table extends React.Component {

  testFn() {
    let tempStates = [];

    for (const individualState in americanStates) {
      tempStates.push(individualState);
    }

    for (let i=0; i < tempStates.length; i++) {
      let tempItem = tempStates[i];
      console.log(tempItem);
      let tempTotal = americanStates[tempItem].filter((item) => { return item.subCategory === 'Furnishings'; }).reduce((sum, item) => { return sum = sum + item.sales; }, 0);
      return (<div>{tempTotal}</div>);
    }
  }

  render() {
    const categoryFurnishings = americanStates['District_of_Columbia'].filter((item) => { return item.subCategory === 'Furnishings'; });
    const totalFurnishings = categoryFurnishings.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const categoryChairs = americanStates['District_of_Columbia'].filter((item) => { return item.subCategory === 'Chairs'; });
    const totalChairs = categoryChairs.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const categoryBookcases = americanStates['District_of_Columbia'].filter((item) => { return item.subCategory === 'Bookcases'; });
    const totalBookcases = categoryBookcases.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const categoryTables = americanStates['District_of_Columbia'].filter((item) => { return item.subCategory === 'Tables'; });
    const totalTables = categoryTables.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

    const totalFurniture = totalFurnishings + totalChairs + totalBookcases + totalTables;

    let stateTitle = Object.keys(americanStates).map(key => (
      <div key={key}>
        <div className='flex-container-center-column column-underline full-width off-white theme-dark-blue-background' style={{height: '49px', width: '170px'}}>
         <div className='heading-sm column-title mt20'>
           {key}
         </div>
        </div>
      </div>
    ));

    // const test = americanStates['Nebraska']
    //   .filter((item) => item.subCategory === 'Furnishings')
    //   .reduce((sum, item) => sum + item.sales, 0);
    //
    //   console.log(test);

    // .filter((item) => item.subCategory === 'Furnishings')
    // .reduce((sum, item) => sum + item.sales, 0)

    let stateColumn = Object.keys(americanStates).map(key => (
      <div key={key}>
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
          {stateColumn}
        </div>
          {this.testFn()}
      </div>
    );
  }
}

export default Table;
