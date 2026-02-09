import React from 'react';
import { ImArrowUpRight2 } from 'react-icons/im';
import './RecentLeads.sass';

function RecentLeads({ leads }) {
	return (
		<section className="recent-leads">
			<h2 className="recent-leads__title">
				Recent Leads <ImArrowUpRight2 className="recent-leads__title-arrow" />
			</h2>
			<div className="recent-leads__list">
				{leads.map((lead) => (
					<div key={lead.name} className="recent-leads__list-item">
						<span className="recent-leads__list-name">{lead.name}</span>
						<span className="recent-leads__list-source">{lead.source}</span>
						<span className="recent-leads__list-date">{lead.date}</span>
					</div>
				))}
			</div>
		</section>
	);
}

export default RecentLeads;
