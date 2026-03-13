import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ClientsPage = () => {
	const { t } = useLanguage();
	const testimonials = t('clients.testimonials');

	return (
		<div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold mb-4">
						<span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
							{t('clients.title')}
						</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						{t('clients.subtitle')}
					</p>
				</div>

				{/* Stats */}
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{[
						{ number: '1200+', label: t('clients.stats.clients'), icon: <ThumbsUp className="w-8 h-8" /> },
						{ number: '2100+', label: t('clients.stats.deals'), icon: <Star className="w-8 h-8" /> },
						{ number: '7+', label: t('clients.stats.years'), icon: <Quote className="w-8 h-8" /> }
					].map((stat, i) => (
						<div key={i} className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all">
							<div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
								{stat.icon}
							</div>
							<div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
							<div className="text-gray-600">{stat.label}</div>
						</div>
					))}
				</div>

				{/* Description */}
				<div className="bg-emerald-50 rounded-3xl p-8 mb-16">
					<p className="text-lg text-gray-700 leading-relaxed">
						{t('clients.description')}
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{testimonials && testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all relative"
						>
							<Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-200" />

							<div className="flex items-center gap-4 mb-6">
								<div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
									{testimonial.name.charAt(0)}
								</div>
								<div>
									<h3 className="font-bold text-lg">{testimonial.name}</h3>
									<p className="text-emerald-600 text-sm">{testimonial.position}</p>
								</div>
							</div>

							<p className="text-gray-600 leading-relaxed italic">
								"{testimonial.text}"
							</p>

							<div className="flex items-center gap-1 mt-4">
								{[1, 2, 3, 4, 5].map((star) => (
									<Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
								))}
							</div>
						</div>
					))}
				</div>

				{/* Partners */}
				<div className="mt-20">
					<h2 className="text-3xl font-bold text-center mb-12">Наши партнеры</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[1, 2, 3, 4].map((i) => (
							<div key={i} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-all">
								<div className="w-24 h-12 bg-gray-200 rounded"></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientsPage;