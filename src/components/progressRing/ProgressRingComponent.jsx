import React from 'react';
import './ProgressRingComponent.sass';

function ProgressRingComponent({ percentage, label }) {
	const radius = 36;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<div className="progress-ring">
			<svg className="progress-ring__svg" width="100" height="100">
				<circle className="progress-ring__circle" cx="50" cy="50" r={radius} />
				<circle
					className="progress-ring__circle progress-ring__circle--fill"
					cx="50"
					cy="50"
					r={radius}
					style={{
						strokeDasharray: circumference,
						strokeDashoffset: offset
					}}
				/>
			</svg>
			<span className="progress-ring__percentage">{percentage}%</span>
			{label && <span className="progress-ring__label">{label}</span>}
		</div>
	);
}

export default ProgressRingComponent;
