import React from "react";

// need to set state for employees ? 
const TableRow = (props) => {
console.log(props);
console.log(props.empData.results);
// keep console logging 
return (
    <div>
        {!props.empData ? (<h4>loading...</h4>):(
            props.empData.results.map(result => (<td>{result.name}</td>))
        )}
    </div>)
    // <div>
    //     {/* function that either makes the map wait until data or returns "loading" */}
    //     {!props.data ? (<h4>loading!</h4>) : (
    //     props.data.results.map(function (response){
    //           <tr>
    //           <td>Picture</td>
    //           <td>Name</td>
    //           <td>{response.email}</td>
    //           <td>Phone</td>
    //           <td>Cell</td>
    //         </tr>
    //     })
    //     )}


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
    // </div>)
};

export default TableRow;
