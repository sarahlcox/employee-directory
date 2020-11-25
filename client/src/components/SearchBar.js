import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions 
function SearchBar(props) {
  return (
    <div className="header">
      <form className="search">
        <div className="form-group">
          <label htmlFor="employee-directory">Search: </label>
          <input
            value={props.data.state.name}
            onChange={props.data.handleInputChange}
            name="name"
            list="term"
            type="text"
            className="form-control"
            placeholder="Start typing to filter..."
            id="term"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;