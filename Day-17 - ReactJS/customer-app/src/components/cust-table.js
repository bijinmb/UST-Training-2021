import React from 'react';

import TableHeader from './cust-header';
import TableBody from './cust-body';

const Table = (props) => {

    const { characterData, removeCharacter } = props

    return (
        <table className="table">
            <TableHeader />
            <TableBody characterData = {characterData} removeCharacter = {removeCharacter} />
        </table>
    )

}

export default Table;