import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
   return (
      <div>
         <Tabs className="text-center">
            <TabList>
               <Tab>Title 1</Tab>
               <Tab>Title 2</Tab>
               <Tab>Title 3</Tab>
            </TabList>

            <TabPanel>
               <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                  <div className="card-body">
                     <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                     </h2>
                     <p>If a dog chews shoes whose shoes does he choose?</p>
                     <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                     </div>
                  </div>
               </div>
            </TabPanel>

            <TabPanel>
               <h2>Any content 2</h2>
            </TabPanel>

            <TabPanel>
               <h2>Any content 3</h2>
            </TabPanel>
         </Tabs>
      </div>
   );
};

export default ShopCategory;