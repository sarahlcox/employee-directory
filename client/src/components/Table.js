import React from "react";
import "./style.css";

const Table = (props) => {
  console.log(props);
return (
    <div className="container">
      <table className="table">
          <thead>
            <tr>
              <th>Photo</th>
              <th className="name-toggle" onClick={props.handler}>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Cell</th>
            </tr>
          </thead>
          <tbody>
            {props.empData.map((employee, index) => (
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
    </div>    
      );
  };

export default Table;