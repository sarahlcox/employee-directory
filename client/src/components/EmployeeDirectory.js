import React, {useEffect, useState} from "react";
import API from "../utils/API.js";
import Table from "./Table.js";
import TableRow from "./TableRow.js";

const EmployeeDirectory = () => {
    // define use state
    useEffect(() => {
        API.searchName().then(user => {
          console.log(user)
        //   set user state
          //add in reposnse here that renders to page name, email, phone, cell, thumbnail
        })
    }, []);
return (
    <div>
        <Table />
        {/* pass down state as a prop */}
        <TableRow /> 
        Hi
    </div>
)
};

export default EmployeeDirectory;
