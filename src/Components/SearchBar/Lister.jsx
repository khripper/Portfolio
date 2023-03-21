// import { BiSearch } from "react-icons/bi";
// import { useState } from "react";
// import { Users } from "../../users";
// import axios from "axios";
// import "./SearchBar.Style.scss";

// function SearchBar() {
//   const [query, setQuery] = useState("");
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
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <ul className="list">
//             {Users.filter((user) =>
//               user.first_name.toLowerCase().includes(query)
//             ).map((user) => (
//               <li key={user.id} className="listItem">
//                 {user.first_name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </form>
//   );
// }
// export default SearchBar;
