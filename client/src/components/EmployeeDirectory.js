import React, {useEffect, useState} from "react";
import API from "../utils/API.js";
import Table from "./Table.js";
import empData from "../utils/empData.json"
// change to class component 
const EmployeeDirectory = () => {
    // define use state
    const [userState, setUserState] = useState(empData);
    // useEffect(() => {
    //     API.searchName().then(user => {
    //       setUserState(user);
    //         console.log(user);
    //     //   set user state
    //       //add in reposnse here that renders to page name, email, phone, cell, thumbnail
    //     })
    // }, [userState]);
return (
    <div>
        <Table data={userState}/>
        {/* pass down state as a prop */}
    </div>
)
};

export default EmployeeDirectory;
