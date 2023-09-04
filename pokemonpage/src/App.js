import StarterPokemon from "./StarterPokemon";
import Totodile from "./pokePics/Totodile.png";
import Cyndaquil from "./pokePics/Cyndaquil.png";
import Chicorita from "./pokePics/Chicorita.png";
import "bulma/css/bulma.css";

function App() {
  const collection = [
    {
      name: "Chicorita",
      image: Chicorita,
      type: "Grass",
      description:
        "Chikorita is a Grass-type Pokémon and is known for its cute and leafy appearance. It has a small, pale green body with a large, dark green leaf on its head that resembles a hat. Chikorita is often seen as gentle and calm, using its leaf to release soothing aromas that can have a calming effect on those around it. As it evolves, Chikorita becomes Bayleef and then Meganium, gaining more elaborate floral patterns and a more regal presence.",
    },
    {
      name: "Totodile",
      image: Totodile,
      type: "water",
      description:
        "Cyndaquil is a Fire-type Pokémon and is known for its cute and leafy appearance. It has a small, pale green body with a large, dark green leaf on its head that resembles a hat. Chikorita is often seen as gentle and calm, using its leaf to release soothing aromas that can have a calming effect on those around it. As it evolves, Chikorita becomes Bayleef and then Meganium, gaining more elaborate floral patterns and a more regal presence. ",
    },
    {
      name: "Cyndaquil",
      image: Cyndaquil,
      type: "Fire",
      description:
        "Totodile is a Water-type Pokémon and is known for its cute and leafy appearance. It has a small, pale green body with a large, dark green leaf on its head that resembles a hat. Chikorita is often seen as gentle and calm, using its leaf to release soothing aromas that can have a calming effect on those around it. As it evolves, Chikorita becomes Bayleef and then Meganium, gaining more elaborate floral patterns and a more regal presence. ",
    },
  ];
  return (
    <div className="App">
      <h1></h1>
      <section class="hero is-danger">
        <div class="hero-body">
          <h1 class="title">Gen 2 Starter Pokemon</h1>
          <p class="subtitle">Choose your starter Pokemon!</p>
        </div>
      </section>

      <hr></hr>
      <div className="columns">
        {collection.map((item) => {
          console.log(item.name);
          return (
            <StarterPokemon
              name={item.name}
              image={item.image}
              type={item.type}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
