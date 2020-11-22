import React from "react";

const Table = (props) => {
console.log(props);
return (
    <table border="1">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Cell</th>
            </tr>
          </thead>
          <tbody>
            {props.empData.results.map((employee, index) => (
            <tr key={index}>   
              <td>
                <img alt="employee picture" src={employee.picture.thumbnail}></img>
              </td>
              <td>{employee.name.first} {employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.cell}</td>
            </tr>
            )
            )}
          </tbody>
    </table>    
      );
  };

export default Table;