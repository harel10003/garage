import React, { useContext, useState } from 'react';
import ContextApi from '../ContextApi';

function ButtonFaults({ code, index }) {
	const { addfaults, faults, setCode } = useContext(ContextApi);
	const [showD, setShowD] = useState(false);

	return (
		<div>
			<button
				className="ButtonFaults-btn"
				onClick={() => {
					// if (+code > faults.length) alert('not have this code');
					// else
					setShowD(!showD);
				}}
			>
				הצג פרטים
			</button>
			<div style={{ display: !showD ? 'none' : 'block' }}>
				<div>code: {faults[+code].code}</div>
				<div>Details: {faults[+code].Details}</div>
				<div>time:{faults[+code].time} hours</div>
				<div>price:{faults[+code].price}$</div>
			</div>
			<button
				className="ButtonFaults-btn"
				onClick={() => {
					addfaults(
						code,
						+index,
						+faults[+code].time,
						+faults[+code].price
					);
				}}
			>
				הכנס תקלה
			</button>
		</div>
	);
}

export default ButtonFaults;
