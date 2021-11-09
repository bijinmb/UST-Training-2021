import { render } from "@testing-library/react";
import React from "react";
import "./table.css"

const TableHeader = ()=> {
    return (
        <thead className="table-header">
            <tr>
                <th>Company:</th>
                <th>Model:</th>
            </tr>
        </thead>
    )
}
const TableBody = ()=> {
    return (
        <tbody className="table-body">
            <tr>
                <td>FIAT</td>
                <td>Punto</td>
            </tr>
            <tr>
                <td>Ford</td>
                <td>Mustang</td>
            </tr>
            <tr>
                <td>BMW</td>
                <td>X1</td>
            </tr>
            <tr>
                <td>Morris Garage</td>
                <td>Hector</td>
            </tr>
            <tr>
                <td>Tata</td>
                <td>Safari</td>
            </tr>
            <tr>
                <td>Mahindra</td>
                <td>Thar</td>
            </tr>
        </tbody>
    )
}

class Table extends React.Component{
    render(){
        return (
            <table className="table">
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

export default Table;