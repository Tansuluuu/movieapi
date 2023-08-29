import React from 'react';
import Layout from "../Layout";
import './style.css'

const Loader = () => {
    return (
        <Layout>
          <div className={'loader-wrapper'}>
              <div className="lds-ripple">
                  <div></div>
                  <div></div>
              </div>
          </div>
        </Layout>
    );
};

export default Loader;