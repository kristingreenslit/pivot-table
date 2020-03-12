import React from 'react';

import americanStates from '../data/americanStates';
import mockApiData from '../data/mockApiData';
import '../styles/TableColumn.css';

class TableColumn extends React.Component {

  _getTableColumn() {
    const stateObjs = [];

    for (const key in americanStates) {
       const stateGroup = americanStates[key];
       const tempObj = { grandTotal: null };

       for (const keyName in mockApiData) {
        const categoryObjs = mockApiData[keyName];

          categoryObjs.map((obj, index) => {
            // Iterate through mockApiData object
            const tempCategory = obj['category'];
            const tempSubCategories = obj['subCategories'];

            // Populate column object sums from americanStates (using variables from mockApiData)
            const tempCategoryMatch = stateGroup.filter((item) => { return item.category === tempCategory; });
            const sum = tempCategoryMatch.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

            // Build nested object for tempObj
            const objScaffold = { category: tempCategory,
                                subTotal: sum,
                                subcategories:
                                [
                                  tempSubCategories.map((tempSubcategory) => {
                                    const tempSubCategoryVal = tempSubcategory;
                                    const tempSubCategoryMatch = stateGroup.filter((item) => { return item.subCategory === tempSubCategoryVal; });
                                    const tempSum = tempSubCategoryMatch.reduce((tempSum, item) => { return tempSum = tempSum + item.sales; }, 0);
                                    return [tempSubcategory, tempSum];
                                  })
                                ]
                              };

            // Populate state totals in column object
            tempObj['grandTotal'] += sum;

            // Assign index to nest each scaffolding object
            tempObj[index] = objScaffold;

            return tempObj;
          });
        // Push tempObj into an array that contains an object for each American state
        stateObjs.push(tempObj);
      }
    }

    const tableColumn = stateObjs.map((stateObj) => {
      const singleStateObj = stateObj;
      const singleStateGrandTotal = singleStateObj['grandTotal'];

      const singleStateZero = singleStateObj['0'];
      const singleStateZeroItems = singleStateObj['0']['subcategories'];

      const singleStateOne = singleStateObj['1'];
      const singleStateOneItems = singleStateObj['1']['subcategories'];

      const singleStateTwo = singleStateObj['2'];
      const singleStateTwoItems = singleStateObj['2']['subcategories'];

      return  <div key={singleStateGrandTotal}>
                <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
                   <div className='flex-container-right-column pt15'>
                     <div className='pb10'>{singleStateZeroItems.map((item) => {const tempItem = item[0][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateZeroItems.map((item) => {const tempItem = item[1][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateZeroItems.map((item) => {const tempItem = item[2][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateZeroItems.map((item) => {const tempItem = item[3][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                   </div>
                </div>
                <div className='flex-container-left-row'>
                 <div className='theme-medium-gray-background column-container-outline'>
                   <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
                     <div className='column-subtotal-text full-width bold'>{singleStateZero['subTotal'].toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                   </div>
                 </div>
                </div>
                <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
                   <div className='flex-container-right-column pt15'>
                     <div className='pb10'>{singleStateOneItems.map((item) => {const tempItem = item[0][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {const tempItem = item[1][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {const tempItem = item[2][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {const tempItem = item[3][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {const tempItem = item[4][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {const tempItem = item[5][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {const tempItem = item[6][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {const tempItem = item[7][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {const tempItem = item[8][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                   </div>
                </div>
                <div className='flex-container-left-row'>
                 <div className='theme-medium-gray-background column-container-outline'>
                   <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
                     <div className='column-subtotal-text full-width bold'>{singleStateOne['subTotal'].toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                   </div>
                 </div>
                </div>
                <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
                   <div className='flex-container-right-column pt15'>
                     <div className='pb10'>{singleStateTwoItems.map((item) => {const tempItem = item[0][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateTwoItems.map((item) => {const tempItem = item[1][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateTwoItems.map((item) => {const tempItem = item[2][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                     <div className='pb10'>{singleStateTwoItems.map((item) => {const tempItem = item[3][1]; return tempItem.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})}</div>
                   </div>
                </div>
                <div className='flex-container-left-row'>
                 <div className='theme-medium-gray-background column-container-outline'>
                   <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
                     <div className='column-subtotal-text full-width bold'>{singleStateTwo['subTotal'].toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                   </div>
                 </div>
                </div>
                <div className='flex-container-left-row'>
                  <div className='theme-charcoal-background'>
                    <div className='flex-container-left-row pl15 pr15 column-container base-font-xs off-white'>
                      <div className='column-subtotal-text full-width center bold'>{singleStateGrandTotal.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    </div>
                  </div>
                </div>
              </div>;
     });

    return tableColumn;
  }

  render() {
    const stateTitle = Object.keys(americanStates).map(key => (
      <div key={key}>
        <div className='flex-container-right-column column-underline full-width off-white theme-dark-blue-background'>
         <div className='heading-sm column-title mt20 pl15 pr15 bold'>
           {key.split('_').join(' ')}
         </div>
        </div>
      </div>
    ));

    return (
      <div className='table-wrapper'>
        <div className='flex-container-left-column mt15 theme-dark-blue-background full-width'>
          <div className='theme-dark-blue-background'>
            <div className='table-banner off-white pl15 pr15'>
              <div className='heading-md mt15 center bold'>STATES</div>
            </div>
          </div>
        </div>
        <div className='table-container theme-dark-blue-background'>
          <div className='flex-container-left-row theme-dark-blue-background'>
            {stateTitle}
          </div>
          <div className='flex-container-left-row'>
            {this._getTableColumn()}
          </div>
        </div>
        <div className='italic base-font-xs medium-gray right mt5 mr5 pb5'>Please see README for the approach on data displayed above. Scroll horizontally to see additional states.</div>
      </div>
    );
  }
}

export default TableColumn;
