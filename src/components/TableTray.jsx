import React from 'react';

import {SubCategories, Categories} from '../data/mockApiData';
import '../styles/TableTray.css';

class TableTrayComponent extends React.Component {
  render() {
    console.log(SubCategories, Categories);

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
        <section className='flex-container-left-row'>
          <div className='theme-light-gray-background'>
            <div className='flex-container-left-row pl15 pr15 tray-container base-font-xs'>
              <div className='mt15 bold'>Office Supplies</div>
              <div className='flex-container-left-row-last-item mt15'>
                <div className='pb10'>Appliances</div>
                <div className='pb10'>Art</div>
                <div className='pb10'>Binders</div>
                <div className='pb10'>Envelopes</div>
                <div className='pb10'>Fasteners</div>
                <div className='pb10'>Labels</div>
                <div className='pb10'>Paper</div>
                <div className='pb10'>Storage</div>
                <div className='pb10'>Supplies</div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex-container-left-row'>
          <div className='theme-medium-gray-background tray-container-outline'>
            <div className='flex-container-left-row pl15 pr15 tray-container base-font-xs'>
              <div className='tray-subtotal-text bold'>Office Supplies Total</div>
            </div>
          </div>
        </section>
        <section className='flex-container-left-row'>
          <div className='theme-light-gray-background'>
            <div className='flex-container-left-row pl15 pr15 tray-container base-font-xs'>
              <div className='mt15 bold'>Technology</div>
              <div className='flex-container-left-row-last-item mt15'>
                <div className='pb10'>Accessories</div>
                <div className='pb10'>Copiers</div>
                <div className='pb10'>Machines</div>
                <div className='pb10'>Phones</div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex-container-left-row'>
          <div className='theme-medium-gray-background tray-container-outline'>
            <div className='flex-container-left-row pl15 pr15 tray-container base-font-xs'>
              <div className='tray-subtotal-text bold'>Technology Total</div>
            </div>
          </div>
        </section>
        <section className='flex-container-left-row'>
          <div className='theme-charcoal-background'>
            <div className='flex-container-left-row pl15 pr15 tray-container base-font-xs off-white'>
              <div className='tray-subtotal-text bold'>Grand Total</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TableTrayComponent;
