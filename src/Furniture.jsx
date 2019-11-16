import React from 'react';
import './Furniture.css';
import Nebraska from './Nebraska';

class FurnitureComponent extends React.Component {
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
         <div className='page-container'>

           <section className='flex-container-left-row'>
             <div className='heading-lg'>SUM SALES</div>
           </section>

           <section className='flex-container-left-row mt15'>
             <div className='theme-dark-blue-background'>
               <div className='pivot-banner pivot-banner-static off-white'>
                 <div className='heading-md mt15 bold'>PRODUCTS</div>
                 <div className='flex-container-left-row mt10'>
                   <div className='heading-sm mt20'>Category</div>
                   <div className='heading-sm mt20 flex-container-leftrow-last-item'>Sub-Category</div>
                 </div>
               </div>
             </div>
             <div className='theme-dark-blue-background'>
               <div className='pivot-banner off-white'>
                 <div className='heading-md mt15 center bold'>STATES</div>
                 <div className='flex-container-center-column mt10 ml20 mr20'>
                   <div className='heading-sm mt20'>States (placeholder)</div>
                 </div>
               </div>
             </div>
           </section>

           <section className='flex-container-left-row'>
             <div className='theme-light-gray-background'>
               <div className='flex-container-left-row pivot-header pivot-banner-static base-font-xs'>
                 <div className='mt15 bold'>Furniture</div>
                 <div className='flex-container-left-row-last-item mt15'>
                   <div className='pb10'>Bookcases</div>
                   <div className='pb10'>Chairs</div>
                   <div className='pb10'>Furnishings</div>
                   <div className='pb10'>Tables</div>
                 </div>
               </div>
             </div>
             <div className='theme-light-gray-background'>
               <div className='pivot-data base-font-xs mt15'>
                 <div className='flex-container-center-column'>
                 <div className='pb10'>{totalBookcases}</div>
                 <div className='pb10'>{totalChairs}</div>
                 <div className='pb10'>{totalFurnishings}</div>
                 <div className='pb10'>{totalTables}</div>
                 </div>
               </div>
             </div>
           </section>

           <div className='p10 base-font-xs'>Grand Total = {totalFurniture}</div>

         </div>
     );
   }
}

export default FurnitureComponent;
