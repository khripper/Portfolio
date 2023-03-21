// import { useEffect, useState } from "react";
// import { BiSearch } from "react-icons/bi";
// import { Users } from "../../users";
// import axios from "axios";
// import "./SearchBar.Style.scss";

// function SearchBar() {
//   const [searchResult, setSearchResult] = useState([]);
//   const [key, setKey] = useState("");
//   useEffect(() => {
//     const search = async () => {
//       try {
//         if (!key.trim()) {
//           setSearchResult([]);
//           return;
//         }
//         const res = await axios.get("http://localhost:3001/", {
//           params: { key: key, limit: 5 },
//         });
//         console.log(res);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     search();
//   }, [key]);
//   return (
//     <form>
//       <div className="search-wrapper">
//         <button className="search-btn">
//           <BiSearch />
//         </button>
//         <div className="form-group">
//           <input
//             className="form-control"
//             type="text"
//             placeholder="Searching..."
//           />
//           <ul></ul>
//         </div>
//       </div>
//     </form>
//   );
// }
// export default SearchBar;
