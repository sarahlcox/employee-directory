import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions 
function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee-directory">Search:</label>
        <input
          value={props.data.state.name}
          onChange={props.handleInputChange}
          name="name"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in a search name to begin"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchBar;