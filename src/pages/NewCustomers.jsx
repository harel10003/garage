import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextApi from '../ContextApi';

function NewCustomers() {
	const nav = useNavigate();
	const {
		setFullName,
		setId,
		setAddress,
		setPhone,
		setNumOfCar,
		validName,
		validId,
		validPhone,
		validNumOfCar,
		validateCostumer,
		errNewC,
		validAddress,
	} = useContext(ContextApi);
	return (
		<div>
			<h1>לקוח חדש</h1>
			<input
				type="text"
				onChange={(e) => {
					setFullName(e.target.value);
				}}
				placeholder="שם מלא"
			/>
			<p>{validName()}</p>
			<input
				type="number"
				onChange={(e) => {
					setId(e.target.value);
				}}
				placeholder="תעודת זהות"
			/>
			<p>{validId()}</p>
			<input
				type="text"
				onChange={(e) => {
					setAddress(e.target.value);
				}}
				placeholder="כתובת"
			/>
			<p>{validAddress()}</p>
			<input
				type="number"
				onChange={(e) => {
					setPhone(e.target.value);
				}}
				placeholder="מספר טלפון"
			/>

			<p>{validPhone()}</p>
			<input
				type="number"
				onChange={(e) => {
					setNumOfCar(e.target.value);
				}}
				placeholder="מספר רכב"
			/>
			<p>{validNumOfCar()}</p>
			<button
				onClick={() => {
					validateCostumer();
					nav('/');
				}}
			>
				הרשם
			</button>
			<p>{errNewC}</p>
		</div>
	);
}

export default NewCustomers;
