import React from "react";

// need to set state for employees ? 
const TableRow = () => {

return (
    <div>
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
              <tr>
                  <td>Picture</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Cell</td>
                </tr>


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
    </div>)
};

export default TableRow;
