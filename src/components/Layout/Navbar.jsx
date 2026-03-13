import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [langOpen, setLangOpen] = useState(false);
	const { language, changeLanguage, t } = useLanguage();
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
		<nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-2 group">
						<span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
							BELVEST
						</span>
						{/*<span className="text-xs font-light text-gray-400 mt-3">since 2019</span>*/}
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
										: 'text-gray-600 hover:text-emerald-600'
								}`}
							>
								{item.label}
								<span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${
									isActive(item.path) ? 'scale-x-100' : ''
								}`}></span>
							</Link>
						))}

						{/* Language Selector */}
						<div className="relative">
							<button
								onClick={() => setLangOpen(!langOpen)}
								className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
							>
								<Globe className="w-4 h-4 text-emerald-600" />
								<span className="text-sm font-medium text-gray-700">
									{languages.find(l => l.code === language)?.flag}
								</span>
							</button>

							{langOpen && (
								<div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
									{languages.map((lang) => (
										<button
											key={lang.code}
											onClick={() => {
												changeLanguage(lang.code);
												setLangOpen(false);
											}}
											className={`w-full text-left px-4 py-2 text-sm hover:bg-emerald-50 transition-colors flex items-center space-x-2 ${
												language === lang.code ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700'
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
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
					>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden py-4 border-t border-gray-100">
						{navItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								onClick={() => setIsOpen(false)}
								className={`block py-2 px-4 text-sm font-medium rounded-lg transition-colors ${
									isActive(item.path)
										? 'text-emerald-600 bg-emerald-50'
										: 'text-gray-600 hover:bg-gray-50'
								}`}
							>
								{item.label}
							</Link>
						))}

						{/* Mobile Language Selector */}
						<div className="mt-4 pt-4 border-t border-gray-100">
							<div className="px-4 py-2 text-sm font-medium text-gray-500">Язык / Til / Language</div>
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
												: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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