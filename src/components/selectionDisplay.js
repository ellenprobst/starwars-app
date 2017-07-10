import React from 'react';

const Selection = (props) => {
	return (
		<div>
			<label htmlFor={props.value}>{props.value}</label>
			<input type="radio" value={props.value} id={props.value} name="category" checked={props.checked === props.value }onChange={props.change}/>
		</div>
	)
}

export default Selection;

