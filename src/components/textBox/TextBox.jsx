import React from 'react';
import PropTypes from 'prop-types';

import('./TextBox.css')

const propTypes = {
    placeholder: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small','medium', 'large']),
    caption: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func
};

const defaultProps = {
    size: 'medium',
    placeholder: "",
};

function TextBox(props){
    
    const handleChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const value = e.target.value;
        props.onChange(value);
    }
    return (
        <div>
            <label>{props.caption}: </label>
            <input type="text" value={props.value} onChange={handleChange}>
            </input>
        </div>
    );
}

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export default TextBox;