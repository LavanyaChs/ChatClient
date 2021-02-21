import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import ononline from '../../icons/onlineIcon.png'
const InfoBar = ({ room }) => (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' alt='online' src={ononline} />
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'><img src={closeIcon} alt='close' /></a>
        </div></div>
)
export default InfoBar;