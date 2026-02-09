import React from 'react';
import { ImPhone } from 'react-icons/im';
import './SalesCalls.sass';

function SalesCalls({ calls }) {
	return (
		<section className="sales-calls">
			<h2 className="sales-calls__title">
				Sales calls <ImPhone className="sales-calls__title-phone" />
			</h2>
			<div className="sales-calls__list">
				{calls.map((call) => (
					<div key={call.id} className="sales-calls__list-item">
						<span className="sales-calls__list-name">{call.clientName}</span>
						<span className="sales-calls__list-time">{call.time}</span>
						<span className="sales-calls__list-status">{call.status}</span>
						<span className="sales-calls__list-type">{call.type}</span>
					</div>
				))}
			</div>
		</section>
	);
}

export default SalesCalls;
