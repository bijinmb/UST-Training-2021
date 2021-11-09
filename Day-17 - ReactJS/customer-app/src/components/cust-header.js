import React from 'react';
import './customer.css';

const TableHeader = () => {
    return (
        <thead className="table-header" >
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Phone</th>
                <th>E-Mail</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

export default TableHeader;