import React from 'react';
import DashboardNavigation from '../components/navigation/DashboardNavigation';
import DashboardHeader from '../components/dashboardHeader/DashboardHeader';
import '../styles/_layout.sass';
import ProgressRingComponent from '../components/progressRing/ProgressRingComponent';
import data from '../data/mockData.json';
import {
	ImAccessibility,
	ImArrowUpRight2,
	ImCoinDollar,
	ImPhone
} from 'react-icons/im';
import SalesCalls from '../components/salesCalls/SalesCalls';
import RecentLeads from '../components/recentLeads/RecentLeads';

function leadsSalesInsight() {
	return (
		<div className="dashboard">
			<DashboardHeader name={data.coach.name} />
			<DashboardNavigation />

			<section className="dashboard__lead-sales">
				<h2 className="dashboard__lead-sales-title">Lead / Sales Insights</h2>
				<div className="dashboard__lead-sales-content">
					{/* Progress ring */}
					<ProgressRingComponent
						percentage={data.salesInsight.conversionRate}
						label="Conversion Rate"
					/>

					<div className="dashboard__lead-sales-content-leads">
						{/* Upcoming calls box */}
						<SalesCalls calls={data.salesInsight.upcomingCalls} />

						{/* Recent leads */}
						<RecentLeads leads={data.recentLeads} />
					</div>
				</div>
			</section>
		</div>
	);
}

export default leadsSalesInsight;
