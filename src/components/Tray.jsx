import React from 'react';
import '../styles/Tray.css';

class TrayComponent extends React.Component {
  render() {
    return (
      <div>
        <section className='flex-container-left-row mt15'>
          <div className='theme-dark-blue-background'>
            <div className='tray-banner pl15 pr15 tray-container off-white'>
              <div className='heading-md mt15 bold'>PRODUCTS</div>
              <div className='flex-container-left-row mt10'>
                <div className='heading-sm mt20'>Category</div>
                <div className='heading-sm mt20 flex-container-left-row-last-item'>Sub-Category</div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex-container-left-row'>
          <div className='theme-light-gray-background'>
            <div className='flex-container-left-row pl15 pr15 tray-container base-font-xs'>
              <div className='mt15 bold'>Furniture</div>
              <div className='flex-container-left-row-last-item mt15'>
                <div className='pb10'>Bookcases</div>
                <div className='pb10'>Chairs</div>
                <div className='pb10'>Furnishings</div>
                <div className='pb10'>Tables</div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex-container-left-row'>
          <div className='theme-medium-gray-background tray-container-outline'>
            <div className='flex-container-left-row pl15 pr15 tray-container base-font-xs'>
              <div className='tray-subtotal-text bold'>Furniture Total</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TrayComponent;
