import React from 'react';

function Select(props) {
    const prev = props.prev;
    const cur = props.cur;

    return (
        <select name="me" id="ny">
            <option value="Math">Math</option>
            <option value="Phy">Phy</option>
        </select>
    );
}


export default Select;