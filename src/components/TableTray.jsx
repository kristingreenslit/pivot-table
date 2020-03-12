import React from 'react';

import mockApiData from '../data/mockApiData';
import '../styles/TableTray.css';

class TableTrayComponent extends React.Component {

  _getTableTrayPanel() {
    for (const key in mockApiData) {
       const categoryObjs = mockApiData[key];

       const tableTrayPanel = categoryObjs.map((obj) => {
         return (<div key={obj['category']}>
                  <div className='flex-container-left-row'>
                    <div className='theme-light-gray-background'>
                      <div className='flex-container-left-row pl15 pr15 tray-container base-font-xs'>
                        <div className='width-75 mt15 bold'>{obj['category']}</div>
                        <div className='mt15'>
                          {obj['subCategories'].map((category) => {return <div key={category} className='pb10'>{category}</div>})}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-container-left-row'>
                    <div className='theme-medium-gray-background tray-container-outline'>
                      <div className='flex-container-left-row pl15 pr15 tray-container base-font-xs'>
                        <div className='tray-subtotal-text bold'>{obj['category']} Total</div>
                      </div>
                    </div>
                  </div>
                </div>);
        });
      return tableTrayPanel;
    }
  }

  render() {
    return (
      <div>
        <section className='flex-container-left-row mt15'>
          <div className='theme-dark-blue-background'>
            <div className='tray-banner pl15 pr15 tray-container off-white'>
              <div className='heading-md mt15 bold'>PRODUCTS</div>
              <div className='flex-container-left-row mt10'>
                <div className='heading-sm mt20 bold'>Category</div>
                <div className='heading-sm mt20 flex-container-left-row-last-item bold'>Sub-Category</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          {this._getTableTrayPanel()}
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
