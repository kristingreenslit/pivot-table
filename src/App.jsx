import React from 'react';
import './App.css';

function App() {

  const NE = {
      "rowId": 808,
      "orderId": "CA-2015-140921",
      "orderDate": "2/3/15",
      "shipDate": "2/5/15",
      "shipMode": "First Class",
      "customerId": "AA-10375",
      "customerName": "Allen Armold",
      "segment": "Consumer",
      "country": "United States",
      "city": "Omaha",
      "state": "Nebraska",
      "postalCode": 68104,
      "region": "Central",
      "productId": "FUR-FU-10003347",
      "category": "Furniture",
      "subCategory": "Furnishings",
      "productName": "Coloredge Poster Frame",
      "sales": 28.4,
      "quantity": 2,
      "discount": 0,
      "profit": 11.076
    };

  return (
    <div className='App'>
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
              <div className='pb10'>Bookcases</div>
              <div className='pb10'>Chairs</div>
              <div className='pb10'>{NE.sales}</div>
              <div className='pb10'>Tables</div>
              </div>
            </div>
          </div>

        </section>


      </div>



    </div>
  );
}

export default App;
