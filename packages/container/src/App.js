import React, { lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Progress from './components/Progress';
const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
})

const marketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

export default () => { 
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <BrowserRouter> 
        <StylesProvider generateClassName={generateClassName}>
        <div> 
            <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
           <Suspense fallback={<Progress></Progress>}>
           <Switch>
                <Route path="/auth">
                    <AuthLazy onSignIn={() => setIsSignedIn(true)}>

                    </AuthLazy>
                    </Route>

                <Route path="/" component={marketingLazy}/> 
                
                 </Switch>
           </Suspense>
        </div>
             </StylesProvider>
        
         </BrowserRouter>
        
    );
};