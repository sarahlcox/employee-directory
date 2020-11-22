import React, {Component} from "react";
// import API from "../utils/API.js";
import SearchBar from "./SearchBar";
import Table from "./Table.js";
import empData from "../utils/empData.json";


// change to class component
class EmployeeDirectory extends Component {
    // define use state
    state = {
        name: "",
        user: []
    }
    componentDidMount () {
        console.log("hi")
        // empData.searchName().then(response => {
        //     console.log(response);
        //   this.setState({ user : response.data.results });
        //     console.log(this.state.user);
        // //   set user state
        //   //add in response here that renders to page name, email, phone, cell, thumbnail
        // })
    }

    handleInputChange = event => {
        console.log("search submitted");
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };

    render (){
        console.log("hi2");
        console.log(empData);
        return (
            <div>
                <SearchBar data={this}/>
                <Table empData={empData}/>
            </div>
        )}
};




export default EmployeeDirectory;