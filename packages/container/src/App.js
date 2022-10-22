import React, { lazy, suspense } from 'react';
import { mount } from 'marketing/MarketingApp';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Suspense } from 'react';
import Progress from './components/Progress';
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})

const marketingLazy = lazy(() => import('./components/MarketingApp'));
const authLazy = lazy(() => import('./components/AuthApp'));

export default () => { 
    return (
        <BrowserRouter> 
        <StylesProvider generateClassName={generateClassName}>
        <div> 
            <Header/>
           <Suspense fallback={<Progress></Progress>}>
           <Switch>
                <Route path="/auth" component={authLazy}/>

                <Route path="/" component={marketingLazy}/> 
                
                 </Switch>
           </Suspense>
        </div>
             </StylesProvider>
        
         </BrowserRouter>
        
    );
};