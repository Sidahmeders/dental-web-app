import React from 'react';
import '../../styles/sidebar/sidebar.css';
import personImage from '../../images/person.jpg';

function SideBar() {

    return (
        <div className="sidebar">
            <div className="profile">
                <img src={personImage} alt="person"/>
                <p>sidozoldik793@gmail.com</p>
                <p>sidahmed boutaraa</p>
                <div>
                    <p>status: <span>assistant</span></p>
                    <p>college year: <span>3em</span></p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default SideBar;
