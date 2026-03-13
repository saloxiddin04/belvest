import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import team from "../../assets/team.avif"

const Hero = () => {
	const { t } = useLanguage();

	return (
		<section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6 animate-slide-up">
						<h1 className="text-5xl font-bold leading-tight">
							<span className="text-emerald-600 dark:text-emerald-400">{t('home.hero.title')}</span>
							<br />
							<span className="dark:text-white">{t('home.hero.title2')}</span>
						</h1>
						<p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
							{t('home.hero.description')}
						</p>
						<div className="flex flex-wrap gap-4">
							<button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-medium flex items-center gap-2 group">
								{t('home.hero.more')}
								<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</button>
							<button className="border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 px-8 py-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors font-medium">
								{t('home.hero.contact')}
							</button>
						</div>
					</div>
					<div className="relative">
						<div className="absolute inset-0 bg-emerald-200 dark:bg-emerald-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
						<img
							src={team}
							alt="Team"
							className="relative rounded-2xl shadow-2xl animate-fade-in"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;