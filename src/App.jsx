import { useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import "./App.css";

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Pokemon!</h1>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetails pokemon={pokemon} setPokemon={setPokemon} />}
        />
        <Route
          path="/pokemon/new"
          element={<PokemonForm pokemon={pokemon} setPokemon={setPokemon} />}
        />
      </Routes>
    </>
  );
};

export default App;
