import React from 'react';
import { Phone, TrendingUp, Shield, Car, Search } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HowWeWork = () => {
	const { t } = useLanguage();
	const steps = t('home.howWeWork.steps');

	const icons = [Phone, TrendingUp, Shield, Car];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-4">
					{t('home.howWeWork.title')}{' '}
					<span className="text-emerald-600">{t('home.howWeWork.subtitle')}</span>
				</h2>

				<div className="grid md:grid-cols-4 gap-8 mt-16">
					{steps && steps.map((step, i) => {
						const Icon = icons[i];
						return (
							<div key={i} className="relative group">
								<div className="absolute inset-0 bg-emerald-100 rounded-2xl transform group-hover:scale-105 transition-transform opacity-0 group-hover:opacity-100"></div>
								<div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
									<div className="bg-emerald-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
										<Icon className="w-8 h-8" />
									</div>
									<h3 className="text-xl font-bold mb-2">{step.title}</h3>
									<p className="text-gray-600 text-sm">{step.desc}</p>
									<div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
										{i + 1}
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="text-center mt-12">
					<button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium inline-flex items-center gap-2 group">
						{t('home.howWeWork.consultation')}
						<Search className="w-4 h-4 group-hover:rotate-12 transition-transform" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default HowWeWork;