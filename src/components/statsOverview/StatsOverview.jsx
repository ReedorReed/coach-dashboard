import React from 'react';
import { ImAccessibility, ImArrowUpRight2, ImCoinDollar } from 'react-icons/im';
import './StatsOverview.sass';

function StatsOverview({ stats }) {
	return (
		<section className="stats-overview">
			{stats.map((stat) => (
				<div
					key={stat.id}
					className="stats-overview__card stats-overview__card--highlight">
					<span className="stats-overview__card-label">
						{stat.label}
						{stat.label === 'Active Clients' && <ImAccessibility />}
						{stat.label === 'New Leads (Feb)' && <ImArrowUpRight2 />}
						{stat.label === 'Revenue (Feb)' && <ImCoinDollar />}
					</span>
					<div className="stats-overview__card-value">{stat.value}</div>
					<span className="stats-overview__card-change">{stat.change}</span>
				</div>
			))}
		</section>
	);
}

export default StatsOverview;
