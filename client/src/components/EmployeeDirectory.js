import React, {Component, useEffect, useState} from "react";
import API from "../utils/API.js";
import SearchBar from "./SearchBar";
import Table from "./Table.js";

// change to class component
class EmployeeDirectory extends Component {
    // define use state
    state = {
        user: []
    }
    componentDidMount () {
        console.log("hi")
        API.searchName().then(response => {
            console.log(response);
          this.setState({ user : response.data.results });
            console.log(this.state.user);
        //   set user state
          //add in reposnse here that renders to page name, email, phone, cell, thumbnail
        })
    }

render (){

    
return (
    <div>
        <Table data={this.state.user}/>
        {/* map //pass down into table row.. props drilling taking too </div> */}
        <TableRow />
        {/* pass down state as a prop */}
    </div>
)}
};




export default EmployeeDirectory;