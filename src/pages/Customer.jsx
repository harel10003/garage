import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Details from '../components/Details';
import ContextApi from '../ContextApi';
import Table from '../components/Table';
import ButtonFaults from '../components/ButtonFaults';

function Customer() {
	const { index } = useParams();
	const nav = useNavigate();
	const [show, setShow] = useState(true);
	const [showTable, setShowTable] = useState(true);

	const { code, setCode, faults, showButton, setShowButton } =
		useContext(ContextApi);
	return (
		<div>
			<div className="Customer-buttons">
				<button
					className="Customer-btn"
					onClick={() => setShow(!show)}
					// style={{ display: !show ? 'none' : 'block' }}
				>
					פרטי לקוח
				</button>
				<button
					className="Customer-btn"
					onClick={() => setShowTable(!showTable)}
					// style={{ display: showTable ? 'block' : 'none' }}
				>
					הסטוריה
				</button>
			</div>
			<div>
				<div style={{ display: show ? 'none' : 'block' }}>
					<Details index={+index} show={show} setShow={setShow} />
				</div>
				<div style={{ display: showTable ? 'none' : 'block' }}>
					<Table
						idx={+index}
						setShowTable={setShowTable}
						showTable={showTable}
					/>
				</div>
			</div>
			<div className="Customer-input">
				<button
					className="Customer-btn-input"
					onClick={() => setShowButton(!showButton)}
					style={{ display: showButton ? 'none' : 'inline' }}
				>
					הכנס
				</button>
				<input
					type="number"
					value={code}
					onChange={(e) => {
						if (+e.target.value >= faults.length) {
							alert(e.target.value + ` is not valid code`);
							setCode(' ');
						} else {
							setCode(e.target.value);
						}
					}}
					placeholder="enter code"
				/>{' '}
			</div>
			<div style={{ display: showButton ? 'block' : 'none' }}>
				<ButtonFaults code={code} index={index} />
			</div>
			<button className="Customer-btn-back" onClick={() => nav('/')}>
				{' '}
				חזור לדף הראשי
			</button>
		</div>
	);
}

export default Customer;
