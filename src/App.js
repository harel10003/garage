import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import ContextApi from './ContextApi';
import Customer from './pages/Customer';
import Home from './pages/Home';
import NewCustomers from './pages/NewCustomers';

function App() {
	const [customers, setCustomers] = useState([
		{
			fullName: 'harel',
			id: '066426982',
			address: 'dolev',
			phone: '0559910003',
			numOfCar: '1111',
			price: 0,
			time: 0,
		},
	]);
	const [faultsCoustomer, setFaultsCoustomer] = useState([[0]]);
	const [faults, setFaults] = useState([
		{ code: 0, Details: 'open card', time: 0, price: 0 },
		{ code: 1, Details: 'Periodic treatment', time: 3, price: 50 },
		{ code: 2, Details: 'accident', time: 10, price: 100 },
		{ code: 3, Details: 'test', time: 2, price: 2000 },
		{ code: 4, Details: 'mottorhead', time: 15, price: 500 },
	]);
	const [id, setId] = useState([]);
	const [phone, setPhone] = useState('');
	const [fullName, setFullName] = useState('');
	const [address, setAddress] = useState('');
	const [numOfCar, setNumOfCar] = useState('');
	const [arrOfFaults, setArrOfFaults] = useState([]);
	const [keyFault, setKeyFault] = useState('');
	const [hours, setHours] = useState('');
	const [price, setPrice] = useState('');
	const [errName, setErrName] = useState(true);
	const [errId, setErrId] = useState(true);
	const [errPhone, setErrPhone] = useState(true);
	const [errNumOfCar, setErrNumOfCar] = useState(true);
	const [errNewC, setErrNewC] = useState('');
	const [errAddress, setErrAddress] = useState('');
	const [code, setCode] = useState('');
	const [showButton, setShowButton] = useState(false);

	const addCustomer = () => {
		let newCustomer = {
			fullName,
			id,
			address,
			phone,
			numOfCar,
			price,
			hours,
		};
		setCustomers([newCustomer, ...customers]);
		setFaultsCoustomer([[0], ...faultsCoustomer]);
	};
	const validName = () => {
		if (fullName.length === 0) return '';
		for (let i = 0; i < fullName.length; i++)
			if (
				(fullName[i].toLowerCase() < 'a' ||
					fullName[i].toLowerCase() > 'z') &&
				fullName[i].toLowerCase() !== ' '
			) {
				setErrName(false);
				return 'not valid';
			} else {
				setErrName(true);
			}
	};
	const validPhone = () => {
		if (phone.length === 0) return '';
		for (let i = 0; i < phone.length; i++) {
			if (phone[i] < '0' || phone[i] > '9' || phone.length < 7) {
				setErrPhone(false);
				return 'not valid';
			}
		}
		return setErrPhone(true);
	};
	const validAddress = () => {
		if (address.length === 0) {
			setErrAddress(false);
			return 'not valid';
		} else setErrAddress(true);
	};
	const validNumOfCar = () => {
		for (let i = 0; i < numOfCar.length; i++)
			if ((numOfCar[i] < '0' || numOfCar[i] > '9') && phone.length > 0) {
				setErrNumOfCar(false);
				return 'not valid';
			} else {
				setErrNumOfCar(true);
			}
	};
	const validId = () => {
		if (id.length !== 9 && id.length !== 0) {
			setErrId(false);
			return 'not valid';
		} else {
			setErrId(true);
		}
	};
	const validateCostumer = () => {
		if (errName && errId && errPhone && errNumOfCar && errAddress) {
			addCustomer();
			setErrNewC('goood');
		} else return setErrNewC('check again');
	};
	const addfaults = (code, index, time, price) => {
		let temp = faultsCoustomer;
		let tempCustomer = customers;
		temp[index].push(code);
		tempCustomer[index].price += +price;
		tempCustomer[index].time += +time;
		setFaultsCoustomer([...temp]);
		setCustomers([...tempCustomer]);
		setCode(' ');
		setShowButton(!showButton);
	};

	return (
		<div className="App">
			<ContextApi.Provider
				value={{
					customers,
					setCustomers,
					faults,
					setFaults,
					id,
					setId,
					phone,
					setPhone,
					fullName,
					setFullName,
					address,
					setAddress,
					numOfCar,
					setNumOfCar,
					arrOfFaults,
					setArrOfFaults,
					keyFault,
					setKeyFault,
					hours,
					setHours,
					price,
					setPrice,
					addCustomer,
					validName,
					validId,
					validPhone,
					validNumOfCar,
					validateCostumer,
					errNewC,
					validAddress,
					faultsCoustomer,
					addfaults,
					code,
					setCode,
					showButton,
					setShowButton,
				}}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<NewCustomers />} />
					<Route path="/customer/:index" element={<Customer />} />
					{/* <Route
						path="/customer-car/:numOfCar"
						element={<Customer />}
					/> */}
				</Routes>
			</ContextApi.Provider>
		</div>
	);
}
export default App;
