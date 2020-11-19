import React from "react";
import TableRow from "./TableRow.js";

const Table = (props) => {
    console.log(props);

return (
    <div>
    <th>Employees</th>
    <table>
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
            <TableRow empData={props.data}/>
            

            {/* {this.state.employees.map(function (response) {
              return (
                // <td>1</td>
                // {Array.from({ length: 12 }).map((_, index) => (
                //   <td key={index}>Table cell {index}</td>
                // ))}

                <tr key={response.id}>
                  <td>
                    <img alt="employee picture" src={response.results.picture.thumbnail}></img>
                  </td>
                  <td>{response.results.name}</td>
                  <td>{response.results.email}</td>
                  <td>{response.results.phone}</td>
                  <td>{response.results.cell}</td>
                  <td>{response.results.picture.thumbnail}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>    
    </div>
)
};

export default Table;
