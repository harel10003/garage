import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextApi from '../ContextApi';

function Home() {
	const nav = useNavigate();
	const { customers } = useContext(ContextApi);
	const [option, setOption] = useState(true);
	const [value, setValue] = useState(false);

	return (
		<div>
			<h1>SV-Garage</h1>
			<button
				onClick={() => {
					nav('/signup');
				}}
			>
				לקוח חדש
			</button>
			<div>
				<select
					onClick={(e) => {
						nav(`/customer/${e.target.value}`);
					}}
				>
					{customers.map(({ id, numOfCar }, index) => (
						<option value={index} key={index}>
							{option ? id : numOfCar}
						</option>
					))}
				</select>
			</div>
			<div>
				<input
					type="radio"
					name="numOfCar"
					value="numOfCar"
					onChange={(e) => {
						setValue(!value);
						setOption(!option);
					}}
					//  required
					checked={!value}
				/>
				מספר רכב
				<input
					type="radio"
					name="id"
					value="id"
					onChange={(e) => {
						setOption(!option);
						setValue(!value);
					}}
					//  required
					checked={value}
				/>
				תז
			</div>
		</div>
	);
}

export default Home;
