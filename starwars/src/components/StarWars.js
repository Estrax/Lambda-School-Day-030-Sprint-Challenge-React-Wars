import React from 'react';
import './StarWars.css';
import CharactersList from './CharactersList';

const StarWars = (props) => {
	return (
		<div>
			<div className="title-container">
				<h1 className="characters-title">Characters</h1>
			</div>
			<CharactersList characters={props.characters} clickOnName={props.clickOnName} />
		</div>
	);
}

export default StarWars;
