import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions 
function SearchBar(props) {
  return (
    <div className="header">
      <form className="search">
        <div className="form-group">
          <label htmlFor="employee-directory"><h1>User Directory</h1></label>
          <input
            value={props.data.state.name}
            onChange={props.data.handleInputChange}
            name="name"
            list="term"
            type="text"
            className="form-control"
            placeholder="Start typing a name to filter..."
            id="term"
          />
          <br />
          <p>*Click name to sort users by name</p>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;