import React from 'react';

function DashboardHeader({ name }) {
	return (
		<header className="dashboard__header">
			<h1 className="dashboard__header-title">Welcome {name}!</h1>
			<p className="dashboard__header-subtitle">Here's your business today.</p>
		</header>
	);
}

export default DashboardHeader;
