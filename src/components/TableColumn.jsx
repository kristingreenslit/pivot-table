import React from 'react';

import americanStates from '../data/americanStates';
import '../styles/TableColumn.css';

class TableColumn extends React.Component {

  _getTableColumn() {
    let stateObjs = [];

    for (const key in americanStates) {
       let stateGroup = americanStates[key];

       let tempObj = {
         totalFurnishings: '',
         totalChairs: '',
         totalTables: '',
         totalBookcases: '',
         subtotalFurniture: '',
         totalAppliances: '',
         totalArt: '',
         totalBinders: '',
         totalEnvelopes: '',
         totalFasteners: '',
         totalLabels: '',
         totalPaper: '',
         totalStorage: '',
         totalSupplies: '',
         subtotalOfficeSupplies: '',
         totalAccessories: '',
         totalCopiers: '',
         totalMachines: '',
         totalPhones: '',
         subtotalTechnology: '',
         grandTotal: ''
       };

       let categoryFurnishings = stateGroup.filter((item) => { return item.subCategory === 'Furnishings'; });
       let sumFurnishings = categoryFurnishings.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalFurnishings = Math.round(sumFurnishings).toLocaleString();

       let categoryChairs = stateGroup.filter((item) => { return item.subCategory === 'Chairs'; });
       let sumChairs = categoryChairs.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalChairs = Math.round(sumChairs).toLocaleString();

       let categoryBookcases = stateGroup.filter((item) => { return item.subCategory === 'Bookcases'; });
       let sumBookcases = categoryBookcases.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalBookcases = Math.round(sumBookcases).toLocaleString();

       let categoryTables = stateGroup.filter((item) => { return item.subCategory === 'Tables'; });
       let sumTables = categoryTables.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalTables = Math.round(sumTables).toLocaleString();

       let categoryAppliances = stateGroup.filter((item) => { return item.subCategory === 'Appliances'; });
       let sumAppliances = categoryAppliances.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalAppliances = Math.round(sumAppliances).toLocaleString();

       let categoryArt = stateGroup.filter((item) => { return item.subCategory === 'Art'; });
       let sumArt = categoryArt.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalArt = Math.round(sumArt).toLocaleString();

       let categoryBinders = stateGroup.filter((item) => { return item.subCategory === 'Binders'; });
       let sumBinders = categoryBinders.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalBinders = Math.round(sumBinders).toLocaleString();

       let categoryEnvelopes = stateGroup.filter((item) => { return item.subCategory === 'Envelopes'; });
       let sumEnvelopes = categoryEnvelopes.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalEnvelopes = Math.round(sumEnvelopes).toLocaleString();

       let categoryFasteners = stateGroup.filter((item) => { return item.subCategory === 'Fasteners'; });
       let sumFasteners = categoryFasteners.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalFasteners = Math.round(sumFasteners).toLocaleString();

       let categoryLabels = stateGroup.filter((item) => { return item.subCategory === 'Labels'; });
       let sumLabels = categoryLabels.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalLabels = Math.round(sumLabels).toLocaleString();

       let categoryPaper = stateGroup.filter((item) => { return item.subCategory === 'Paper'; });
       let sumPaper = categoryPaper.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalPaper = Math.round(sumPaper).toLocaleString();

       let categoryStorage = stateGroup.filter((item) => { return item.subCategory === 'Storage'; });
       let sumStorage = categoryStorage.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalStorage = Math.round(sumStorage).toLocaleString();

       let categorySupplies = stateGroup.filter((item) => { return item.subCategory === 'Supplies'; });
       let sumSupplies = categorySupplies.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalOfficeSupplies = Math.round(sumSupplies).toLocaleString();

       let categoryAccessories = stateGroup.filter((item) => { return item.subCategory === 'Accessories'; });
       let sumAccessories = categoryAccessories.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalAccessories = Math.round(sumAccessories).toLocaleString();

       let categoryCopiers = stateGroup.filter((item) => { return item.subCategory === 'Copiers'; });
       let sumCopiers = categoryCopiers.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalCopiers = Math.round(sumCopiers).toLocaleString();

       let categoryMachines = stateGroup.filter((item) => { return item.subCategory === 'Machines'; });
       let sumMachines = categoryMachines.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalMachines = Math.round(sumMachines).toLocaleString();

       let categoryPhones = stateGroup.filter((item) => { return item.subCategory === 'Phones'; });
       let sumPhones = categoryPhones.reduce((sum, item) => { return sum = sum + item.sales; }, 0);
       tempObj.totalPhones = Math.round(sumPhones).toLocaleString();

       // Totals
       let totalFurniture = sumFurnishings + sumChairs + sumBookcases + sumTables;
       tempObj.subtotalFurniture = Math.round(totalFurniture).toLocaleString();

       let totalOfficeSupplies = sumAppliances + sumArt + sumBinders + sumEnvelopes + sumFasteners + sumLabels + sumPaper + sumStorage + sumSupplies;
       tempObj.subtotalOfficeSupplies = Math.round(totalOfficeSupplies).toLocaleString();

       let totalTechnology = sumAccessories + sumCopiers + sumMachines + sumPhones;
       tempObj.subtotalTechnology = Math.round(totalTechnology).toLocaleString();

       let grandTotal = totalFurniture + totalOfficeSupplies + totalTechnology;
       tempObj.grandTotal = Math.round(grandTotal).toLocaleString();

       stateObjs.push(tempObj);
    }

    const tableColumn = stateObjs.map(obj =>
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
             <div className='column-subtotal-text full-width center bold'>{obj.subtotalFurniture}</div>
           </div>
         </div>
        </div>
        <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
         <div className='flex-container-center-column pt15'>
           <div className='pb10'>{obj.totalAppliances}</div>
           <div className='pb10'>{obj.totalArt}</div>
           <div className='pb10'>{obj.totalBinders}</div>
           <div className='pb10'>{obj.totalEnvelopes}</div>
           <div className='pb10'>{obj.totalFasteners}</div>
           <div className='pb10'>{obj.totalLabels}</div>
           <div className='pb10'>{obj.totalPaper}</div>
           <div className='pb10'>{obj.totalStorage}</div>
           <div className='pb10'>{obj.totalOfficeSupplies}</div>
         </div>
        </div>
        <div className='flex-container-left-row'>
         <div className='theme-medium-gray-background column-container-outline'>
           <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
             <div className='column-subtotal-text full-width center bold'>{obj.subtotalOfficeSupplies}</div>
           </div>
         </div>
        </div>
        <div className='column-container base-font-xs pl15 pr15 theme-light-gray-background'>
         <div className='flex-container-center-column pt15'>
           <div className='pb10'>{obj.totalAccessories}</div>
           <div className='pb10'>{obj.totalCopiers}</div>
           <div className='pb10'>{obj.totalMachines}</div>
           <div className='pb10'>{obj.totalPhones}</div>
         </div>
        </div>
        <div className='flex-container-left-row'>
         <div className='theme-medium-gray-background column-container-outline'>
           <div className='flex-container-left-row pl15 pr15 column-container base-font-xs'>
             <div className='column-subtotal-text full-width center bold'>{obj.subtotalTechnology}</div>
           </div>
         </div>
        </div>
        <div className='flex-container-left-row'>
          <div className='theme-charcoal-background'>
            <div className='flex-container-left-row pl15 pr15 column-container base-font-xs off-white'>
              <div className='column-subtotal-text full-width center bold'>{obj.grandTotal}</div>
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
        <div className='flex-container-center-column column-underline full-width off-white theme-dark-blue-background'>
         <div className='heading-sm column-title mt20'>
           {key.split('_').join(' ')}
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
          {this._getTableColumn()}
        </div>
      </div>
    );
  }
}

export default TableColumn;
