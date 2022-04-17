import React, { useContext } from 'react';
import ContextApi from '../ContextApi';

function Details({ index, setShow, show }) {
	const { customers } = useContext(ContextApi);
	return (
		<div>
			<h2>Detalis</h2>
			<h6>name:{customers[index].fullName}</h6>
			<h6>phone:{customers[index].phone}</h6>
			<h6>addrees:{customers[index].address}</h6>
			<h6>number car:{customers[index].numOfCar}</h6>
			<h6>id:{customers[index].id}</h6>
			<button className="Details-btn-x" onClick={() => setShow(!show)}>
				x
			</button>
		</div>
	);
}

export default Details;
