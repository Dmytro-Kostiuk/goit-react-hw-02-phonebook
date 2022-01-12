import React from "react";
import "./filter.scss";

const Filter = ({ filter, onChangeFilter }) => (
  <label className="label">
    Find contact by name: <br />
    <input
      className="searchLabel"
      type="text"
      value={filter}
      onChange={onChangeFilter}
    />
  </label>
);

export default Filter;
