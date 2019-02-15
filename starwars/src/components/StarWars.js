import React from 'react';
import './StarWars.css';
import CharactersList from './CharactersList';

const StarWars = (props) => {
	return (
		<div>
			<CharactersList characters={props.characters} clickOnName={props.clickOnName} />
		</div>
	);
}

export default StarWars;
