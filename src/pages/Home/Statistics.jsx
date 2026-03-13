import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Statistics = () => {
	const { t } = useLanguage();

	const stats = [
		{
			number: t('home.statistics.clients.number'),
			label: t('home.statistics.clients.label'),
			features: t('home.statistics.clients.features')
		},
		{
			number: t('home.statistics.cars.number'),
			label: t('home.statistics.cars.label'),
			features: t('home.statistics.cars.features')
		},
		{
			number: t('home.statistics.tradein.number'),
			label: t('home.statistics.tradein.label'),
			features: t('home.statistics.tradein.features')
		}
	];

	return (
		<section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800 dark:from-emerald-950 dark:to-emerald-900 text-white transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-16">{t('home.statistics.title')}</h2>

				<div className="grid md:grid-cols-3 gap-8">
					{stats.map((stat, i) => (
						<div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all transform hover:-translate-y-2 duration-300">
							<div className="text-5xl font-bold text-emerald-300 mb-2">{stat.number}</div>
							<div className="text-xl mb-6 font-medium">{stat.label}</div>
							<ul className="space-y-2">
								{stat.features && stat.features.map((feature, j) => (
									<li key={j} className="flex items-center gap-2 text-sm text-emerald-100">
										<div className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></div>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Statistics;