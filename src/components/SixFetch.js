//import React, { useEffect, useState } from "react";

// const SixFetch = () => {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState([]);
//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//       //fetch('https://pokeapi.co/api/v2/pokemon/<id/name>')
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   }, []);
//   const pokemonList = data.results || [];
//   const searchFilter = pokemonList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
//   return (
//     <>
//       <h1>Pokemon List</h1>
//       <input
//         type="text"
//         value={search}
//         placeholder="Searching item..."
//         onChange={(e) => setSearch(e.target.value)}
//      />
//       <ul>
//         {searchFilter.map((pokemon, index) => (
//           <li key={index}>
//             {pokemon.name}
//           </li>
//         ))}
//       </ul>

//       {/* <ul>
//         {pokemonList.map((pokemon, index) => (
//           <li key={index}>{pokemon.name} - {pokemon.url}</li>
//         ))}
//       </ul> */}
//       {/* part-2
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>URL</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pokemonList.map((pokemon, index) => (
//             <tr key={index}>
//               <td>{pokemon.name}</td>
//               <td>{pokemon.url}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
//     </>
//   );
// };

//export default SixFetch;
import "./App1.css";
import React, { useEffect, useState } from "react";

const SixFetch = () => {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // Accessing data and extracting information
  const pokemonList = data.results || [];

  // Filtering Pokemon based on search term
  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-center">
      <h1>Pokemon List</h1>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br />
      <ul className="add">
        {filteredPokemon.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name}--{pokemon.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SixFetch;
