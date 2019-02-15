import React from 'react';

const PageButtons = (props) => {
	return (
		<div className="page-buttons">
            <button className="previous" onClick={props.buttonPrev} disabled={props.prevDisabled}>
                Prev
            </button>
            <button className="next" onClick={props.buttonNext} disabled={props.nextDisabled}>
                Next
            </button>
        </div>
	);
}

export default PageButtons;