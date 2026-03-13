import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const FAQPage = () => {
	const { t } = useLanguage();
	const [openItems, setOpenItems] = useState([]);
	const [activeCategory, setActiveCategory] = useState('all');
	const [searchTerm, setSearchTerm] = useState('');

	const questions = t('faq.questions');

	const categories = [
		{ id: 'all', name: 'Все вопросы' },
		{ id: 'general', name: t('faq.categories.general') },
		{ id: 'auto', name: t('faq.categories.auto') },
		{ id: 'property', name: t('faq.categories.property') },
		{ id: 'tradein', name: t('faq.categories.tradein') }
	];

	const toggleItem = (index) => {
		if (openItems.includes(index)) {
			setOpenItems(openItems.filter(i => i !== index));
		} else {
			setOpenItems([...openItems, index]);
		}
	};

	const filteredQuestions = questions.filter(q => {
		const matchesCategory = activeCategory === 'all' || q.category === activeCategory;
		const matchesSearch = q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
			q.a.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-5xl font-bold mb-4">
						<span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
							{t('faq.title')}
						</span>
					</h1>
					<p className="text-xl text-gray-600">
						{t('faq.subtitle')}
					</p>
				</div>

				{/* Search */}
				<div className="relative mb-8">
					<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
					<input
						type="text"
						placeholder="Поиск вопросов..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none shadow-lg"
					/>
				</div>

				{/* Categories */}
				<div className="flex flex-wrap gap-3 mb-8">
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`px-4 py-2 rounded-lg font-medium transition-all ${
								activeCategory === category.id
									? 'bg-emerald-600 text-white shadow-lg'
									: 'bg-white text-gray-600 hover:bg-gray-100 shadow'
							}`}
						>
							{category.name}
						</button>
					))}
				</div>

				{/* FAQ Items */}
				<div className="space-y-4">
					{filteredQuestions.map((item, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
						>
							<button
								onClick={() => toggleItem(index)}
								className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
							>
								<span className="font-medium text-gray-900 pr-8">{item.q}</span>
								{openItems.includes(index) ? (
									<ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
								) : (
									<ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
								)}
							</button>

							{openItems.includes(index) && (
								<div className="px-6 pb-4">
									<p className="text-gray-600 leading-relaxed">{item.a}</p>
								</div>
							)}
						</div>
					))}
				</div>

				{/* Still have questions */}
				<div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-8 text-center text-white">
					<h2 className="text-2xl font-bold mb-4">Остались вопросы?</h2>
					<p className="mb-6 opacity-90">
						Свяжитесь с нами, и мы подробно ответим на все ваши вопросы
					</p>
					<button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
						Связаться с нами
					</button>
				</div>
			</div>
		</div>
	);
};

export default FAQPage;