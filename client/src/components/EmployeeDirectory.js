import React, {Component} from "react";
import SearchBar from "./SearchBar";
import Table from "./Table.js";
import empData from "../utils/empData.json";
import "./style.css";

class EmployeeDirectory extends Component {
    // define use state
    state = {
        name: "",
        employees: [],
        sortAscending:false
    }
    
    handleInputChange = event => {
        console.log("search submitted");
        const name = event.target.name;
        const value = event.target.value;
        let filteredEmp = empData.results.filter(employee => {
            if (employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase())) {
              return employee;
            }
        });
        this.setState({
          [name]: value,
          employees: filteredEmp
        });
        console.log(this.state.employees);
    this.render();
    }

handleSort = () => {
    console.log("handling sort");
    let sortedList=this.state.employees.slice();
    let currentSort=this.state.sortAscending;
    sortedList.sort((a, b) => {
        let fullNameA=a.name.first + a.name.last;
        let fullNameB=b.name.first + b.name.last;
        if (this.state.sortAscending){
            if (fullNameA < fullNameB)
                return -1;
            if (fullNameB < fullNameA)
                return 1;
        }else {
            if (fullNameA < fullNameB)
                return 1;
            if (fullNameB < fullNameA)
                return -1;
        }
        return 0;
    });

    if (this.state.sortAscending){
        currentSort=false;
    } else {
        currentSort=true;
    }

    this.setState({
        employees: sortedList,
        sortAscending: currentSort 
      });
    this.render();
}

    render (){
        if (this.state.employees.length==0){
            this.setState({ 
                employees: empData.results
            });
        }
        return (
            <div>
                <SearchBar data={this}/>
                <Table empData={this.state.employees} handler={this.handleSort}/>
            </div>
        )}
};


export default EmployeeDirectory;