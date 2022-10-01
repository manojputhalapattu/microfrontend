import React from 'react';
import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';



console.log(mount);

export default () => { 
    return (
        <div> 
            <h1> Hi there in container !!! </h1>
            <hr/> 
            <MarketingApp />

        </div>
    );
};