import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [langOpen, setLangOpen] = useState(false);
	const { language, changeLanguage, t } = useLanguage();
	const { isDark, toggleTheme } = useTheme();
	const location = useLocation();

	const languages = [
		{ code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
		{ code: 'ru', name: 'Русский', flag: '🇷🇺' },
		{ code: 'en', name: 'English', flag: '🇬🇧' }
	];

	const navItems = [
		{ path: '/', label: t('nav.about') },
		{ path: '/team', label: t('nav.team') },
		{ path: '/clients', label: t('nav.clients') },
		{ path: '/contacts', label: t('nav.contacts') },
		{ path: '/faq', label: t('nav.faq') }
	];

	const isActive = (path) => location.pathname === path;

	return (
		<nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-2 group">
						<span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
							BELVEST
						</span>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`text-sm font-medium transition-all relative group ${
									isActive(item.path)
										? 'text-emerald-600'
										: 'text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
								}`}
							>
								{item.label}
								<span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${
									isActive(item.path) ? 'scale-x-100' : ''
								}`}></span>
							</Link>
						))}

						{/* Dark Mode Toggle */}
						<button
							onClick={toggleTheme}
							className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 flex items-center p-1 cursor-pointer"
							aria-label="Toggle dark mode"
						>
							<div className={`w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 flex items-center justify-center ${isDark ? 'translate-x-7' : 'translate-x-0'}`}>
								{isDark ? (
									<Moon className="w-3 h-3 text-emerald-400" />
								) : (
									<Sun className="w-3 h-3 text-yellow-500" />
								)}
							</div>
						</button>

						{/* Language Selector */}
						<div className="relative">
							<button
								onClick={() => setLangOpen(!langOpen)}
								className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							>
								<Globe className="w-4 h-4 text-emerald-600" />
								<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
									{languages.find(l => l.code === language)?.flag}
								</span>
							</button>

							{langOpen && (
								<div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-50">
									{languages.map((lang) => (
										<button
											key={lang.code}
											onClick={() => {
												changeLanguage(lang.code);
												setLangOpen(false);
											}}
											className={`w-full text-left px-4 py-2 text-sm hover:bg-emerald-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 ${
												language === lang.code ? 'text-emerald-600 bg-emerald-50 dark:bg-gray-700' : 'text-gray-700 dark:text-gray-300'
											}`}
										>
											<span>{lang.flag}</span>
											<span>{lang.name}</span>
										</button>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center gap-2">
						{/* Mobile Dark Mode Toggle */}
						<button
							onClick={toggleTheme}
							className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							aria-label="Toggle dark mode"
						>
							{isDark ? (
								<Moon className="w-5 h-5 text-emerald-400" />
							) : (
								<Sun className="w-5 h-5 text-yellow-500" />
							)}
						</button>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						>
							{isOpen ? <X className="w-6 h-6 dark:text-gray-300" /> : <Menu className="w-6 h-6 dark:text-gray-300" />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								onClick={() => setIsOpen(false)}
								className={`block py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
									isActive(item.path)
										? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30'
										: 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
								}`}
							>
								{item.label}
							</Link>
						))}

						{/* Mobile Language Selector */}
						<div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
							<div className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">Язык / Til / Language</div>
							<div className="flex space-x-2 px-4">
								{languages.map((lang) => (
									<button
										key={lang.code}
										onClick={() => {
											changeLanguage(lang.code);
											setIsOpen(false);
										}}
										className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
											language === lang.code
												? 'bg-emerald-600 text-white'
												: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
										}`}
									>
										{lang.flag} {lang.name}
									</button>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;