import React from 'react';
import './SidebarComponent.css';
import {BrowserRouter as Link} from 'react-router-dom';

function SidebarComponent({active ,Icon, name}) {
    return (
        <div className="SidebarComponent">
            <Icon/>
            <h2>{name}</h2>
        </div>
    )
}

export default SidebarComponent
