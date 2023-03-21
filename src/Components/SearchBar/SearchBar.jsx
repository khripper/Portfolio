import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import "./SearchBar.Style.scss";
var data = require("../../MOCK_DATA.json");

export default function SearchBar() {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    // our api to fetch the search result
    setValue(searchTerm);
    console.log("searchh", searchTerm);
  };
  return (
    <div className="search">
      <div className="search-container">
        <div className="search-inner">
          <input
            className="search-control"
            type="text"
            placeholder="Searching..."
            value={value}
            onChange={onChange}
          />
          <button className="search-btn" onClick={() => onSearch(value)}>
            <BiSearch fontSize={"15px"} />
          </button>

        </div>
      </div>
      <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value.toLocaleLowerCase();
                const fullName = item.full_name.toLowerCase();
                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 7)
              .map((item) => (
                <div
                  className="dropdown-row"
                  onClick={() => onSearch(item.full_name)}
                  key={item.full_name}
                >
                  {item.full_name}
                </div>
              ))}
          </div>
    </div>
  );
}
