import React from 'react';
import './Sidebar.css';
import SidebarComponent from './SidebarComponent';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HomeIcon from '@material-ui/icons/Home';
import NotesIcon from '@material-ui/icons/Notes';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Button} from "@material-ui/core";
import {BrowserRouter as Route, Link} from 'react-router-dom';
import notes from './notes';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Icon */}
            <QuestionAnswerIcon className="Sidebar__icon"/>
            <SidebarComponent Icon ={HomeIcon} name="Home"/>
            
            <a href="notes">
            <SidebarComponent Icon ={NotesIcon}name="Notes"/></a>
            <SidebarComponent Icon ={NotificationsIcon} name="Notifications"/>
            <SidebarComponent Icon ={PersonIcon} name="Profile"/>
            <SidebarComponent Icon ={InfoIcon} name="About"/>
            {/* Sidebar component */}
            {/* Sidebar component */}
            {/* Sidebar component */}
            {/* Sidebar component */}
            {/* Sidebar component */}
            {/* Sidebar component */}

            {/* Button */}
        </div>
    )
}

export default Sidebar
