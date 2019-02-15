import React from 'react';

const CharacterAttributes = (props) => {
	return (
		<div className="character-attributes-container">
            {props.character.name !== undefined ?
                <div>
                    <div className="attribute-container">
                        <p className="attribute-key">Name</p>
                        <p className="attribute-value">{props.character.name}</p>
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Height</p>
                        <p className="attribute-value">{props.character.height}</p>
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Mass</p>
                        <p className="attribute-value">{props.character.mass}</p>
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Hair color</p>
                        <p className="attribute-value">{props.character.hair_color}</p>
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Eye color</p>
                        <p className="attribute-value">{props.character.eye_color}</p>
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Skin color</p>
                        <p className="attribute-value">{props.character.skin_color}</p>
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Birth year</p>
                        <p className="attribute-value">{props.character.birth_year}</p>
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Gender</p>
                        <p className="attribute-value">{props.character.gender}</p>
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Homeworld</p>
                        <p className="attribute-value">{props.character.homeworld}</p>
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Films</p>
                        {props.character.films.map((film, i) => <p className="attribute-value" key={"film-"+i}>{film}</p>)}
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Species</p>
                        {props.character.species.map((param, i) => <p className="attribute-value" key={"species-"+i}>{param}</p>)}
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Vehicles</p>
                        {props.character.vehicles.map((vehicle, i) => <p className="attribute-value" key={"vehicle-"+i}>{vehicle}</p>)}
                    </div>
                    <div className="attribute-container">
                        <p className="attribute-key">Starships</p>
                        {props.character.starships.map((starship, i) => <p className="attribute-value" key={"starship-"+i}>{starship}</p>)}
                    </div>
                </div> : ""
            }
        </div>
	);
}

export default CharacterAttributes;