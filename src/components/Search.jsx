import React, { useState, useEffect } from "react";

export const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search"
          onKeyDown={handleKey}
          onChange={handleChange}
          value={value}
        />
        <button
          className="btn"
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};
