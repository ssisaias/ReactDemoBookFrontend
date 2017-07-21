import React from 'react';
import PropTypes from 'prop-types';

import('./TextBox.css')

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    keyProp: PropTypes.string.isRequired,
    selectedKey: PropTypes.string,
    onEditItem: PropTypes.func,
    onDeleteItem: PropTypes.func,
};

const defaultProps = {
    items: [],
};

function List(props){
    const template = React.Children.only(props.children);
    return (
        <ul>
            {prop.items.map(item => (
                <li
                    key={item[props.keyProp]}
                    className={props.selectedKey === item[props.keyProp] ? 'list-item-seletec' : ''}
                >
                {React.cloneElement(template, {item})}
                </li>
            ))}
        </ul>
        
    );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;