import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [Character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(response => {
        console.log(response.data.results)
        setCharacter(response.data.results)
        props.setCharList( response.data.results );
    })
    .catch(error => {
        console.log("ERROR", error);
    })
}, [])

  return (
   
 
    <section className="character-list">
      {Character.map((c, index) => {
           return <CharacterCard key={index} name={c.name} status={c.status} species={c.species} img={c.image} />
        
        })}
    </section>
  );
}
