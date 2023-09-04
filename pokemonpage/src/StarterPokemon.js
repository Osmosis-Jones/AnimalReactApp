function StarterPokemon({name, image, type, description}) {
  return (
    <div>
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pokemon"></img>
                </figure>
            </div>
                <div className="media-content">
                    <h1 className="title is-4 pl-3 pr-3 pt-4 pb-4">{name}</h1>
                    <p className="subtitle is-6 pl-3 pr-3 pt-4 pb-4">Type: {type}</p>
                    <br></br>
                    <p className="subtitle is-6 pl-3 pr-3 pt-4 pb-4" >Description: {description}</p>
                </div>
        </div>
    </div>
  );
}

export default StarterPokemon;