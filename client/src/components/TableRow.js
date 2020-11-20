import React from "react";
var data;

// need to set state for employees ? 
const TableRow = (props) => {
console.log(props);
data = props.empData[0]
console.log(props.empData[0]);
// keep console logging 
const Loading = (props) => { 
    console.log(props);
if (props.empData[0] === undefined) {
    return <h4>loading...</h4>
} else {
    console.log(props)
    return props[0].map(result => (<td>{result.cell}</td>))
}
}
return (
    <div>   
        {/* {props.empData[0]} */}
        {/* {props.empData[0].cell === undefined ? (<h4>loading...</h4>):(
        props.empData[0].map(result => (<td>{result.cell}</td>))
        )}  */}
        <Loading data = {props.empData[0]} />
        
            {/* props.empData.results.map(result => (<td>{result.name}</td>)) */}
        
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