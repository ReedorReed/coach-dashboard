import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { LuTriangleAlert } from 'react-icons/lu';
import './CoachInsight.sass';

function CoachInsight({ alertMessage }) {
	return (
		<section className="coach-insight">
			<h2 className="coach-insight__title">
				Coach Insight <FaRegLightbulb className="coach-insight__title-bulb" />
			</h2>
			<p className="coach-insight__text">
				<LuTriangleAlert className="coach-insight__text-alert" />
				{alertMessage}
			</p>
		</section>
	);
}

export default CoachInsight;
