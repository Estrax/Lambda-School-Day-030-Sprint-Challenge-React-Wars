import React from 'react';
import Character from './Character';

const CharactersList = (props) => {
	return (
		<ul>
			{props.characters.map(character => <Character key={character.created} character={character} />)}
		</ul>
	);
}

export default CharactersList;