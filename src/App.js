import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard"
import CharacterList from "./components/CharacterList"
import LocationCard from "./components/LocationCard"
import LocationsList from "./components/LocationsList"
import SearchForm from "./components/SearchForm"
import WelcomePage from "./components/WelcomePage"
import {
  Link,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  const [charList, setCharList] = useState([]);
  
  return (
    <main>
      <Header/>
      <Switch>
        <Route exact path="/">
        <WelcomePage/>
        </Route>
         
        <Route exact path='/CharacterList' render={ ( props ) =>
          <CharacterList  { ...props } setCharList={setCharList} charList={charList} /> }/>
      

        <Route exact path="/SearchForm"render={ ( props ) =>
        <SearchForm { ...props } charList={charList} /> } />
      </Switch>
     
    </main>
  );
}
