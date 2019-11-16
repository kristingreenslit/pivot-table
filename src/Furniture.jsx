import React from 'react';
import './Furniture.css';
import Nebraska from './Nebraska';

class FurnitureComponent extends React.Component {
   render() {

     // let totalBookCases = 0;
     // let totalChairs = 0;
     // let totalFurnishings = 0;
     // let totalTables = 0;

     Nebraska.forEach(obj => {
       if (obj.subCategory === 'Bookcases') {
         this.totalBookcases += obj.sales;
       } else if (obj.subCategory === 'Chairs') {
         this.totalChairs += obj.sales;
       } else if (obj.subCategory === 'Furnishings') {
         console.log(obj.sales);
         this.totalFurnishings += obj.sales;
         // console.log(this.totalFurnishings);
       } else if (obj.subCategory === 'Tables') {
         this.totalTables += obj.sales;
       }
     });

     // console.log(this.totalFurnishings);

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
                 <div className='pb10'>{this.totalBookcases || 0}</div>
                 <div className='pb10'>{this.totalChairs || 0}</div>
                 <div className='pb10'>{Nebraska[0].sales}</div>
                 {/* <div className='pb10'>{this.totalFurnishings || 0}</div> */}
                 <div className='pb10'>{this.totalTables || 0}</div>
                 </div>
               </div>
             </div>

           </section>

         </div>
     );
   }
}

export default FurnitureComponent;
