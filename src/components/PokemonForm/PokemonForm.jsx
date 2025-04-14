import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  name: "",
  weight: 0,
  height: 0,
};

const PokemonForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Add an _id to the pokemon
    const id = props.pokemon[props.pokemon.length - 1]._id + 1;
    // Take formData and add it to the pokemon array using props.setPokemon
    props.setPokemon([...props.pokemon, { ...formData, _id: id }]);
    // Reset the form once formData has been added to the pokemon state array
    setFormData(initialState);
    // redirect the user to PokemonList
    navigate("/pokemon");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;
