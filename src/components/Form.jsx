import React from 'react';

import Label from "./Label";

const propTypes = {
    type: React.PropTypes.string,
};

const defaultProps = {
    prop: '',
};

function Label(props){
    return (
        <form>
            <Label type="header" size={4*2}>Titulo</Label>
            {props.children}
        </form>
    );
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;