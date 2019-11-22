import React from 'react';

import americanStates from '../data/americanStates';
import mockApiData from '../data/mockApiData';
import '../styles/TableColumn.css';

class TableColumn extends React.Component {

  _getTableColumn() {
    let stateObjs = [];

    for (const key in americanStates) {
       let stateGroup = americanStates[key];
       let tempObj = { grandTotal: null };

       for (const keyName in mockApiData) {
        let categoryObjs = mockApiData[keyName];

          categoryObjs.map((obj, index) => {
            // Iterate through mockApiData object
            let tempCategory = obj['category'];
            let tempSubCategories = obj['subCategories'];

            // Populate column object sums from americanStates (using variables from mockApiData)
            let tempCategoryMatch = stateGroup.filter((item) => { return item.category === tempCategory; });
            let sum = tempCategoryMatch.reduce((sum, item) => { return sum = sum + item.sales; }, 0);

            // Build nested object for tempObj
            let objScaffold = { category: tempCategory,
                                subTotal: sum,
                                subcategories:
                                [
                                  tempSubCategories.map((tempSubcategory) => {
                                    let tempSubCategoryVal = tempSubcategory;
                                    let tempSubCategoryMatch = stateGroup.filter((item) => { return item.subCategory === tempSubCategoryVal; });
                                    let tempSum = tempSubCategoryMatch.reduce((tempSum, item) => { return tempSum = tempSum + item.sales; }, 0);
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

    let tableColumn = stateObjs.map((stateObj) => {
      let singleStateObj = stateObj;
      let singleStateGrandTotal = singleStateObj['grandTotal'];

      let singleStateZero = singleStateObj['0'];
      let singleStateZeroItems = singleStateObj['0']['subcategories'];

      let singleStateOne = singleStateObj['1'];
      let singleStateOneItems = singleStateObj['1']['subcategories'];

      let singleStateTwo = singleStateObj['2'];
      let singleStateTwoItems = singleStateObj['2']['subcategories'];

      return  <div key={singleStateGrandTotal}>
                <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
                   <div className='flex-container-right-column pt15'>
                     <div className='pb10'>{singleStateZeroItems.map((item) => {let tempItem = item[0][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateZeroItems.map((item) => {let tempItem = item[1][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateZeroItems.map((item) => {let tempItem = item[2][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateZeroItems.map((item) => {let tempItem = item[3][1]; return Math.round(tempItem).toLocaleString()})}</div>
                   </div>
                </div>
                <div className='flex-container-left-row'>
                 <div className='theme-medium-gray-background column-container-outline'>
                   <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
                     <div className='column-subtotal-text full-width bold'>{Math.round(singleStateZero['subTotal']).toLocaleString()}</div>
                   </div>
                 </div>
                </div>
                <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
                   <div className='flex-container-right-column pt15'>
                     <div className='pb10'>{singleStateOneItems.map((item) => {let tempItem = item[0][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {let tempItem = item[1][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {let tempItem = item[2][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {let tempItem = item[3][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {let tempItem = item[4][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {let tempItem = item[5][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {let tempItem = item[6][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {let tempItem = item[7][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateOneItems.map((item) => {let tempItem = item[8][1]; return Math.round(tempItem).toLocaleString()})}</div>
                   </div>
                </div>
                <div className='flex-container-left-row'>
                 <div className='theme-medium-gray-background column-container-outline'>
                   <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
                     <div className='column-subtotal-text full-width bold'>{Math.round(singleStateOne['subTotal']).toLocaleString()}</div>
                   </div>
                 </div>
                </div>
                <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
                   <div className='flex-container-right-column pt15'>
                     <div className='pb10'>{singleStateTwoItems.map((item) => {let tempItem = item[0][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateTwoItems.map((item) => {let tempItem = item[1][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateTwoItems.map((item) => {let tempItem = item[2][1]; return Math.round(tempItem).toLocaleString()})}</div>
                     <div className='pb10'>{singleStateTwoItems.map((item) => {let tempItem = item[3][1]; return Math.round(tempItem).toLocaleString()})}</div>
                   </div>
                </div>
                <div className='flex-container-left-row'>
                 <div className='theme-medium-gray-background column-container-outline'>
                   <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
                     <div className='column-subtotal-text full-width bold'>{Math.round(singleStateTwo['subTotal']).toLocaleString()}</div>
                   </div>
                 </div>
                </div>
                <div className='flex-container-left-row'>
                  <div className='theme-charcoal-background'>
                    <div className='flex-container-left-row pl15 pr15 column-container base-font-xs off-white'>
                      <div className='column-subtotal-text full-width center bold'>{Math.round(singleStateGrandTotal).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>;
     });

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
      <div className='table-container'>
        <div className='flex-container-left-column mt15 theme-dark-blue-background' style={{display: 'inline-block'}}>
          <div className='theme-dark-blue-background'>
            <div className='table-banner off-white pl15 pr15'>
              <div className='heading-md mt15 center bold'>STATES</div>
            </div>
          </div>
          <div className='flex-container-left-row theme-dark-blue-background'>
            {stateTitle}
          </div>
        </div>
        <div className='flex-container-left-row'>
          {this._getTableColumn()}
        </div>
      </div>
    );
  }
}

export default TableColumn;
