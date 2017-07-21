import React from 'react';
import PropTypes from 'prop-types';

import('./LinkButton.css')

const propTypes = {
    caption: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
};

const defaultProps = {
    onClick: Function.prototype, //Funcao vazia
};

function LinkButton(props){
    
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.onClick();
    }
    return (
        <a
          href=""
          className="button button-link"
          onClick={handleClick}
        >
        {props.caption}
        </a>
    );
}

LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;

export default LinkButton;