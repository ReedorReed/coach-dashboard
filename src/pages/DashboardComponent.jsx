import React from 'react';
import data from '../data/mockData.json';
import DashboardHeader from '../components/dashboardHeader/DashboardHeader';
import DashboardNavigation from '../components/navigation/DashboardNavigation';
import StatsOverview from '../components/statsOverview/StatsOverview';
import CoachInsight from '../components/coachInsight/CoachInsight';

function DashboardComponent() {
	return (
		<div className="dashboard">
			{/* Header */}
			<DashboardHeader name={data.coach.name} />
			{/* Nav */}
			<DashboardNavigation />
			{/* Stats overview section */}
			<StatsOverview stats={data.stats} />
			{/* Coach insight box */}
			<CoachInsight alertMessage={data.clientAlerts[0].message} />
		</div>
	);
}

export default DashboardComponent;
