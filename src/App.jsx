import React from 'react';
import './App.css';

function App() {
  
  const NE = [
    {
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
    },
    {
      "rowId": 23,
      "orderId": "CA-2016-137330",
      "orderDate": "12/9/16",
      "shipDate": "12/13/16",
      "shipMode": "Standard Class",
      "customerId": "KB-16585",
      "customerName": "Ken Black",
      "segment": "Corporate",
      "country": "United States",
      "city": "Fremont",
      "state": "Nebraska",
      "postalCode": 68025,
      "region": "Central",
      "productId": "OFF-AP-10001492",
      "category": "Office Supplies",
      "subCategory": "Furnishings",
      "productName": "Acco Six-Outlet Power Strip, 4' Cord Length",
      "sales": 60.34,
      "quantity": 7,
      "discount": 0,
      "profit": 15.6884
    },
  ];

  let totalBookCases = 0;
  let totalChairs = 0;
  let totalFurnishings = 0;
  let totalTables = 0;

  NE.forEach(obj => {
    if (obj.subCategory === 'Bookcases') {
      totalBookcases += obj.sales;
    } else if (obj.subCategory === 'Chairs') {
      totalChairs += obj.sales;
    } else if (obj.subCategory === 'Furnishings') {
      totalFurnishings += obj.sales;
    } else if (obj.subCategory === 'Tables') {
      totalTables += obj.sales;
    }
  });

  console.log(totalBookCases);
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
              <div className='pb10'>{totalBookcases}</div>
              <div className='pb10'>Chairs</div>
              <div className='pb10'>{NE[0].sales}</div>
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
