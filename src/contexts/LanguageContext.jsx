import React, { createContext, useState, useContext } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('uz'); // ru, uz, en

	const changeLanguage = (lang) => {
		setLanguage(lang);
	};

	const t = (key) => {
		const keys = key.split('.');
		let value = translations[language];

		for (const k of keys) {
			if (value && value[k] !== undefined) {
				value = value[k];
			} else {
				console.warn(`Translation key not found: ${key}`);
				return key;
			}
		}

		return value;
	};

	return (
		<LanguageContext.Provider value={{ language, changeLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};