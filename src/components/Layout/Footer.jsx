import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, Facebook, Instagram, Send, Youtube } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
	const { t } = useLanguage();

	return (
		<footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8 mb-12">
					{/* About */}
					<div>
						<h3 className="text-2xl font-bold text-white mb-4">BELVEST</h3>
						<p className="text-sm text-gray-400 leading-relaxed">
							{t('footer.description')}
						</p>
						<div className="flex space-x-4 mt-6">
							<a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
								<Facebook className="w-5 h-5" />
							</a>
							<a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
								<Instagram className="w-5 h-5" />
							</a>
							<a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
								<Send className="w-5 h-5" />
							</a>
							<a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
								<Youtube className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-white font-bold mb-4">{t('footer.services')}</h4>
						<ul className="space-y-2">
							<li>
								<Link to="/services/installment" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
									{t('footer.installment')}
								</Link>
							</li>
							<li>
								<Link to="/services/tradein" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
									{t('footer.tradein')}
								</Link>
							</li>
							<li>
								<Link to="/services/consultation" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
									{t('footer.consultation')}
								</Link>
							</li>
						</ul>
					</div>

					{/* Navigation */}
					<div>
						<h4 className="text-white font-bold mb-4">{t('footer.navigation')}</h4>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
									{t('footer.about')}
								</Link>
							</li>
							<li>
								<Link to="/team" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
									{t('footer.team')}
								</Link>
							</li>
							<li>
								<Link to="/clients" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
									{t('nav.clients')}
								</Link>
							</li>
							<li>
								<Link to="/contacts" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
									{t('footer.contacts')}
								</Link>
							</li>
							<li>
								<Link to="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Contacts */}
					<div>
						<h4 className="text-white font-bold mb-4">{t('footer.contacts')}</h4>
						<ul className="space-y-3">
							<li className="flex items-start gap-3">
								<Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
								<a href="mailto:info@belvest.uz" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
									info@belvest.uz
								</a>
							</li>
							<li className="flex items-start gap-3">
								<Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
								<div className="flex flex-col">
									<a href="tel:+998774809999" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
										+998 77 480-99-99
									</a>
									<a href="tel:+998774802222" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
										+998 77 480-22-22
									</a>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
								<span className="text-gray-400 text-sm">
									{t('contacts.info.workTime')}
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-800 pt-8 text-center">
					<p className="text-sm text-gray-500">
						© 2026 Belvest. {t('footer.rights')}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;