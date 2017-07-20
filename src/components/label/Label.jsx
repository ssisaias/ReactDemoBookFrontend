import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

const propTypes = {
    type: React.PropTypes.oneOf(['regular', 'title']),
    color: React.PropTypes.string,
};

const defaultProps = {
    type: 'regular',
    color: '#aaa',
};
/**
 * <Label type="regular|title" color="#nnnnnn">
 *  Content
 * </Label>
 * @param {*} props 
 */
function Label(props){
    const textClass = `label-${props.type}`;
    const style= { color: props.color};
    return (
        <span className={textClass} style={style}>
            {props.children}
        </span>
    );
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;