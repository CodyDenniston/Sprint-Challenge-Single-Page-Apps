import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm( props ) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  console.log(props.Character)
 
  useEffect((props) => {
    const searchResults = props.Character.filter( character =>
      character.name.includes( search )
    );
    setResults( searchResults );
  }, [search]);

  const handleChange = e => {
    setSearch( e.target.value );
  };

  return (
    <section className="search-form">
     Search by name here
    <form>
      <label>
        Name:
      <input
      id="name"
      type="text"
      name="textfield"
      placeholder="Search"
      value={ search }
      onChange={ handleChange }
      />
      </label>
    </form>
     
    <div className="character-list">
      {results.map((c, index) => (
        <CharacterCard key={index} c={c} />
      ))}
      </div>

    </section>
  );
}
