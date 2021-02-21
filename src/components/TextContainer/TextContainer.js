import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <div>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></div>
            <div>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></div>
            <div>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></div>
        </div>
        {
            users
                ? (
                    <div>
                        <div>People currently chatting:</div>
                        <div className="activeContainer">
                            <div>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default TextContainer;