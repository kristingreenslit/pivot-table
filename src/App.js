import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='page-container'>

        <section className='flex-container-left'>
          <div className='heading-lg'>SUM SALES</div>
        </section>

        <section className='flex-container-left mt15'>
          <div className='theme-dark-blue-background'>
            <div className='pivot-banner pivot-banner-static off-white'>
              <div className='heading-md mt15 bold'>PRODUCTS</div>
              <div className='flex-container-left mt10'>
                <div className='heading-sm mt20'>Category</div>
                <div className='heading-sm mt20 flex-container-left-last-item'>Sub-Category</div>
              </div>
            </div>
          </div>
          <div className='theme-dark-blue-background'>
            <div className='pivot-banner off-white'>
              <div className='heading-md mt15 center bold'>STATES</div>
              <div className='flex-container-center mt10 ml20 mr20'>
                <div className='heading-sm mt20'>States (placeholder)</div>
              </div>
            </div>
          </div>
        </section>

        <section className='flex-container-left'>

          <div className='theme-light-gray-background'>
            <div className='flex-container-left pivot-header pivot-banner-static base-font-xs'>
              <div className='mt15 bold'>Furniture</div>
              <div className='flex-container-left-last-item mt15'>
                <div className='pb10'>Bookcases</div>
                <div className='pb10'>Chairs</div>
                <div className='pb10'>Furnishings</div>
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
