import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (<div className="navigation">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </div>);
}

export default Nav;