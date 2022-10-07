import React from 'react';
import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';


console.log(mount);

export default () => { 
    return (
        <BrowserRouter> 
        <div> 
            <Header/>
            <MarketingApp />
        </div>
         </BrowserRouter>
        
    );
};