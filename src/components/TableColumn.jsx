import React from 'react';

import americanStates from '../data/americanStates';
import mockApiData from '../data/mockApiData';
import '../styles/TableColumn.css';

class TableColumn extends React.Component {

  _getTableColumn() {
    let stateObjs = [];

    for (const key in americanStates) {
       let stateGroup = americanStates[key];

       let tempObj = {
         Bookcases: null,
         Chairs: null,
         Furnishings: null,
         Tables: null,
         Furniture: null,
         Appliances: null,
         Art: null,
         Binders: null,
         Envelopes: null,
         Fasteners: null,
         Labels: null,
         Paper: null,
         Storage: null,
         Supplies: null,
         OfficeSupplies: null,
         Accessories: null,
         Copiers: null,
         Machines: null,
         Phones: null,
         Technology: null,
         grandTotal: null
       };

       for (const keyName in mockApiData) {
        let categoryObjs = mockApiData[keyName];

          categoryObjs.map((obj) => {
            let tempCategory = (obj['category']);
            let tempSubCategories = obj['subCategories'];

            // Populate column object sums from americanStates
            let tempCategoryMatch = stateGroup.filter((item) => { return item.category === tempCategory; });
            let sum = tempCategoryMatch.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

            // Account for space in "Office Supplies"
            let categoryNoSpaces = tempCategory.split(' ').join('');
            tempObj[categoryNoSpaces] = sum;

            // Populate state totals in column object
            tempObj['grandTotal'] += sum;

            // Loop through subCategories in mockApiData (Tables, Phones, etc.) and populate column object from americanStates
            for (const keyVal in tempSubCategories) {
              let tempSubCategoryVal = tempSubCategories[keyVal];
              let tempSubCategoryMatch = stateGroup.filter((item) => { return item.subCategory === tempSubCategoryVal; });
              let sum = tempSubCategoryMatch.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
              tempObj[tempSubCategoryVal] = sum;
            }
          });
        }

       stateObjs.push(tempObj);
    }

    const tableColumn = stateObjs.map(obj =>
      <div key={obj.Furnishings}>
        <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
         <div className='flex-container-right-column pt15'>
           <div className='pb10'>{Math.round(obj.Bookcases).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Chairs).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Furnishings).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Tables).toLocaleString()}</div>
         </div>
        </div>
        <div className='flex-container-left-row'>
         <div className='theme-medium-gray-background column-container-outline'>
           <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
             <div className='column-subtotal-text full-width bold'>{Math.round(obj.Furniture).toLocaleString()}</div>
           </div>
         </div>
        </div>
        <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
         <div className='flex-container-right-column pt15'>
           <div className='pb10'>{Math.round(obj.Appliances).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Art).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Binders).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Envelopes).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Fasteners).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Labels).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Paper).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Storage).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Supplies).toLocaleString()}</div>
         </div>
        </div>
        <div className='flex-container-left-row'>
         <div className='theme-medium-gray-background column-container-outline'>
           <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
             <div className='column-subtotal-text full-width bold'>{Math.round(obj.OfficeSupplies).toLocaleString()}</div>
           </div>
         </div>
        </div>
        <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
         <div className='flex-container-right-column pt15'>
           <div className='pb10'>{Math.round(obj.Accessories).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Copiers).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Machines).toLocaleString()}</div>
           <div className='pb10'>{Math.round(obj.Phones).toLocaleString()}</div>
         </div>
        </div>
        <div className='flex-container-left-row'>
         <div className='theme-medium-gray-background column-container-outline'>
           <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
             <div className='column-subtotal-text full-width bold'>{Math.round(obj.Technology).toLocaleString()}</div>
           </div>
         </div>
        </div>
        <div className='flex-container-left-row'>
          <div className='theme-charcoal-background'>
            <div className='flex-container-left-row pl15 pr15 column-container base-font-xs off-white'>
              <div className='column-subtotal-text full-width center bold'>{Math.round(obj.grandTotal).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    );

    return tableColumn;
  }

  render() {
    let stateTitle = Object.keys(americanStates).map(key => (
      <div key={key}>
        <div className='flex-container-right-column column-underline full-width off-white theme-dark-blue-background'>
         <div className='heading-sm column-title mt20 pl15 pr15'>
           {key.split('_').join(' ')}
         </div>
        </div>
      </div>
    ));

    return (
      <div>
      {/* <div className='full-width scroll-y'> */}
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
          {this._getTableColumn()}
        </div>
      </div>
    );
  }
}

export default TableColumn;
