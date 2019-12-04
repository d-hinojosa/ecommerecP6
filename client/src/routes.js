import React from 'react';
import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';

const routes = {
    '/': () => <Home /> ,
    '/Products': () => < Products /> ,
    '/Contact': () => < Contact />
}

export default routes;