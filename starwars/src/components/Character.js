import React from 'react';

const Character = (props) => {
	return (
		<li onClick={props.clickOnName}>
			{props.name}
		</li>
	);
}

export default Character;