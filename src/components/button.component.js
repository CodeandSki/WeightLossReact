import React from 'react';
import './button.component.scss';


const ButtonComponent = ({text, onClick}) => (
    <button type="button" className="button-content" onClick={onClick}>{text}</button>
);


export default ButtonComponent;