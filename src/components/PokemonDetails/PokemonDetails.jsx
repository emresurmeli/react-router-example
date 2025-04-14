import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const PokemonDetails = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  // useEffect to load pokemon on component load
  useEffect(() => {
    const currentPokemon = props.pokemon.filter((pokeman) => {
      return pokeman._id === Number(id);
    });

    setPokemon(currentPokemon[0]);
  }, []);

  const deletePokemon = () => {
    let index;
    props.pokemon.forEach((pokeman, i) => {
      if (pokeman._id === Number(id)) {
        index = i
      }
    });
    props.pokemon.splice(index, 1);
    props.setPokemon(props.pokemon);
    navigate("/pokemon");
  };

  return (
    <>
      <h2>Pokemon Details</h2>
      <dl>
        <dt>Name: {pokemon.name}</dt>
        <dd></dd>
        <dt>Weight: {pokemon.weight}</dt>
        <dd></dd>
        <dt>Height: {pokemon.height}</dt>
        <dd></dd>
      </dl>
      <button onClick={deletePokemon}>Delete Pokemon</button>
    </>
  );
};

export default PokemonDetails;
