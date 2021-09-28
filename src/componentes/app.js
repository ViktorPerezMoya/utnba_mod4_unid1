import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './layout/Header';
import Nav from './layout/Nav';
import Aside from './layout/Aside';
import Footer from './layout/Footer';

import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';

import '../styles/app.css';

const App = (props) => {
    return (
    <BrowserRouter>
        <Header></Header>
        <Nav></Nav>
        <div className="section">
            <Aside></Aside>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/contacto" exact component={Contacto}></Route>
                <Route path="/nosotros" exact component={Nosotros}></Route>
            </Switch>
        </div>
        <Footer></Footer>
    </BrowserRouter>
    );
}

export default App;