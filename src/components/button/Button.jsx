import React from 'react';
import PropTypes from 'prop-types';

import('./Button.css')

const propTypes = {
    caption: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['info', 'danger', 'success']),
    onClick: React.PropTypes.func,
};

const defaultProps = {
    type: 'info',
    onClick: Function.prototype, //Funcao no OP (vazia)
};

function Button(props){
    const buttonClass = `button button-${props.type}`
    
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.onClick();
    }
    return (
        
        <button className={buttonClass} onClick={handleClick}>
            {props.caption}
        </button>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

function SaveButton(props){
    return (
        <Button{...props }
        caption="Salvar" 
        type="success"/>
    );
}

function CancelButton(props){
    return (
        <Button{...props }
        caption="Cancelar" 
        type="danger"/>
    );
}

function OkButton(props){
    return (
        <Button{...props }
        caption="Ok" 
        type="success"/>
    );
}

Button.Save = SaveButton;
Button.Cancel = CancelButton;
Button.Ok = OkButton;
export default Button;