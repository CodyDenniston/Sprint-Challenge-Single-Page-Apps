import React from "react";
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
  
  return (
    <main>
      <Header/>
      <Switch>
        <Route exact path="/">
        <WelcomePage/>
        </Route>
         
        <Route exact path="/CharacterList">
          <CharacterList />
        </Route>
      </Switch>
     
    </main>
  );
}
