import React from 'react';
import './table.css';
const TableHeader = () => {
    return (
      <thead className="table-header" > 
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>City</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index} >
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row.city}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }


  class Table extends React.Component {
    
    render() {
      const {characterData} = this.props
      return (
        <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
      )
    }
  }
  class Samp extends React.Component {
    render() {
      const characters = [
        {
          name: 'Krish',
          job: 'Software Engineer',
          city: 'Cochin'
        },
        {
          name: 'Minna',
          job: 'Artist',
          city: 'Coimbatore'
        },
        {
          name: 'Deepa',
          job: 'HR',
          city: 'Chennai'
        },
        {
          name: 'Ameer',
          job: 'Manager',
          city: 'Banglore'
        },
        {
          name: 'Vijay',
          job: 'Analyst',
          city: 'Mumbai'
        },
        {
          name: 'Chandu',
          job: 'System Engineer',
          city: 'cochin'
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
        )
    }
  }

  export default Samp;