import React, { useContext } from 'react';
import ContextApi from '../ContextApi';

function Table({
	idx,
	setShowTable,
	showTable,
	houers,
	setHours,
	price,
	setPrice,
}) {
	const { customers, faultsCoustomer, faults } = useContext(ContextApi);
	return (
		<div className="table-score">
			<h3>טבלת טיפולים</h3>
			<table>
				<thead>
					<tr>
						<th>קוד</th>
						<th>פרטים</th>
						<th>זמן עבודה</th>
						<th>מחיר</th>
					</tr>
				</thead>
				<tbody>
					{faultsCoustomer[+idx].map((fault, index) => (
						<tr key={index}>
							<td>{faults[fault].code}</td>
							<td>{faults[fault].Details}</td>
							<td>{faults[fault].time}</td>
							<td>{faults[fault].price}</td>
						</tr>
					))}
				</tbody>
			</table>
			<p>
				total time: {''}
				{Math.floor(+customers[+idx].time / 9)} days and {''}
				{+customers[+idx].time % 9} hours
				<br />
				totl price:{+customers[+idx].price}$
			</p>
			<button
				className="Table-btn-x"
				onClick={() => setShowTable(!showTable)}
			>
				x
			</button>
		</div>
	);
}
export default Table;
