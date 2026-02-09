import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import LeadsSalesInsight from './pages/leadsSalesInsight.jsx';
import './styles/main.sass';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter basename="/coach-dashboard">
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/leads" element={<LeadsSalesInsight />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
